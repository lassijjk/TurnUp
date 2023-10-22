import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { AppBar, Toolbar, Box, Container, Menu, MenuItem, Typography, IconButton } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'
import DehazeIcon from '@mui/icons-material/Dehaze'
import { useStore } from '../stores/settingStore'
import { useTranslation } from 'react-i18next'
import logo from '../assets/logo.png'
import { useAuthUser, useLogin, useLogout } from '../hooks/userHooks'
import { LanguageFullName } from '../types/language'

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [anchorElLanguage, setAnchorElLanguage] = React.useState<null | HTMLElement>(null)
  const [userSettingEl, setUserSettingEl] = React.useState<null | HTMLElement>(null)
  const { language, changeLanguage } = useStore()
  const languages: LanguageFullName[] = [LanguageFullName.ENGLISH, LanguageFullName.FINNISH]

  const user = useAuthUser()
  const { loginWithGoogle } = useLogin()
  const { logout } = useLogout()

  const handleCloseNavMenu = () => {
    setAnchorElLanguage(null)
  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLanguage(event.currentTarget)
  }

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
              <img src={logo} className="navbar-logo" />
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
          {user ? (
            <Typography className="navbar-link" onClick={logout}>
              {t('LOGOUT')}
            </Typography>
          ) : (
            <Typography className="navbar-link" onClick={loginWithGoogle}>
              {t('LOGIN')}
            </Typography>
          )}

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
                    {t('LANGUAGE.' + lang.toUpperCase())}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {user && (
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
                <MenuItem
                  onClick={() => {
                    navigate('user-settings')
                  }}
                >
                  User settings
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
