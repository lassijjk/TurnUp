import  { useState, useRef } from 'react';
import './Home.css'
import {  Grid } from '@mui/material'
import { Helmet } from 'react-helmet-async'

import { useNavigate } from 'react-router-dom'
import EventCard from '../components/Cards/EventCard.tsx'
import { EventObj } from '../types/event.ts'
import useTodaysEvents from '../api/useTodaysEvents.ts'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FormControl} from '@mui/material';
import { FaCalendarAlt } from 'react-icons/fa';

const Home = () => {
  const ITEMS_ON_PAGE: number = 16;
 // const { t } = useTranslation();
  const events = useTodaysEvents(ITEMS_ON_PAGE);
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  //const [filterOption, setFilterOption] = useState<string>('all');
  const calendarRef = useRef<DatePicker | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleDatePickerClick = () => {
    calendarRef.current?.setOpen(true);
  };

/*  const handleFilterChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFilterOption(event.target.value as string);
  };
*/
  const handleEventClick = (eventId: string) => {
    navigate(`/event/${eventId}`);
  };

  const filteredEvents = Array.isArray(events)
    ? events.filter((event) => {
        const eventStartDate = new Date(event.start_time);
        const eventEndDate = new Date(event.end_time);

        if (selectedDate) {
          return selectedDate >= eventStartDate && selectedDate <= eventEndDate;
        }

        return true;
      })
    : Array.from(events.values()).flatMap((eventArr) =>
        eventArr.filter((event) => {
          const eventStartDate = new Date(event.start_time);
          const eventEndDate = new Date(event.end_time);

          if (selectedDate) {
            return selectedDate >= eventStartDate && selectedDate <= eventEndDate;
          }

          return true;
        })
      );

  return (
    <>
      <Helmet>
        <title>Turn Up </title>
      </Helmet>
      <Grid container spacing={2} className="event-card-container">
        <Grid item xs={12}>
          <div className="filter-container">
            <FormControl fullWidth>
              <div className="datepicker-container">
                <div className="datepicker-button" onClick={handleDatePickerClick}>
                  <FaCalendarAlt className="datepicker-icon" />
                  {selectedDate ? selectedDate.toLocaleDateString() : 'Select a date'}
                </div>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
    
                  className="datepicker-input"
                  ref={calendarRef}
                  popperPlacement="bottom-end"
                  customInput={<></>}
                />
              </div>
            </FormControl>
          </div>
        </Grid>
        {filteredEvents.map((event: EventObj) => (
          <EventCard
            event={event}
            key={event.id}
            onClick={() => {
              const [id] = event.id.split('-');
              handleEventClick(id);
            }}
          />
        ))}
      </Grid>
    </>
  );
};

export default Home;