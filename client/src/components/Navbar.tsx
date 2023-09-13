import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { AppBar, Toolbar, Box, Container, Menu, MenuItem, Typography, IconButton } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'
import { Language, useStore } from '../stores/settingStore'
import { useTranslation } from 'react-i18next'

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [anchorElLanguage, setAnchorElLanguage] = React.useState<null | HTMLElement>(null)
  const { language, changeLanguage } = useStore()
  const languages: Language[] = ['English', 'Finnish']

  const handleCloseNavMenu = () => {
    setAnchorElLanguage(null)
  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLanguage(event.currentTarget)
  }

  return (
    <AppBar position="static" className="navbar-container">
      <Container>
        <Toolbar>
          <Box component="div" sx={{ flexGrow: 1 }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Tampere_University_logo.png"
              alt="app-logo"
              height="60"
            />
          </Box>
          <Box
            className="navbar-link"
            onClick={() => {
              navigate('/')
            }}
          >
            {t('Home')}
          </Box>

          <Box
            className="navbar-link"
            onClick={() => {
              navigate('/eventList')
            }}
          >
            {t('EventList')}
          </Box>

          <Box
            className="navbar-link"
            onClick={() => {
              navigate('/map')
            }}
          >
            {t('Map')}
          </Box>
          <Box
            className="navbar-link"
            onClick={() => {
              navigate('/')
            }}
          >
            {t('Login')}
          </Box>
          <Box className="navbar-link">
            <IconButton onClick={handleOpenNavMenu}>
              <LanguageIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElLanguage}
              open={Boolean(anchorElLanguage)}
              onClose={handleCloseNavMenu}
            >
              {languages.map((lang) => (
                <MenuItem
                  key={lang}
                  onClick={handleCloseNavMenu}
                  className={language == lang ? 'navbar-language-selected' : ''}
                >
                  <Typography textAlign="center" onClick={() => changeLanguage(lang)}>
                    {lang}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
