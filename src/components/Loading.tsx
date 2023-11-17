import { Box, CircularProgress } from '@mui/material'
import './Loading.css'

const Loading = () => {
  return (
    <Box className="event-loader">
      <CircularProgress color="secondary" />
    </Box>
  )
}

export default Loading
