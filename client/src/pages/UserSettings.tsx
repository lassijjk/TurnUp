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

const Item = styled(Card)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4, 3),
  marginTop: theme.spacing(3),
  borderRadius: theme.spacing(1),
  backgroundColor: '#fff',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const GridContainer = styled(Grid)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  backgroundColor: 'var(--light-petrol)',
  minHeight: '100vh',
}))

const CardWrapper = styled(Item)(() => ({
  width: '800px',
  margin: '0 auto',
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
}))

enum UserInterests {
  ART = 'art',
  CULTURE = 'culture',
}

const userInterests = {
  [UserInterests.ART]: false,
  [UserInterests.CULTURE]: false,
}

function mapEnumToBooleanEnum<T>(myEnum: T, condition: boolean) {
  const result: { [key: string]: boolean } = {}

  for (const key in myEnum) {
    if (typeof myEnum[key] === 'string') {
      result[key] = condition
    }
  }

  return result
}

const supportedLanguages = ['English', 'Finnish']

const UserSettings = () => {
  // TODO: @finnan - get all the details from db
  const initialUserSetting = {
    firstName: '',
    lastName: '',
    email: '',
    selectedLanguage: 'English',
    interests: [],
  }

  const [formData, setFormData] = useState(initialUserSetting)
  const [selectedTag, setSelectedTag] = useState(userInterests)

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

  const onSelectedtag = (interest: UserInterests) => {
    setSelectedTag({ ...selectedTag, [interest]: !selectedTag[interest] })
  }

  const selectedTagCount = Object.values(selectedTag).filter((value) => value === true).length

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
        <Grid container spacing={2} marginTop={1}>
          <AccountCircleIcon fontSize="large"></AccountCircleIcon>
          <Title variant="h6" align="left" className="title">
            User Settings
          </Title>
        </Grid>
        <form onSubmit={handleSubmit} className="form-elements">
          <Grid container spacing={2} marginTop={2}>
            <InputWrapper item xs={6} display="flex">
              <InputLabelWrapper>
                <FormLabel>First name </FormLabel>
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
                <FormLabel>Last name </FormLabel>
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
                <FormLabel>Email </FormLabel>
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
                <FormLabel>Language </FormLabel>
              </InputLabelWrapper>

              <ToggleButtonGroup color="info" value={formData.selectedLanguage} onChange={toggleLanguage} exclusive>
                {supportedLanguages.map((language) => (
                  <ToggleButton value={language} size="small">
                    {language}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </InputWrapper>
          </Grid>
          <Grid container spacing={2} marginTop={2}>
            <Typography>Interests ({selectedTagCount})</Typography>
          </Grid>
          <Grid container spacing={2} marginTop={2}>
            <EventTag
              variant={EventTagType.ART}
              selected={selectedTag[UserInterests.ART]}
              onClick={() => onSelectedtag(UserInterests.ART)}
            />
            <EventTag
              variant={EventTagType.CULTURE}
              selected={selectedTag[UserInterests.CULTURE]}
              onClick={() => onSelectedtag(UserInterests.CULTURE)}
            />
          </Grid>
          <Grid container spacing={2} marginTop={2}>
            <div>
              <Button type="submit" variant="contained">
                Save
              </Button>
              <Button type="button" onClick={handleCancel}>
                Cancel
              </Button>
            </div>
          </Grid>
        </form>
      </CardWrapper>
    </GridContainer>
  )
}

export default UserSettings
