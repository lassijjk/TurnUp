import './Home.css'
import { Box, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Turn Up</title>
      </Helmet>
      <Box component="div" className="home">
        <Typography variant="h4" component="div" className="home-title">
          This is home screen
        </Typography>
      </Box>
    </>
  )
}

export default Home
