import { Alert, Box, Button, Card, Grid, Modal, Snackbar, TextField, Typography } from '@mui/material'
import './Itineraries.css'
import { createItinerary, useGetItineraries, useGetUserData } from '../hooks/appSyncHooks'
import { useEffect, useState } from 'react'
import { VITE_MAP_EVENT_API } from '../constants'
import axios from 'axios'
import { SingleEvent } from '../types/event'
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined'
import EditIcon from '@mui/icons-material/Edit'
import { CreateItineraryMutation, Itinerary } from '../types/graphqlAPI'
import { useNavigate } from 'react-router-dom'
import { convertToReadableTime } from '../utils/convertToReadableTime'
import { convertToReadableDate } from '../utils/convertToReadableDate'
import { t } from 'i18next'

const Itineraries = () => {
  const [itinerary, setItinerary] = useState<{
    [key: string]: SingleEvent[]
  }>()
  const navigate = useNavigate()
  const itineraries = useGetItineraries()

  const [openModal, setOpenModal] = useState(false)
  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)
  const [itineraryName, setItineraryName] = useState('')
  const [openAlert, setOpenAlert] = useState(false)
  const userData = useGetUserData()

  const fetchEventById = async (id: string) => {
    const response = await axios.get(`${VITE_MAP_EVENT_API}?eventId=${id}`)

    return response.data
  }

  const getEventsById = async (_itineraries: Itinerary[] | null) => {
    if (!_itineraries) return

    const eventsByTitle = _itineraries.reduce(async (accumulator, item) => {
      if (!item?.events) return accumulator

      const title = item.title
      const ids = item.events.items.map((_item) => _item?.eventId).filter(Boolean)

      const events = await Promise.all(
        ids.map(async (_id) => {
          if (_id) {
            const response = await fetchEventById(_id)
            return response.data
          }
        })
      )

      const updatedAccumulator = await accumulator

      return {
        ...updatedAccumulator,
        [title]: events.filter((event) => event !== null).flat(),
      }
    }, Promise.resolve({}))

    return eventsByTitle
  }

  useEffect(() => {
    const _itineraries = itineraries?.listItineraries?.items

    if (!_itineraries) return

    const fetchData = async () => {
      const response = await getEventsById(_itineraries as Itinerary[])
      setItinerary((prevItinerary) => ({
        ...prevItinerary,
        ...response,
      }))
    }

    void fetchData()
  }, [itineraries?.listItineraries?.items])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItineraryName(event.target.value)
  }

  const ItineraryCount = itineraries?.listItineraries?.items.length

  const handleCreateItinerary = async () => {
    const userItem = userData?.userBySub?.items[0]
    const itineraryExisits = userItem?.itineraries?.items.find((item) => item?.title === itineraryName)
    if (itineraryExisits) {
      console.log('Already exists')
    } else {
      //Create an itinerary for current user with title: itineraryName
      ;(await createItinerary({
        title: itineraryName,
        userItinerariesId: userItem?.id,
      })) as CreateItineraryMutation
      setOpenAlert(true)
    }
  }
  const handleAlertClose = (_event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenAlert(false)
  }

  const getSelectedDates = (title: string, eventId: string) =>
    itineraries?.listItineraries?.items
      .filter((item) => item?.title === title)
      .flatMap(
        (item) =>
          item?.events?.items?.flatMap((_item) => {
            const idMatches = _item?.eventId === eventId

            return _item?.dateTimes && idMatches ? _item?.dateTimes : []
          })
      )
      .flatMap((item) => item)

  return (
    <Grid container className="grid-container">
      <Card className="card-wrapper">
        <Button className="btn-frame btn-back itinerary-back-btn" onClick={() => `${navigate('/')}`}>
          Back
        </Button>
        <Grid className="itinerary-header">
          <DirectionsBusFilledOutlinedIcon className="header-contents" sx={{ fontSize: 64, color: '#3F3E3E' }} />
          {ItineraryCount && ItineraryCount > 0 && (
            <Typography variant="h5" style={{ lineHeight: '64px' }} className="header-contents">
              {`You have (${ItineraryCount}) upcoming itineraries.`}
            </Typography>
          )}
          <Button className="itinerary-btn header-contents create-btn" onClick={handleOpen}>
            Create new
          </Button>
        </Grid>

        {openModal && (
          <Modal open={openModal} onClose={handleClose}>
            <Box className="itinerary-modal">
              <TextField placeholder="Add itinerary name" value={itineraryName} onChange={handleInputChange} />
              <Button className="itinerary-btn" onClick={handleCreateItinerary}>
                Save
              </Button>
              <Typography sx={{ mt: 3 }}>Create new itinerary.</Typography>
              <Snackbar open={openAlert} autoHideDuration={6000000} onClose={handleAlertClose}>
                <Alert onClose={handleAlertClose} sx={{ width: '100%' }} className="saved-alert">
                  Itinerary created successfully
                </Alert>
              </Snackbar>
            </Box>
          </Modal>
        )}

        {itinerary &&
          Object.entries(itinerary).map((itinerary, index) => {
            const [title, events] = itinerary
            return (
              <Grid key={`itinerary-${index}`} container className="single-itinerary-wrapper">
                <Card key={`itinerary-${index}`} className="single-itinerary" title={title}>
                  <Typography variant="h6" className="itinerary-details itinerary-name">
                    {title}
                  </Typography>
                  <div className="itinerary-details events">
                    {events.map((event, _index) => {
                      const date = getSelectedDates(title, event.id)

                      return (
                        <Typography variant="h6" className="itinerary-event" key={`event-${_index}`}>
                          <div className="event-detail-wrapper">
                            <Typography className="event-names">{event.name}</Typography>
                            {date &&
                              date.map((dt, index) => (
                                <div key={`${dt} ${index}`} className="event-date-time">
                                  <Box>{dt?.start && convertToReadableDate(dt.start, t)}</Box>
                                  <Box className="event-time">
                                    {dt?.start && convertToReadableTime(dt.start)} -{' '}
                                    {dt?.end && convertToReadableTime(dt?.end)}
                                  </Box>
                                </div>
                              ))}
                          </div>
                        </Typography>
                      )
                    })}
                  </div>
                  <Typography className="itinerary-details edit-itinerary">
                    <DirectionsBusFilledOutlinedIcon className="bus-icon" />
                    <Button className="btn-frame btn-edit ">
                      {<EditIcon sx={{ fontSize: 15, padding: '2px' }} />}Edit
                    </Button>
                  </Typography>
                </Card>
              </Grid>
            )
          })}
      </Card>
    </Grid>
  )
}

export default Itineraries
