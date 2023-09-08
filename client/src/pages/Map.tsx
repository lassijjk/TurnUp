import './Map.css'
import { Box, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'

const Map = () => {
  return (
    <>
      <Helmet>
        <title>Turn Up | Map</title>
      </Helmet>
      <Box component="div" className="map">
        <Typography variant="h4" component="div" className="map-title">
          This is map screen
        </Typography>
      </Box>
    </>
  )
}

export default Map
