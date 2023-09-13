import './Home.css'
import { Box, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

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
    </>
  )
}

export default Home
