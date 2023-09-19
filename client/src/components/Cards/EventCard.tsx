import React, { useState } from 'react'
import './EventCard.css';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import EventTag from "../Buttons/EventTag.tsx";

const EventCard: React.FC = () => {


    return (
        <div className="event-card-frame">
            <h3>Molli ja ystävyyden talo (Ahaa teatteri)</h3>
            <div className="time-to">
                <h4>21/8/2023</h4>
                <div className='event-card-tags'>
                    <EventTag variant='for-kids'></EventTag>
                    <EventTag variant='culture'></EventTag>
                </div>
            </div>
            <div className="travel-time">
                <h4>26 min</h4>
                <DirectionsBusIcon color="var(--green)" fontSize="large" className="bus-icon"/>
            </div>
        </div>
    );
}

export default EventCard
