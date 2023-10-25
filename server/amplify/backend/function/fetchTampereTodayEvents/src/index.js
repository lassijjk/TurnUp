const axios = require('axios');
const { Client } = require('pg');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async () => {
  const db = new Client({
    user: 'postgres',
    host: 'event-today-instance.co1rg6n1oike.eu-north-1.rds.amazonaws.com',
    database: 'event_today',
    password: 'c2s5Iuk&D]:n7T7(N=oKes8L9eM75L)r',
    port: 5432,
    ssl: { rejectUnauthorized: false }
  });
  

  try {
    await db.connect();
    // Delete all data from the "event" table
    await db.query('DELETE FROM event');
    // Delete all data from the "image" table
    await db.query('DELETE FROM image');
    // Delete all data from the "date" table
    await db.query('DELETE FROM date');
    // Delete all data from the "link" table
    await db.query('DELETE FROM link');
    const response = await axios.get('https://api.visittampere.com/api/v1/eventztoday/event/all/?lang=en');
    const eventDataList = await response.data;
    for(let i = 0; i < eventDataList.length; i++) {
      let data = eventDataList[i];
      const eventQuery = `
        INSERT INTO event (id, creationDate, modificationDate, name, start_time, end_time, location_address, location_geo_first_index, location_geo_second_index, description, is_free, categories, topics, targets, url)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
      `;
      const eventData = [
        data._id,
        data.creationDate,
        data.modificationDate,
        data.name,
        data.start_time,
        data.end_time,
        data.locations[0].address,
        data.locations[0].geoIndex[0],
        data.locations[0].geoIndex[1],
        data.description,
        data.is_free,
        data.categories.join(', '), // Assuming categories is an array
        data.topics.join(', '), // Assuming topics is an array
        data.targets.join(', '), // Assuming targets is an array
        data.url,
      ];
      await db.query(eventQuery, eventData);

      if(data.images && data.images.length > 0) {
        for(let j = 0; j < data.images.length; j++) {
          // Insert data into the "image" table
          if(data.images[j].url && data.images[j].type && data.images[j].width && data.images[j].height) {
            const imageQuery = `
            INSERT INTO image (event_id, url, type, width, height)
            VALUES ($1, $2, $3, $4, $5)
            `;
            const imageData = [
            data._id,
            data.images[j].url,
            data.images[j].type,
            data.images[j].width,
            data.images[j].height,
            ];
            await db.query(imageQuery, imageData);
          }
        }
      }

      // Insert data into the "date" table
      if(data.dates && data.dates.length > 0) {
        for(let g = 0; g < data.dates.length; g++) {
          if(data.dates[g].start && data.dates[g].end && data.dates[g].isSoldOut) {
            const dateQuery = `
              INSERT INTO date (event_id, start, "end", isSoldOut)
              VALUES ($1, $2, $3, $4)
            `;
            const dateData = [
            data._id,
            data.dates[g].start,
            data.dates[g].end,
            data.dates[g].isSoldOut,
            ];
            await db.query(dateQuery, dateData);
          }
        }
      }
      

      // Insert data into the "link" table
      if(data.links && data.links.length > 0 && data.links[0].url && data.links[0].name && data._id) {
        const linkQuery = `
          INSERT INTO link (event_id, url, name)
          VALUES ($1, $2, $3)
        `;
        const linkData = [
        data._id,
        data.links[0].url,
        data.links[0].name,
        ];
        await db.query(linkQuery, linkData);
      }
    }
    console.log('Data inserted successfully.');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    await db.end();
  }
};
