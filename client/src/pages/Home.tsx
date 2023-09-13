import './Home.css'
import { Box, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import CommutingStops from '../components/CommutingStops'

const Home = () => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>Turn Up</title>
      </Helmet>
      <Box component="div" className="home">
        <Typography variant="h4" component="div" className="home-title">
          {t('home.description')}
        </Typography>
      </Box>
      <CommutingStops></CommutingStops>
    </>
  )
}

export default Home
