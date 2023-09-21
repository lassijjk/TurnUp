import { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { EventObj } from "../types/Event.ts";

const UseTodaysEvents = (max: number = 0) => {
    const [events, setEvents] = useState<EventObj[]>([]);

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

    return max ? _.take(events, max) : events;
};

export default UseTodaysEvents;