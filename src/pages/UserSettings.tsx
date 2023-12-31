import {
  Grid,
  Card,
  styled,
  Typography,
  Button,
  FormLabel,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Snackbar,
  Alert,
  Switch,
} from '@mui/material'
import { useState, useEffect } from 'react'
import './UserSettings.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { EventTagType } from '../types/event'
import { useNavigate } from 'react-router-dom'
import { useGetUserData, updateUserData } from '../hooks/appSyncHooks'
import { UpdateUserInput, UpdateUserMutation } from '../types/graphqlAPI'
import { useStore } from '../stores/settingStore'
import { useTranslation } from 'react-i18next'
import Interests from '../components/Interests'

const Item = styled(Card)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4, 6),
  marginTop: theme.spacing(3),
  borderRadius: theme.spacing(1),
  backgroundColor: '#fff',
  textAlign: 'center',
}))

const GridContainer = styled(Grid)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  backgroundColor: 'var(--light-petrol)',
  minHeight: '100vh',
}))

const CardWrapper = styled(Item)(() => ({
  width: '1000px',
  margin: '0 auto',
  color: 'black !important',
}))

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}))

const InputWrapper = styled(Grid)(() => ({
  flexBasis: 'auto !important',
}))

const InputLabelWrapper = styled(Grid)(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '150px',
  textAlign: 'left',
  color: 'black !important',
}))

const StyledFormControlLabel = styled(FormControlLabel)(() => ({
  '& .MuiRadio-root': {
    display: 'none',
  },
}))

const StyledRadioGroup = styled(RadioGroup)(() => ({
  '& .MuiFormControlLabel-root': {
    border: '2px solid #333',
    borderRadius: '6px',
    margin: 0,
    padding: '8px 16px',
  },
  '& :first-of-type': {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRightWidth: 0,
  },
  '& :last-child': {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}))

const supportedLanguages = ['English', 'Finnish']

const initialUserSetting = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  selectedLanguage: 'English',
  interests: [] as (string | null)[],
  initialNotificationTime: 0,
  finalNotificationTime: 0,
  arrivalBuffer: 0,
}

