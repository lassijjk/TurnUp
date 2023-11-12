import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { AppBar, Toolbar, Box, Container, Menu, MenuItem, Typography, IconButton } from '@mui/material'
import DehazeIcon from '@mui/icons-material/Dehaze'
import { useStore } from '../stores/settingStore'
import { useTranslation } from 'react-i18next'
import logo from '../assets/logo.png'
import finnish from '../assets/tn_fi-flag.gif'
import english from '../assets/tn_uk-flag.gif'
import { useAuthUser, useLogin, useLogout } from '../hooks/userHooks'
import { LanguageFullName } from '../types/language'

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [userSettingEl, setUserSettingEl] = React.useState<null | HTMLElement>(null)
  const { changeLanguage } = useStore()

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
        <Toolbar>
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
              <Typography component="blockquote">{t('NAVBAR.VALUE_PROPOSITION')}</Typography>
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
                >
                  {t('SETTING.USER_SETTINGS')}
                </MenuItem>
              )}
              <MenuItem>
                {user ? (
                  <Typography onClick={logout}>{t('LOGOUT')}</Typography>
                ) : (
                  <Typography onClick={loginWithGoogle}>
                    {t('LOGIN') + '/'}
                    <br />
                    {t('REGISTER')}
                  </Typography>
                )}
              </MenuItem>
              <MenuItem className="navbar-language-items">
                <img
                  src={finnish}
                  onClick={() => changeLanguage(LanguageFullName.FINNISH)}
                  className="navbar-language-item navbar-language-finnish"
                />
                <img
                  src={english}
                  onClick={() => changeLanguage(LanguageFullName.ENGLISH)}
                  className="navbar-language-item"
                />
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
