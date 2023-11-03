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
} from '@mui/material'
import { useState, useEffect } from 'react'
import './UserSettings.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import EventTag from '../components/Buttons/EventTag'
import { EventTagType } from '../types/event'
import { useNavigate } from 'react-router-dom'
import { useGetUserData, updateUserData } from '../hooks/appSyncHooks'
import { UpdateUserInput, UpdateUserMutation } from '../types/graphqlAPI'
import { useStore } from '../stores/settingStore'

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
}

const UserSettings = () => {
  const userData = useGetUserData()
  const [initialFormData, setInitialFormData] = useState(initialUserSetting)
  const [formData, setFormData] = useState(initialUserSetting)
  const navigate = useNavigate()
  const { changeLanguage } = useStore()

  useEffect(() => {
    const userItem = userData?.userBySub?.items[0]
    if (userItem) {
      const { id, givenName, familyName, email, language, interestTags } = userItem
      setFormData({
        id: id || '',
        firstName: givenName || '',
        lastName: familyName || '',
        email: email || '',
        selectedLanguage: language || 'English',
        interests: interestTags || [],
      })
      setInitialFormData({
        id: id || '',
        firstName: givenName || '',
        lastName: familyName || '',
        email: email || '',
        selectedLanguage: language || 'English',
        interests: interestTags || [],
      })
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const inputData: UpdateUserInput = {
      id: formData.id,
      givenName: formData.firstName,
      familyName: formData.lastName,
      email: formData.email,
      language: formData.selectedLanguage,
      interestTags: formData.interests,
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
      })
      changeLanguage(response.updateUser.language || 'English')
      console.log('Settings saved successfully')
    }
  }

  const handleCancel = () => {
    setFormData({ ...initialFormData })
  }

  return (
    <GridContainer container>
      <CardWrapper>
        <Button className="btn-frame btn-back" onClick={() => `${navigate('/')}`}>
          Back
        </Button>
        <Grid container spacing={2} marginTop={2} className="icon">
          <AccountCircleIcon sx={{ fontSize: 64 }}></AccountCircleIcon>
          <Title variant="h4" align="left" className="title" style={{ lineHeight: '64px' }}>
            User Settings
          </Title>
        </Grid>
        <form onSubmit={handleSubmit} className="form-elements">
          <Grid container spacing={2} marginTop={2}>
            <InputWrapper item xs={6} display="flex">
              <InputLabelWrapper>
                <FormLabel sx={{ color: 'black' }}>First name </FormLabel>
              </InputLabelWrapper>
              <TextField
                type="text"
                id="name"
                name="firstName"
                size="small"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </InputWrapper>
            <InputWrapper item xs={6} display="flex">
              <InputLabelWrapper>
                <FormLabel sx={{ color: 'black' }}>Last name </FormLabel>
              </InputLabelWrapper>
              <TextField
                type="text"
                id="lastName"
                name="lastName"
                size="small"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </InputWrapper>
          </Grid>

          <Grid container spacing={2} marginTop={2}>
            <InputWrapper item xs={12} display="flex">
              <InputLabelWrapper>
                <FormLabel sx={{ color: 'black' }}>Email </FormLabel>
              </InputLabelWrapper>
              <TextField
                type="email"
                id="email"
                name="email"
                size="small"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </InputWrapper>
          </Grid>

          <Grid container spacing={2} marginTop={2}>
            <InputWrapper item xs={12} display="flex">
              <InputLabelWrapper>
                <FormLabel sx={{ color: 'black' }}>Language </FormLabel>
              </InputLabelWrapper>

              <StyledRadioGroup name="language" onChange={toggleLanguage} row>
                {supportedLanguages.map((language) => (
                  <StyledFormControlLabel
                    value={language}
                    key={language}
                    control={<Radio sx={{ color: 'transparent' }} />}
                    label={language}
                    className={`lang-button ${formData.selectedLanguage === language ? 'selected-language' : ''}`}
                  />
                ))}
              </StyledRadioGroup>
            </InputWrapper>
          </Grid>
          <Grid container spacing={2} marginTop={2}>
            <Typography className="interest-text">Interests ({selectedInterestsCount})</Typography>
          </Grid>
          <Grid container spacing={2} marginTop={1} className="interests-container">
            {Object.values(EventTagType).map((interest) => {
              return (
                <EventTag
                  key={interest}
                  variant={interest}
                  selected={formData.interests.includes(interest)}
                  onClick={() => onSelectInterest(interest)}
                />
              )
            })}
          </Grid>
          <Grid container spacing={2} marginTop={2} className="form-submission-btns">
            <Button type="submit" className="btn-save btn-frame" variant="contained">
              Save
            </Button>
            <Button type="button" className="btn-cancel btn-frame" onClick={handleCancel}>
              Cancel
            </Button>
          </Grid>
        </form>
      </CardWrapper>
    </GridContainer>
  )
}

export default UserSettings
