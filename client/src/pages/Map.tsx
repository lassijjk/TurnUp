import './Map.css'
import { Box, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

const Map = () => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>Turn Up | Map</title>
      </Helmet>
      <Box component="div" className="map">
        <Typography variant="h4" component="div" className="map-title">
          {t('map.description')}
        </Typography>
      </Box>
    </>
  )
}

export default Map
