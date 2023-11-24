import { useState } from 'react'
import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import { createItinerary, createUserEvent, useGetItineraries, useGetUserData } from '../hooks/appSyncHooks'
import { CreateItineraryMutation } from '../types/graphqlAPI'
import './AddToItinerary.css'

type AddToItineraryProps = {
  eventId: string
}

const AddToItinerary = ({ eventId }: AddToItineraryProps) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [itineraryName, setItineraryName] = useState('')
  const itineraryList = useGetItineraries()

  const userData = useGetUserData()
  //const user = useAuthUser() as User | null
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItineraryName(event.target.value)
  }

  const handleSave = async () => {
    const userItem = userData?.userBySub?.items[0]
    const itineraryExisits = userItem?.itineraries?.items.find((item) => item?.title === itineraryName)
    if (itineraryExisits) {
      createUserEvent({
        eventId: eventId,
        itineraryEventsId: itineraryExisits.id,
      })
    } else {
      //Create an itinerary for current user with title: itineraryName
      const itinerary = (await createItinerary({
        title: itineraryName,
        userItinerariesId: userItem?.id,
      })) as CreateItineraryMutation

      //Add new event to itinerary with given title
      createUserEvent({
        eventId: eventId,
        itineraryEventsId: itinerary?.createItinerary?.id,
      })
    }
  }

  const handleAddToItinerary = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.currentTarget.textContent)
    const selectedItinerary = event.currentTarget.textContent
    if (selectedItinerary) setItineraryName(selectedItinerary)
  }

  return (
    <div>
      <Button className="itinerary-btn" onClick={handleOpen}>
        Add to itinerary
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box className="itinerary-modal">
          <Typography sx={{ mt: 3, mb: 2 }}>Add current event to new Itinerary.</Typography>
          <TextField placeholder="create new itinerary" value={itineraryName} onChange={handleInputChange} />
          <Button className="itinerary-btn" onClick={handleSave}>
            Save
          </Button>
          <Typography sx={{ mt: 3, mb: 2 }}>Add current event to your Itinerary.</Typography>
          {itineraryList?.listItineraries?.items?.map((itinerary, index) => (
            <Button key={index} className="modal-details" onClick={handleAddToItinerary}>
              {itinerary?.title}
            </Button>
          ))}
        </Box>
      </Modal>
    </div>
  )
}
export default AddToItinerary
