import { useState, useRef } from 'react';
import './Home.css';
import { Grid } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import EventCard from '../components/Cards/EventCard.tsx';
import { EventObj } from '../types/event.ts';
import useTodaysEvents from '../api/useTodaysEvents.ts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FormControl } from '@mui/material';
import { FaCalendarAlt, FaClock } from 'react-icons/fa'; // Import FaClock icon
import { useTranslation } from 'react-i18next';
import { convertDateforFilter } from '../utils/convertDateforFilter.ts';
import { convertToReadableTime } from '../utils/convertToReadableTime'
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

const Home = () => {
  const ITEMS_ON_PAGE: number = 16;
  const { t } = useTranslation();
  const events = useTodaysEvents(ITEMS_ON_PAGE);
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const calendarRef = useRef<DatePicker | null>(null);
  const [isTimePickerOpen, setTimePickerOpen] = useState(false);


  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time: string | Date | null) => {
    if (typeof time === 'string') {
      setSelectedTime(time);
    }
  };

  const handleDatePickerClick = () => {
    calendarRef.current?.setOpen(true);
  };

  const handleTimePickerClick = () => {
    setTimePickerOpen(!isTimePickerOpen);
  };
  

  const handleEventClick = (eventId: string) => {
    navigate(`/event/${eventId}`);
  };

  const filteredEvents = Array.isArray(events)
    ? events.filter((event: EventObj) => {
        const eventDates = event.dates || [{ start: event.start_time, end: event.end_time }];

        return eventDates.some((date: { start: string | Date; end: string | Date }) => {
          const eventStartDate = new Date(convertDateforFilter(date.start)).setHours(0, 0, 0, 0);
        const eventEndDate = new Date(convertDateforFilter(date.end)).setHours(23, 59, 59, 999);
        const eventStartTime = new Date(convertToReadableTime(date.start));
        const eventEndTime = new Date(convertToReadableTime(date.end));

        if (selectedDate && selectedTime) {
          const selectedDateTime = new Date(`${selectedDate.toISOString().split('T')[0]}T${selectedTime}`);
          return selectedDateTime.getTime() >= eventStartDate && selectedDateTime.getTime() <= eventEndDate;
        }

        if (selectedDate) {
          const selectedDateTime = new Date(selectedDate).setHours(0, 0, 0, 0);
          return selectedDateTime >= eventStartDate && selectedDateTime <= eventEndDate;
        }

        if (selectedTime) {
          const selectedDateTime = new Date(
            `${selectedDate!.toISOString().split('T')[0]}T${selectedTime}`
          );
          return eventStartTime <= selectedDateTime && selectedDateTime <= eventEndTime;
        }

        return true;
        });
      })
    : Array.from(events.values()).flatMap((eventArr) =>
        eventArr.filter((event) => {
          const eventDates = event.dates || [{ start: event.start_time, end: event.end_time }];

          return eventDates.some((date: { start: string | Date; end: string | Date }) => {
            const eventStartDate = new Date(convertDateforFilter(date.start)).setHours(0, 0, 0, 0);
            const eventEndDate = new Date(convertDateforFilter(date.end)).setHours(23, 59, 59, 999);
            const eventStartTime = new Date(convertToReadableTime(date.start));
            const eventEndTime = new Date(convertToReadableTime(date.end));
    
            if (selectedDate && selectedTime) {
              const selectedDateTime = new Date(`${selectedDate.toISOString().split('T')[0]}T${selectedTime}`);
              return selectedDateTime.getTime() >= eventStartDate && selectedDateTime.getTime() <= eventEndDate;
            }
    
            if (selectedDate) {
              const selectedDateTime = new Date(selectedDate).setHours(0, 0, 0, 0);
              return selectedDateTime >= eventStartDate && selectedDateTime <= eventEndDate;
            }
    
            if (selectedTime) {
              const selectedDateTime = new Date(
                `${selectedDate!.toISOString().split('T')[0]}T${selectedTime}`
              );
              return eventStartTime <= selectedDateTime && selectedDateTime <= eventEndTime;
            }
    
            return true;
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
              <div className="timepicker-container">
                <div className="timepicker-button" onClick={handleTimePickerClick}>
                <FaClock className="timepicker-icon" />
                  
                  {selectedTime ? selectedTime : 'Select a time'}
                </div>
                {isTimePickerOpen && (
                  <div className="timepicker-input-container">
                    {/* Add your time picker component here */}
                    <TimePicker
                      value={selectedTime}
                      format="HH:mm"
                      onChange={(time: string | Date | null) => {
                        handleTimeChange(time);
                        setTimePickerOpen(false); // Close the time picker when a time is selected
                      }}
                    />
                  </div>
                )}
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
