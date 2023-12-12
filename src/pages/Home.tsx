import { useState, useEffect} from 'react'
import { useRef } from 'react';
import './Home.css'
import axios from 'axios'
import { Grid, Typography, TextField, InputAdornment, Pagination, Box, CircularProgress } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useTranslation } from 'react-i18next'
import { useNavigate, useSearchParams } from 'react-router-dom'
import EventCard from '../components/Cards/EventCard.tsx'
import { EventObj } from '../types/event.ts'
import SearchIcon from '@mui/icons-material/Search'
import { VITE_MAP_EVENT_API } from '../constants.ts'
import { convertDateforFilter } from '../utils/convertDateForFilter.ts';
import { FaCalendarAlt } from 'react-icons/fa';


const MAX_ITEMS_PER_PAGE = 16
const Home = () => {
  const { t } = useTranslation()
  const [events, setEvents] = useState<EventObj[]>([]);
  const [isLoading, setIsLoading] = useState(false)
  const [totalPage, setTotalPage] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState<number>(Number.parseInt(searchParams.get('page') || '1'))
  const [search, setSearch] = useState<string>('')
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const calendarRef = useRef<DatePicker>(null);




  const navigate = useNavigate()

  useEffect(() => {
    fetchEvents()
  }, [currentPage, search, selectedDate])

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setSearchParams({ ['page']: value } as any)
    window.scrollTo(0, 0)
  }

  const handleDatePickerClick = () => {
    if (calendarRef.current) {
      calendarRef.current.setOpen(true);
    }
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    // Refetch events when the date changes
    fetchEvents();
    
  };
   


  useEffect(() => {
    setCurrentPage(1)
  }, [search])

  const fetchEvents = async () => {
    setIsLoading(true);
  
    let api = `${VITE_MAP_EVENT_API}?limit=${MAX_ITEMS_PER_PAGE}&offset=0&nameSearch=${search}`;
  
    if (currentPage > 0) {
      api = `${VITE_MAP_EVENT_API}?limit=${MAX_ITEMS_PER_PAGE}&offset=${(currentPage - 1) * MAX_ITEMS_PER_PAGE}&nameSearch=${search}`;
    }
  
    try {
      const response = await axios.get(api);
      const eventData = response.data.data;
  
      // Filter events based on the selected date
      const filteredEvents = eventData.filter((event: EventObj) => {
        const eventDates = event.dates || [{ start: event.startTime, end: event.endTime }];
  
        return eventDates.some((date: { start: string | Date; end: string | Date }) => {
          const eventStartDate = convertDateforFilter(date.start);
          const eventEndDate = convertDateforFilter(date.end);
  
          // Check if the event's date is within the selected date range
          if (selectedDate) {
            const selectedDateTime = convertDateforFilter(selectedDate);
            return selectedDateTime >= eventStartDate && selectedDateTime <= eventEndDate;
          }
  
          // If no selected date, include the event
          return true;
        });
      });
  
      setEvents(filteredEvents);
      setTotalPage(response.data.count === 0 ? 0 : Math.floor(response.data.count / MAX_ITEMS_PER_PAGE) + 1);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleClearFilter = () => {
    setSelectedDate(null);
    fetchEvents(); // Fetch all events again
  };

  const handleEventClick = (eventId: string) => {
    navigate(`/event/${eventId}`)
  }

  return (
    <>
      <Helmet>
        <title>Turn Up</title>
      </Helmet>
      <Grid container className="event-card-container">
        <Grid item xs={12}>
          <Typography component="h1" className="home-title">
            {t('EVENT_LIST.QUESTION')}
          </Typography>
          <Grid container className="search-event-container">
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Search events"
                id="fullWidth"
                className="search-event"
                value={search}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setSearch(event.target.value)
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          {isLoading && (
            <Box className="event-loader">
              <CircularProgress color="secondary" />
            </Box>
          )}
        </Grid>
        <Grid item xs={12} className="datepicker-container">
    {/* Your datepicker goes here */}
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
    {selectedDate && (
            <div className="clear-filter-button-container">
            <div className="clear-filter-button" onClick={handleClearFilter}>
              Clear Filter
            </div>
            </div>
          )}
       
        </Grid>

        {!isLoading &&
          events &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (events as any[]).map((event: EventObj) => (
            <EventCard
              event={event}
              key={event.id}
              onClick={() => {
                const [id] = event.id.split('-')
                handleEventClick(id)
              }}
            />
          ))}
        {!isLoading && (
          <Grid item xs={12} className="event-pagination-container">
            <Pagination
              count={totalPage}
              color="primary"
              className="event-pagination"
              page={currentPage}
              onChange={handleChange}
            />
          </Grid>
        )}
      </Grid>
    </>
  )
}

export default Home
