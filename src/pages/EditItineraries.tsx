import { Button, Card, Grid, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit'
import { deleteItinerary, deleteUserEvent, useGetItineraries } from '../hooks/appSyncHooks'
import DeleteIcon from '@mui/icons-material/Delete'
import './EditItineraries.css'
import { useEffect, useState } from 'react'
import { SingleEvent } from '../types/event'
import {
  DeleteItineraryInput,
  DeleteItineraryMutation,
  DeleteUserEventInput,
  DeleteUserEventMutation,
} from '../types/graphqlAPI'
import axios from 'axios'
import { VITE_MAP_EVENT_API } from '../constants'

const EditItineraries = () => {
  const [events, setEvents] = useState<SingleEvent[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const navigate = useNavigate()
  const { id } = useParams()
  const itineraries = useGetItineraries()

  const _itinerary = itineraries?.listItineraries?.items.find((itinerary) => itinerary?.id === id)
  const ids = _itinerary?.events?.items.flatMap((item) => item?.eventId) || []

  const fetchEventById = async (_id: string) => {
    try {
      const response = await axios.get(`${VITE_MAP_EVENT_API}?eventId=${_id}`)
      return response.data.data
    } catch (error) {
      console.error(`Error fetching event with ID ${_id}:`, error)
      return null
    }
  }

  const fetchAllEvents = async () => {
    try {
      const eventPromises = ids.map((_id) => fetchEventById(_id as string))
      const eventsData = await Promise.all(eventPromises)
      const flattenedEvents = eventsData.flat()
      setLoading(false)

      return flattenedEvents
    } catch (error) {
      console.error('Error fetching events:', error)
      return []
    }
  }

  useEffect(() => {
    const updateEvents = async () => {
      const fetchedEvents = await fetchAllEvents()
      setEvents(fetchedEvents)
    }

    void updateEvents()
  }, [_itinerary])

  const handleDeleteItinerary = async () => {
    if (_itinerary) {
      if (id) {
        _itinerary.events?.items.forEach(async (event) => {
          await deleteSingleEvent(event?.id as string)
        })

        const inputData: DeleteItineraryInput = {
          id: id,
        }
        const response = (await deleteItinerary(inputData)) as DeleteItineraryMutation

        console.log(response, 'DELETEDItinerary')
      }
      setEvents([])
      navigate('/Itineraries')
    }
  }
  const deleteSingleEvent = async (eventId: string) => {
    const userEventId = _itinerary?.events?.items.find((event) => event?.eventId === eventId)?.id
    if (userEventId) {
      const inputData: DeleteUserEventInput = {
        id: userEventId,
      }
      const response = (await deleteUserEvent(inputData)) as DeleteUserEventMutation
      console.log(response, 'DELETEDEvent')

      setEvents(events.filter((event) => event.id !== eventId))
    }
  }

  return (
    <Grid container className="grid-container">
      <Card className="card-wrapper">
        <Button className="btn-frame btn-back itinerary-back-btn" onClick={() => `${navigate('/Itineraries')}`}>
          Back
        </Button>
        <Grid className="itinerary-header">
          <EditIcon className="header-contents" sx={{ fontSize: 64 }} />

          <Typography variant="h5" style={{ lineHeight: '64px' }} className="header-contents">
            {`Edit : ${_itinerary?.title}`}
          </Typography>
          <DeleteIcon
            sx={{ fontSize: 44, backgroundColor: '#EB5E58', borderRadius: 1, marginTop: 5 }}
            onClick={handleDeleteItinerary}
          />
        </Grid>

        <div className="edit-cards-wrapper">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              {events &&
                events.map((event, index) => (
                  <Card className="edit-event-cards" key={`event-${event.id + index}`}>
                    <div>
                      {event.name}
                      <DeleteIcon
                        sx={{ fontSize: 24, backgroundColor: '#EB5E58', borderRadius: 1, marginLeft: 20 }}
                        onClick={() => deleteSingleEvent(event.id)}
                      />
                    </div>
                  </Card>
                ))}
            </div>
          )}
        </div>
      </Card>
    </Grid>
  )
}
export default EditItineraries
