import  { useState, useRef } from 'react';
import './Home.css'
import { Grid, SelectChangeEvent, MenuItem, InputLabel, Select, FormControl } from '@mui/material'
import { Helmet } from 'react-helmet-async'

import { useNavigate } from 'react-router-dom'
import EventCard from '../components/Cards/EventCard.tsx'
import { EventObj } from '../types/event.ts'
import useTodaysEvents from '../api/useTodaysEvents.ts'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaClock } from "react-icons/fa";
import { convertDateforFilter } from '../utils/convertDateforFilter.ts'

const Home = () => {
  const ITEMS_ON_PAGE: number = 16;
 // const { t } = useTranslation();
  const events = useTodaysEvents(ITEMS_ON_PAGE);
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  //const [filterOption, setFilterOption] = useState<string>('all');
  const calendarRef = useRef<DatePicker | null>(null);

  const [selectedTimeSegment, setSelectedTimeSegment] = useState<string | null>(null);
  

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

 

  const handleTimeSegmentChange = (event: SelectChangeEvent<string>) => {
    setSelectedTimeSegment(event.target.value);
  };

  const isTimeWithinSegment = (startHour: number, segment: string) => {
    switch (segment) {
      case 'all':
        return true;      
      case 'morning':
        return startHour >= 0 && startHour < 6;
      case 'noon':
        return startHour >= 6 && startHour < 12;
      case 'afternoon':
        return startHour >= 12 && startHour < 18;
      case 'evening':
        return startHour >= 18 && startHour <= 23;
      default:
        return false;
    }
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
  ? events.filter((event: EventObj) => {
      const eventDates = event.dates || [{ start: event.start_time, end: event.end_time }];

      return eventDates.some((date: { start: string | Date; end: string | Date }) => {
        const eventStartDate = convertDateforFilter(date.start);
        const eventEndDate = convertDateforFilter(date.end);

        // Check if the event's date is within the selected date range
        if(selectedDate){
          const selectedDateTime = convertDateforFilter(selectedDate);
          if (!(selectedDateTime>= eventStartDate && selectedDateTime <= eventEndDate)) {
            return false;
          }
        }

        // Check if the event's time is within the selected time segment
        const eventStartHour = new Date(date.start).getUTCHours();
        const timeSegmentMatch = selectedTimeSegment
          ? isTimeWithinSegment(eventStartHour, selectedTimeSegment)
          : true;         

        // If both date and time conditions are satisfied, include the event
        return timeSegmentMatch;
      });
    })
  : Array.from(events.values()).flatMap((eventArr) =>
      eventArr.filter((event) => {
        const eventDates = event.dates || [{ start: event.start_time, end: event.end_time }];

        return eventDates.some((date: { start: string | Date; end: string | Date }) => {
          const eventStartDate = convertDateforFilter(date.start);
          const eventEndDate = convertDateforFilter(date.end);

          if(selectedDate){
            const selectedDateTime = convertDateforFilter(selectedDate);
            if (!(selectedDateTime>= eventStartDate && selectedDateTime <= eventEndDate)) {
              return false;
            }
          }

          // Check if the event's time is within the selected time segment
          const eventHour = new Date(date.start).getUTCHours(); // Assuming start time represents the hour of the day
          const timeSegmentMatch = selectedTimeSegment
            ? isTimeWithinSegment(eventHour, selectedTimeSegment)
            : true;

          // If both date and time conditions are satisfied, include the event
          return timeSegmentMatch;
        });
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
      <div className="timepicker-container">
      <FaClock className="timepicker-icon" />
        <FormControl fullWidth>
          <InputLabel id="time-segment-label">Select Time</InputLabel>
          <Select
            labelId="time-segment-label"
            id="time-segment-select"
            value={selectedTimeSegment || ''}
            onChange={handleTimeSegmentChange}
          >
            <MenuItem value={'all'}>All</MenuItem>
            <MenuItem value={'morning'}>Morning</MenuItem>
            <MenuItem value={'noon'}>Noon</MenuItem>
            <MenuItem value={'afternoon'}>Afternoon</MenuItem>
            <MenuItem value={'evening'}>Evening</MenuItem>
          </Select>
        </FormControl>
      </div>
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