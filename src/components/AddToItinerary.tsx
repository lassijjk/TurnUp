import { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material'
import { createItinerary, createUserEvent, useGetItineraries, useGetUserData } from '../hooks/appSyncHooks'
import { CreateItineraryMutation } from '../types/graphqlAPI'
import './AddToItinerary.css'
import { SingleEvent } from '../types/event'
import { convertToReadableTime } from '../utils/convertToReadableTime'
import { convertToReadableDate } from '../utils/convertToReadableDate'
import { useTranslation } from 'react-i18next'
import { TFunction } from 'i18next'
import { useNavigate } from 'react-router-dom'

interface EventDate {
  start: string
  end: string
}

const getReadableTime = (date: EventDate, t: TFunction) =>
  `${convertToReadableDate(date.start, t)} ${convertToReadableTime(date.start)} - ${convertToReadableTime(date.end)}`

type AddToItineraryProps = {
  event: SingleEvent
}

const AddToItinerary = ({ event }: AddToItineraryProps) => {
  const [openItineraryModal, setOpenItineraryModal] = useState(false)
  const handleOpen = () => setOpenItineraryModal(true)
  const handleClose = () => setOpenItineraryModal(false)
  const [itineraryName, setItineraryName] = useState('')
  const [value, setValue] = useState('')
  const [selectedDate, setSelectedDate] = useState<EventDate>()
  const [openEventDates, setOpenEventDates] = useState(false)
  const handleOpenDates = () => setOpenEventDates(true)
  const handleCloseDates = () => setOpenEventDates(false)
  const { t } = useTranslation()
  const itineraryList = useGetItineraries()
  const userData = useGetUserData()
  const navigate = useNavigate()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItineraryName(event.target.value)
  }

  const handleSelectedDateChange = (event: React.ChangeEvent<HTMLInputElement>, date: EventDate) => {
    setValue((event.target as HTMLInputElement).value)
    setSelectedDate(date)
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const userItem = userData?.userBySub?.items[0]
    const itineraryExisits = userItem?.itineraries?.items.find((item) => item?.title === itineraryName)
    if (itineraryExisits) {
      createUserEvent({
        eventId: event.id,
        itineraryEventsId: itineraryExisits.id,
        dateTimes: [
          {
            start: selectedDate?.start,
            end: selectedDate?.end,
          },
        ],
      })
    } else {
      //Create an itinerary for current user with title: itineraryName
      const itinerary = (await createItinerary({
        title: itineraryName,
        userItinerariesId: userItem?.id,
      })) as CreateItineraryMutation

      //Add new event to itinerary with given title
      createUserEvent({
        eventId: event.id,
        itineraryEventsId: itinerary?.createItinerary?.id,
      })
    }
    handleCloseDates()
    handleClose()
    setItineraryName('')
    navigate('/Itineraries', { replace: true })
  }

  const handleSave = () => {
    handleOpenDates()
  }

  const handleAddToItinerary = (event: React.MouseEvent<HTMLElement>) => {
    const selectedItinerary = event.currentTarget.textContent
    if (selectedItinerary) setItineraryName(selectedItinerary)
  }
  return (
    <div>
      <Button className="itinerary-btn add-btn" onClick={handleOpen}>
        Add to itinerary
      </Button>
      <Modal open={openItineraryModal} onClose={handleClose}>
        <Box className="itinerary-modal">
          <Typography sx={{ mt: 3, mb: 2 }}>Add current event to new Itinerary.</Typography>
          <TextField
            className="text-field"
            placeholder="create new itinerary"
            value={itineraryName}
            onChange={handleInputChange}
          />
          <Button className="itinerary-btn" onClick={handleSave}>
            Save
          </Button>
          {itineraryList?.listItineraries?.items.length && (
            <Typography sx={{ mt: 3, mb: 2 }}>Add current event to your Itinerary.</Typography>
          )}
          {itineraryList?.listItineraries?.items?.map((itinerary, index) => (
            <Button key={index} className="modal-details" onClick={handleAddToItinerary}>
              {itinerary?.title}
            </Button>
          ))}
        </Box>
      </Modal>
      {openEventDates && itineraryName && (
        <Modal open={openEventDates} onClose={handleCloseDates}>
          <Box className="itinerary-modal event-date-modal">
            <div className="event-dates-wrapper">
              <Typography sx={{ mt: 3, mb: 2 }}>Choose suitable date and time </Typography>
              <form onSubmit={handleSubmit}>
                {event &&
                  event.dates.map((date, index) => {
                    return (
                      <FormControl key={`${index}-${date}}`} className="dates-and-times">
                        <RadioGroup
                          name="controlled-radio-buttons-group"
                          value={value}
                          onChange={(event) => {
                            handleSelectedDateChange(event, date)
                          }}
                        >
                          <FormControlLabel
                            key={`${index}-${date}}`}
                            value={getReadableTime(date, t)}
                            control={<Radio />}
                            label={<span className="custom-radio-label">{getReadableTime(date, t)}</span>}
                          />
                        </RadioGroup>
                      </FormControl>
                    )
                  })}
                <div>
                  <Button className="itinerary-btn submit-btn" type="submit">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </Box>
        </Modal>
      )}
    </div>
  )
}
export default AddToItinerary
