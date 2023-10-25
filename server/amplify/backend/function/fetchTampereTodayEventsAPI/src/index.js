const { Client } = require('pg');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  const eventId = event.pathParameters.eventId;
  const limit = event.pathParameters.limit;
  const offset = event.pathParameters.offset;
  const nameSearch = event.pathParameters.nameSearch;
  const db = new Client({
    user: 'postgres',
    host: 'event-today-instance.co1rg6n1oike.eu-north-1.rds.amazonaws.com',
    database: 'event_today',
    password: 'c2s5Iuk&D]:n7T7(N=oKes8L9eM75L)r',
    port: 5432,
    ssl: { rejectUnauthorized: false }
  });

  try {
    // Connect to the PostgreSQL database
    await db.connect();

    // Define your SQL query to retrieve data from the "event" table with optional filters
    let eventQuery = `
      SELECT
        id,
        creationDate,
        modificationDate,
        name,
        start_time,
        end_time,
        location_address,
        location_geo_first_index,
        location_geo_second_index,
        description,
        is_free,
        categories,
        topics,
        targets,
        url
      FROM event
    `;

    // Create an array to hold the query parameters
    const queryParams = [];

    // Add optional filters based on provided parameters
    if (eventId) {
      eventQuery += ' WHERE id = $1';
      queryParams.push(eventId);
    }
    if (nameSearch) {
      if (eventId) {
        eventQuery += ' AND name ILIKE $2';
      } else {
        eventQuery += ' WHERE name ILIKE $1';
      }
      queryParams.push(`%${nameSearch}%`);
    }
    if (offset && limit) {
      eventQuery += ' OFFSET $';
      queryParams.push(offset);
      eventQuery += ' LIMIT $';
      queryParams.push(limit);
    }

    // Execute the SQL query to retrieve data from the "event" table with optional filters
    const eventResult = await db.query(eventQuery, queryParams);

    // Define your SQL query to retrieve data from the "date" table with optional eventId filter
    let dateQuery = `
      SELECT
        event_id,
        start,
        "end",
        isSoldOut
      FROM date
    `;
    const dateParams = [];

    if (eventId) {
      dateQuery += ' WHERE event_id = $1';
      dateParams.push(eventId);
    }

    // Execute the SQL query to retrieve data from the "date" table with optional eventId filter
    const dateResult = await db.query(dateQuery, dateParams);

    // Define your SQL query to retrieve data from the "image" table with optional eventId filter
    let imageQuery = `
      SELECT
        event_id,
        url,
        type,
        width,
        height
      FROM image
    `;
    const imageParams = [];

    if (eventId) {
      imageQuery += ' WHERE event_id = $1';
      imageParams.push(eventId);
    }

    // Execute the SQL query to retrieve data from the "image" table with optional eventId filter
    const imageResult = await db.query(imageQuery, imageParams);

    // Define your SQL query to retrieve data from the "link" table with optional eventId filter
    let linkQuery = `
      SELECT
        event_id,
        url,
        name
      FROM link
    `;
    const linkParams = [];

    if (eventId) {
      linkQuery += ' WHERE event_id = $1';
      linkParams.push(eventId);
    }

    // Execute the SQL query to retrieve data from the "link" table with optional eventId filter
    const linkResult = await db.query(linkQuery, linkParams);

    // Create a structured object from the retrieved data
    const eventData = eventResult.rows.map(eventRow => {
      const dates = dateResult.rows.filter(dateRow => dateRow.event_id === eventRow.id);
      const images = imageResult.rows.filter(imageRow => imageRow.event_id === eventRow.id);
      const links = linkResult.rows.filter(linkRow => linkRow.event_id === eventRow.id);

      return {
        id: eventRow.id,
        creationDate: eventRow.creationDate,
        modificationDate: eventRow.modificationDate,
        name: eventRow.name,
        start_time: eventRow.start_time,
        end_time: eventRow.end_time,
        locations: [
          {
            address: eventRow.location_address,
            geoIndex: [eventRow.location_geo_first_index, eventRow.location_geo_second_index],
          },
        ],
        dates: dates.map(dateRow => ({
          end: dateRow.end,
          start: dateRow.start,
          isSoldOut: dateRow.isSoldOut,
        })),
        links: links.map(linkRow => ({
          url: linkRow.url,
          name: linkRow.name,
        })),
        images: images.map(imageRow => ({
          url: imageRow.url,
          type: imageRow.type,
          width: imageRow.width,
          height: imageRow.height,
        })),
        description: eventRow.description,
        is_free: eventRow.is_free,
        categories: eventRow.categories.split(', '), // Assuming categories is a comma-separated string
        topics: eventRow.topics.split(', '), // Assuming topics is a comma-separated string
        targets: eventRow.targets.split(', '), // Assuming targets is a comma-separated string
        url: eventRow.url,
      };
    });
    return eventData;
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    // Close the database connection
    await db.end();
  }
};
