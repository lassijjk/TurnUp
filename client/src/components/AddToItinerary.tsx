import { useState } from 'react'
import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import { createItinerary, updateUserData, useGetUserData } from '../hooks/appSyncHooks'
import { UpdateUserInput, UpdateUserMutation } from '../types/graphqlAPI'
import { SingleEvent } from '../types/event'
import { useAuthUser } from '../hooks/userHooks'
import './AddToItinerary.css'

interface User {
  username: string | null
}

type AddToItineraryProps = {
  event: SingleEvent | undefined
}

const AddToItinerary = ({ event }: AddToItineraryProps) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [itineraryName, setItineraryName] = useState('')

  const userData = useGetUserData()
  const user = useAuthUser() as User | null

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItineraryName(event.target.value)
  }
  const handleSave = async () => {
    // Create an itinerary for current user with title: itineraryName
    // and the current event = event
    const userItem = userData?.userBySub?.items[0]

    const itinerary = {
      title: itineraryName,
      events: [event],
    }
    /* 
    createItinerary({
      title: itineraryName,
      user: 
    }) */

    //tried to update userData with new itineraries
    /*  await updateUserData({id, givenName, familyName, email, language, interestTags, reminder1,
        reminder2, advanceTime,
        itineraries: {
          items: [
            {
              title: itineraryName,
            },
          ],
        },
      }) */
    console.log({ userItem })
    console.log({ event })

    //for later check if itinerary name exists before adding it
    // const itineraryExisits = userItem?.itineraries?.items.find(item => item?.title === itineraryName)
  }

  return (
    <div>
      <Button className="itineraries" onClick={handleOpen}>
        Add to itinerary
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box className="itinerary-modal">
          <TextField placeholder="Add itinerary name" value={itineraryName} onChange={handleInputChange} />
          <Button className="itineraries" onClick={handleSave}>
            Save
          </Button>
          <Typography sx={{ mt: 2 }}>Add current event to your Itinerary.</Typography>
        </Box>
      </Modal>
    </div>
  )
}
export default AddToItinerary
