import {
  Grid,
  Card,
  styled,
  Typography,
  Button,
  FormLabel,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material'
import { useState } from 'react'
import './UserSettings.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import EventTag from '../components/Buttons/EventTag'
import { EventTagType } from '../types/event'
import { useNavigate } from 'react-router-dom'

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

const supportedLanguages = ['English', 'Finnish']

const UserSettings = () => {
  // TODO: @finnan - get all the details from db
  const initialUserSetting = {
    firstName: '',
    lastName: '',
    email: '',
    selectedLanguage: 'English',
    interests: [EventTagType.ART, EventTagType.CULTURE],
  }

  const [formData, setFormData] = useState(initialUserSetting)
  const [selectedInterests, setSelectedInterests] = useState(initialUserSetting.interests)
  const navigate = useNavigate()
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const toggleLanguage = (_: React.MouseEvent<HTMLElement>, language: string) => {
    setFormData({ ...formData, selectedLanguage: language })
  }

  const onSelectInterest = (interest: EventTagType) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((item) => item !== interest))

      return
    }

    setSelectedInterests([...selectedInterests, interest])
  }

  const selectedInterestsCount = selectedInterests.length

  const handleSubmit = () => {
    console.log('Settings saved successfully')

    // check if initail user setting is similar to the updated one and update
  }

  const handleCancel = () => {
    setFormData({ ...initialUserSetting })
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

              <ToggleButtonGroup value={formData.selectedLanguage} onChange={toggleLanguage} exclusive>
                {supportedLanguages.map((language) => (
                  <ToggleButton
                    value={language}
                    size="small"
                    key={language}
                    className={`lang-button  ${formData.selectedLanguage === language ? 'selected-lan' : ''}`}
                  >
                    {language}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
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
                  selected={selectedInterests.includes(interest)}
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
