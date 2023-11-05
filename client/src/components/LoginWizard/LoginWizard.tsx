import { useState } from 'react'
import { Button, Dialog, DialogContent, DialogActions } from '@mui/material'
import { useGetUserData } from '../../hooks/appSyncHooks'
import WelcomePage from './WelcomePage'
import InterestsPage from './InterestsPage'
import ClosePage from './ClosePage'
import './LoginWizard.css'
import { UpdateUserMutation } from '../../types/graphqlAPI'
import { updateUserData } from '../../hooks/appSyncHooks'
import { useNavigate } from 'react-router-dom'

type LoginWizardProps = {
  open: boolean
  onClose: () => void
}

const LoginWizard: React.FC<LoginWizardProps> = ({ open, onClose }: LoginWizardProps) => {  
  const [page, setPage] = useState(0)
  const [interests, setInterests] = useState<(string | null)[]>([]);
  const navigate = useNavigate()
  const userData = useGetUserData()
  const id = userData?.userBySub?.items[0]?.id

  const PageDisplay = () => {
    if (page === 0) {
      return <WelcomePage/>
    } else if (page === 1) {
      return <InterestsPage interests={interests} setInterests={setInterests}/>
    } else if (page === 2) {
      return <ClosePage/>
    }
  }

  const backButtonText = page === 0 ? 'Skip' : page === 2 ? 'Settings': 'Back';
  const confirmButtonText = page === 1 ? 'Save' : page === 2 ? 'Close' : 'Next';

  const handleSave = async () => {
    const inputData = {
      interestTags: interests || [],
      id: id || '',
      //loginWizard: true
    }

    const response = (await updateUserData(inputData)) as UpdateUserMutation
    console.log(response)
  }

  const handleSkip = async () => {
    const inputData = {
      id: id || '',
      //loginWizard: true
    }

    const response = (await updateUserData(inputData)) as UpdateUserMutation
    console.log(response)
  }
    
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth='md'
      fullWidth={true}
      className="login-wizard"
    >
      <DialogContent className="dialog-content">
        {PageDisplay()}
      </DialogContent>
      <DialogActions className="dialog-actions">
        <Button
          variant="contained"
          className="dialog-button"
          onClick={() => {
            if (page === 0) {
              handleSkip()
              onClose()
            } else if (page === 2){
              navigate('/user-settings')
              onClose()
            } else {
              setPage(page - 1)
            }
          }}>
          {backButtonText}
        </Button>
        <Button
          variant="contained"
          className="dialog-button"
          onClick={() => {
            if (page === 1) {
              handleSave()
              setPage(page + 1)
            } else if (page === 2) {
              onClose()
            } else {
              setPage(page + 1)
            }
          }}>
          {confirmButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default LoginWizard