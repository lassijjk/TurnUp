import { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';

const UseTodaysEvents = (max: number) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.visittampere.com/api/v1/eventztoday/event/all/?lang=en')
            .then((response) => {
                setEvents(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return _.take(events, max).map(event => {
        return {
            id: event.id,
            name: event.name,
            description: event.description,
            startTime: event.start_time,
            images: event.images
        };
    });
};

export default UseTodaysEvents;