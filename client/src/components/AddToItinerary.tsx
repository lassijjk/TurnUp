import { useState } from 'react'
import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import { 
  createItinerary,
  createUserEvent,
  //updateUserData
  useGetItineraries,
  useGetUserData 
} from '../hooks/appSyncHooks'
import {
  CreateItineraryMutation
  //CreateItineraryInput, UpdateUserInput, UpdateUserMutation 
  //User
 } from '../types/graphqlAPI'

import { SingleEvent } from '../types/event'
//import { useAuthUser } from '../hooks/userHooks'
import './AddToItinerary.css'

type AddToItineraryProps = {
  event: SingleEvent | undefined
}

const AddToItinerary = ({ event }: AddToItineraryProps) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [itineraryName, setItineraryName] = useState('')
  const itineraryList = useGetItineraries()
  console.log(itineraryList)
  const userData = useGetUserData()
  //const user = useAuthUser() as User | null
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItineraryName(event.target.value)
  }

  const handleSave = async () => {
    const userItem = userData?.userBySub?.items[0]
    
    //Create an itinerary for current user with title: itineraryName
    const itinerary = await createItinerary({
      title: itineraryName,
      userItinerariesId: userItem?.id,
    }) as CreateItineraryMutation

    //Add new event to itinerary fith given title
    createUserEvent({
      eventId: "addEventID",
      itineraryEventsId: itinerary?.createItinerary?.id
    })

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
