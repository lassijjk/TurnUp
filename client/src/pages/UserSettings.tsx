import { Grid, Card, styled, Typography, Button, FormLabel, TextField } from '@mui/material'
import { useState, useEffect } from 'react'
import './UserSettings.css'
import { useGetUserData, updateUserData } from '../hooks/appSyncHooks'
import { UserBySubQuery, UpdateUserInput, UpdateUserMutation } from '../types/graphqlAPI'

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
  width: '150px',
  textAlign: 'left',
}))

const LanguageButtonEng = styled(Button)(() => ({
  borderRadius: '15px 0px 0px 15px',
  border: '2px solid Gray',
  borderRightWidth: '0',
  color: 'black',
}))

const LanguageButtonFin = styled(Button)(() => ({
  borderRadius: '0px 15px 15px 0px',
  border: '2px solid Gray',
  color: 'black',
}))

const UserSettings = () => {
  console.log('re-render')
  // TODO: @finnan - get all the details from db
  const [userData, setUserData] = useState<UserBySubQuery | null>(null)

  const fetchedUserData = useGetUserData()

  useEffect(() => {
    if(fetchedUserData) {
      setUserData(fetchedUserData)
    }
  }, [fetchedUserData])

  const initialUserSetting = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    selectedLanguage: 'English',
    interests:  [] as (string | null)[],
  }

  const [initialFormData, setInitialFormData] = useState(initialUserSetting)
  const [formData, setFormData] = useState(initialUserSetting)
  
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

  const toggleLanguage = (language: string) => {
    setFormData({ ...formData, selectedLanguage: language })
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const inputData: UpdateUserInput = {
      id: formData.id,
      givenName: formData.firstName,
      familyName: formData.lastName,
      email: formData.email,
      language: formData.selectedLanguage,
      interestTags: formData.interests 
    }

    const response = await updateUserData(inputData) as UpdateUserMutation
    if(response.updateUser){
      setInitialFormData({
        id: response.updateUser.id || '',
        firstName: response.updateUser.givenName || '',
        lastName: response.updateUser.familyName || '',
        email: response.updateUser.email || '',
        selectedLanguage: response.updateUser.language || 'English',
        interests: response.updateUser.interestTags || [],
      })
      console.log('Settings saved successfully')
    }
  }

  const handleCancel = () => {
    setFormData({ ...initialFormData })
  }

  return (
    <GridContainer container>
      <CardWrapper>
        <Title variant="h5" align="left" fontWeight="bold">
          User Settings
        </Title>

        <form onSubmit={handleSubmit} className="form-elements">
          <Grid container spacing={2} marginTop={2}>
            <InputWrapper item xs={6} display="flex">
              <InputLabelWrapper>
                <FormLabel>First name </FormLabel>
              </InputLabelWrapper>
              <TextField
                type="text"
                id="name"
                size="small"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
              />
            </InputWrapper>
            <InputWrapper item xs={6} display="flex">
              <InputLabelWrapper>
                <FormLabel>Last name </FormLabel>
              </InputLabelWrapper>
              <TextField
                type="text"
                id="name"
                size="small"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
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
                size="small"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </InputWrapper>
          </Grid>

          <Grid container spacing={2} marginTop={2}>
            <InputWrapper item xs={12} display="flex">
              <InputLabelWrapper>
                <FormLabel>Language </FormLabel>
              </InputLabelWrapper>
              <LanguageButtonEng
                className={formData.selectedLanguage === 'English' ? 'selected' : 'lang-button'}
                onClick={() => toggleLanguage('English')}
              >
                English
              </LanguageButtonEng>
              <LanguageButtonFin
                className={formData.selectedLanguage === 'Finnish' ? 'selected' : 'lang-button'}
                onClick={() => toggleLanguage('Finnish')}
              >
                Finnish
              </LanguageButtonFin>
            </InputWrapper>
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
