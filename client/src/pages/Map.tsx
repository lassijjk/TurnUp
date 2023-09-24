import './Map.css'
import { Box, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import MapComponent from '../components/MapComponent'

const Map = () => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>Turn Up | Map</title>
      </Helmet>
      <Box component="div" className="map">
        <Typography variant="h4" component="div" className="map-title">
          {t('MAP.DESCRIPTION')}
        </Typography>
        <MapComponent latitude={61.49351290265168} longitude={23.77871064030614} />
      </Box>
    </>
  )
}

export default Map
