import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { AppBar, Toolbar, Box, Container, Menu, MenuItem, Typography, IconButton } from '@mui/material'
import DehazeIcon from '@mui/icons-material/Dehaze'
import { useStore } from '../stores/settingStore'
import { useTranslation } from 'react-i18next'
import logo from '../assets/logo.png'
import { useAuthUser, useLogin, useLogout } from '../hooks/userHooks'
import { LanguageFullName } from '../types/language'

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [userSettingEl, setUserSettingEl] = React.useState<null | HTMLElement>(null)
  const { language, changeLanguage } = useStore()

  const user = useAuthUser()
  const { loginWithGoogle } = useLogin()
  const { logout } = useLogout()

  const handleUserSettingsClick = (event: React.MouseEvent<HTMLElement>) => {
    setUserSettingEl(event.currentTarget)
  }

  const handleUserSettingsClose = () => {
    setUserSettingEl(null)
  }

  return (
    <AppBar position="static" className="navbar-appbar">
      <Container className="navbar-container">
        <Toolbar className="navbar-toolbar">
          <Box sx={{ flexGrow: 1 }} className="navbar-app-name">
            <Box>
              <img
                src={logo}
                className="navbar-logo"
                onClick={() => {
                  navigate('/')
                }}
              />
            </Box>
            <Box className="navbar-title-container">
              <Typography component="div" className="navbar-title">
                {t('NAVBAR.APP_NAME')}
              </Typography>
              <Typography className="navbar-title-description" component="blockquote">
                {t('NAVBAR.VALUE_PROPOSITION')}
              </Typography>
            </Box>
          </Box>
          <Typography
            className="navbar-link"
            onClick={() => {
              navigate('/')
            }}
          >
            {t('HOME.SINGULAR')}
          </Typography>
          <Typography
            className="navbar-link"
            onClick={() => {
              navigate('/map')
            }}
          >
            {t('MAP.SINGULAR')}
          </Typography>

          <Box className="navbar-link">
            <IconButton onClick={handleUserSettingsClick}>
              <DehazeIcon />
            </IconButton>

            <Menu
              anchorEl={userSettingEl}
              open={!!userSettingEl}
              onClose={handleUserSettingsClose}
              onClick={handleUserSettingsClose}
            >
              {user && (
                <MenuItem
                  onClick={() => {
                    navigate('user-settings')
                  }}
                  className="navbar-menu-item"
                >
                  {t('SETTING.USER_SETTINGS')}
                </MenuItem>
              )}
              {user && (
                <MenuItem
                  onClick={() => {
                    navigate('Itineraries')
                  }}
                  className="navbar-menu-item"
                >
                  My itinerary
                </MenuItem>
              )}
              <MenuItem>
                {user ? (
                  <Typography className="navbar-menu-item" onClick={logout}>
                    {t('LOGOUT')}
                  </Typography>
                ) : (
                  <Typography className="navbar-menu-item" onClick={loginWithGoogle}>
                    {t('LOGIN') + '/'}
                    <br />
                    {t('REGISTER')}
                  </Typography>
                )}
              </MenuItem>
              <MenuItem className="navbar-language-container navbar-menu-item">
                <Box
                  onClick={() => changeLanguage(LanguageFullName.FINNISH)}
                  className={
                    'navbar-language-item-finnish' +
                    (language === LanguageFullName.FINNISH ? ' navbar-language-item-selected' : '')
                  }
                >
                  FI
                </Box>
                <Box
                  onClick={() => changeLanguage(LanguageFullName.ENGLISH)}
                  className={
                    'navbar-language-item-english' +
                    (language === LanguageFullName.ENGLISH ? ' navbar-language-item-selected' : '')
                  }
                >
                  EN
                </Box>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