const UserSettings = () => {
  const userData = useGetUserData()
  const [initialFormData, setInitialFormData] = useState(initialUserSetting)
  const [formData, setFormData] = useState(initialUserSetting)
  const [openAlert, setOpenAlert] = useState(false)

  const [initialNotification, setInitialNotification] = useState(true)
  const [finalNotification, setFinalNotification] = useState(true)

  const navigate = useNavigate()
  const { changeLanguage } = useStore()
  const { t } = useTranslation()
  useEffect(() => {
    const userItem = userData?.userBySub?.items[0]
    if (userItem) {
      const { id, givenName, familyName, email, language, interestTags, reminder1, reminder2, advanceTime } = userItem
      setFormData({
        id: id || '',
        firstName: givenName || '',
        lastName: familyName || '',
        email: email || '',
        selectedLanguage: language || 'English',
        interests: interestTags || [],
        initialNotificationTime: reminder1 || 0,
        finalNotificationTime: reminder2 || 0,
        arrivalBuffer: advanceTime || 0,
      })
      setInitialFormData({
        id: id || '',
        firstName: givenName || '',
        lastName: familyName || '',
        email: email || '',
        selectedLanguage: language || 'English',
        interests: interestTags || [],
        initialNotificationTime: reminder1 || 0,
        finalNotificationTime: reminder2 || 0,
        arrivalBuffer: advanceTime || 0,
      })

      setInitialNotification(reminder1 !== 0)
      setFinalNotification(reminder2 !== 0)
    }
  }, [userData])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const toggleLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, selectedLanguage: event.target.value })
  }

  const onSelectInterest = (interest: EventTagType) => {
    if (formData.interests.includes(interest)) {
      setFormData({
        ...formData,
        interests: formData.interests.filter((item) => item !== interest),
      })

      return
    }

    setFormData({
      ...formData,
      interests: [...formData.interests, interest],
    })
  }

  const selectedInterestsCount = formData.interests.length

  const handleNotificationToggle = (notification: 'initialNotification' | 'finalNotification') => () => {
    if (notification === 'initialNotification') {
      setInitialNotification(!initialNotification)
      if (initialNotification) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          initialNotificationTime: 0,
        }))
      }
    } else {
      setFinalNotification(!finalNotification)
      if (finalNotification) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          finalNotificationTime: 0,
        }))
      }
    }
  }

  const handleTimeChange =
    (notification: 'initialNotification' | 'finalNotification') => (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
      const numericValue = parseInt(value, 10)
      if (!isNaN(numericValue)) {
        if (notification === 'initialNotification') {
          setFormData({ ...formData, initialNotificationTime: Math.max(0, numericValue) })
        } else {
          setFormData({ ...formData, finalNotificationTime: Math.max(0, numericValue) })
        }
      }
    }

  const handleArrivalBufferChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const numericValue = parseInt(value, 10)
    if (!isNaN(numericValue)) {
      setFormData({ ...formData, arrivalBuffer: Math.max(0, numericValue) })
    }
  }
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const inputData: UpdateUserInput = {
      id: formData.id,
      givenName: formData.firstName,
      familyName: formData.lastName,
      email: formData.email,
      language: formData.selectedLanguage,
      interestTags: formData.interests,
      reminder1: formData.initialNotificationTime,
      reminder2: formData.finalNotificationTime,
      advanceTime: formData.arrivalBuffer,
    }

    const response = (await updateUserData(inputData)) as UpdateUserMutation
    if (response.updateUser) {
      setInitialFormData({
        id: response.updateUser.id || '',
        firstName: response.updateUser.givenName || '',
        lastName: response.updateUser.familyName || '',
        email: response.updateUser.email || '',
        selectedLanguage: response.updateUser.language || 'English',
        interests: response.updateUser.interestTags || [],
        initialNotificationTime: response.updateUser.reminder1 || 0,
        finalNotificationTime: response.updateUser.reminder2 || 0,
        arrivalBuffer: response.updateUser.advanceTime || 0,
      })
      changeLanguage(response.updateUser.language || 'English')
      setOpenAlert(true)
    }
  }

  const handleCancel = () => {
    setFormData({ ...initialFormData })

    setInitialNotification(initialFormData.initialNotificationTime !== 0)
    setFinalNotification(initialFormData.finalNotificationTime !== 0)
  }

  const handleAlertClose = (_event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenAlert(false)
  }
  return (
    <GridContainer container className="user-settings-main-container">
      <CardWrapper className="user-settings-card-wrapper">
        <Button className="btn-frame btn-back" onClick={() => `${navigate('/')}`}>
          {t('SETTING.BACK')}
        </Button>
        <Grid container spacing={2} marginTop={2} className="title-wrapper">
          <AccountCircleIcon className="icon" />
          <Title variant="h4" align="left" className="title">
            {t('SETTING.USER_SETTINGS')}
          </Title>
        </Grid>
        <form onSubmit={handleSubmit} className="form-elements">
          <Grid container spacing={2} marginTop={2} className="form-field-container">
            <InputWrapper item xs={6} className="form-field">
              <InputLabelWrapper>
                <FormLabel sx={{ color: 'black' }}>{t('SETTING.FIRST_NAME')} </FormLabel>
              </InputLabelWrapper>
              <TextField
                type="text"
                id="name"
                name="firstName"
                size="small"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="input-field"
              />
            </InputWrapper>
            <InputWrapper item xs={6} className="form-field">
              <InputLabelWrapper>
                <FormLabel sx={{ color: 'black' }}>{t('SETTING.LAST_NAME')}</FormLabel>
              </InputLabelWrapper>
              <TextField
                type="text"
                id="lastName"
                name="lastName"
                size="small"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="input-field"
              />
            </InputWrapper>
          </Grid>

          <Grid container spacing={2} marginTop={2} className="form-field-container">
            <InputWrapper item xs={12} className="form-field">
              <InputLabelWrapper>
                <FormLabel sx={{ color: 'black' }}>{t('SETTING.EMAIL')} </FormLabel>
              </InputLabelWrapper>
              <TextField
                type="email"
                id="email"
                name="email"
                size="small"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="input-field"
              />
            </InputWrapper>
          </Grid>

          <Grid container spacing={2} marginTop={2} className="form-field-container">
            <InputWrapper item xs={12} className="form-field language-wrapper">
              <InputLabelWrapper>
                <FormLabel sx={{ color: 'black' }}>{t('SETTING.LANGUAGE')} </FormLabel>
              </InputLabelWrapper>

              <StyledRadioGroup name="language" onChange={toggleLanguage} row>
                {supportedLanguages.map((language) => (
                  <StyledFormControlLabel
                    value={language}
                    key={language}
                    control={<Radio sx={{ color: 'transparent' }} />}
                    label={t('LANGUAGE.' + language.toUpperCase())}
                    className={`lang-button ${formData.selectedLanguage === language ? 'selected-language' : ''}`}
                  />
                ))}
              </StyledRadioGroup>
            </InputWrapper>
          </Grid>
          <Grid container spacing={2} marginTop={2}>
            <Typography className="interest-text">
              {t('SETTING.INTERESTS')} ({selectedInterestsCount})
            </Typography>
          </Grid>

          <Interests interests={formData.interests} onSelectInterest={onSelectInterest} />

          <Grid container spacing={2} marginTop={5} className="time-input-wrapper">
            <InputWrapper item xs={6} display="flex" className="form-field">
              <FormLabel className="event-buffer notification-label">{t('SETTING.EVENT_ARRIVAL_BUFFER')}</FormLabel>
              <TextField
                className="time-input"
                id="advanceTime"
                type="number"
                label="Time (min)"
                value={formData.arrivalBuffer}
                onChange={handleArrivalBufferChange}
              />
            </InputWrapper>
          </Grid>
          <Grid container spacing={2} marginTop={3} className="time-input-wrapper">
            <InputWrapper item xs={6} display="flex" className="form-field">
              <FormControlLabel
                className="notification-label"
                control={
                  <Switch checked={initialNotification} onChange={handleNotificationToggle('initialNotification')} />
                }
                label={t('SETTING.INITIAL_NOTIFICATION')}
              />
              <TextField
                className="time-input"
                id="reminder1"
                type="number"
                label="Time (min)"
                value={formData.initialNotificationTime}
                onChange={handleTimeChange('initialNotification')}
                disabled={!initialNotification}
              />
            </InputWrapper>
          </Grid>
          <Grid container spacing={2} marginTop={3} className="time-input-wrapper">
            <InputWrapper item xs={6} display="flex" className="form-field">
              <FormControlLabel
                className="notification-label"
                control={
                  <Switch checked={finalNotification} onChange={handleNotificationToggle('finalNotification')} />
                }
                label={t('SETTING.FINAL_NOTIFICATION')}
              />
              <TextField
                className="time-input"
                id="reminder2"
                type="number"
                label="Time (min)"
                value={formData.finalNotificationTime}
                onChange={handleTimeChange('finalNotification')}
                disabled={!finalNotification}
              />
            </InputWrapper>
          </Grid>

          <Grid container spacing={2} marginTop={6} className="form-submission-btns">
            <Button type="submit" className="btn-save btn-frame" variant="contained">
              {t('SETTING.SAVE')}
            </Button>
            <Button type="button" className="btn-cancel btn-frame" onClick={handleCancel}>
              {t('SETTING.CANCEL')}
            </Button>
            <Snackbar open={openAlert} autoHideDuration={2000} onClose={handleAlertClose}>
              <Alert onClose={handleAlertClose} sx={{ width: '100%' }} className="snack-bar">
                {t('SETTING.ALERT')}
              </Alert>
            </Snackbar>
          </Grid>
        </form>
      </CardWrapper>
    </GridContainer>
  )
}

export default UserSettings
