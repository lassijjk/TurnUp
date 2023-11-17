import { useState, useEffect } from 'react'
import './Home.css'
import axios from 'axios'
import { Grid, Typography, TextField, InputAdornment, Pagination } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useNavigate, useSearchParams } from 'react-router-dom'
import EventCard from '../components/Cards/EventCard.tsx'
import { EventObj } from '../types/event.ts'
import SearchIcon from '@mui/icons-material/Search'
import { VITE_MAP_EVENT_API } from '../constants.ts'
import { useDebounce } from '../hooks/useDebounce.tsx'
import Loading from '../components/Loading.tsx'

const MAX_ITEMS_PER_PAGE = 16
const Home = () => {
  const { t } = useTranslation()
  const [events, setEvenets] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [totalPage, setTotalPage] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState<number>(Number.parseInt(searchParams.get('page') || '1'))
  const [search, setSearch] = useState<string>('')
  const debouncedValue = useDebounce<string>(search, 500)

  const navigate = useNavigate()

  useEffect(() => {
    fetchEvents()
  }, [currentPage, debouncedValue])

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setSearchParams({ ['page']: value } as any)
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    setCurrentPage(1)
  }, [debouncedValue])

  const fetchEvents = async () => {
    setIsLoading(true)
    let api = `${VITE_MAP_EVENT_API}?limit=${MAX_ITEMS_PER_PAGE}&offset=0&nameSearch=${debouncedValue}`
    if (currentPage > 0) {
      api = `${VITE_MAP_EVENT_API}?limit=${MAX_ITEMS_PER_PAGE}&offset=${
        (currentPage - 1) * MAX_ITEMS_PER_PAGE
      }&nameSearch=${debouncedValue}`
    }
    const data = await axios.get(api)
    setEvenets(data.data.data)
    setTotalPage(data.data.count === 0 ? 0 : Math.floor(data.data.count / MAX_ITEMS_PER_PAGE) + 1)
    setIsLoading(false)
  }

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
            <Loading />
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
