import { useState, useEffect } from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import { useGetUserData } from '../../hooks/appSyncHooks'
import WelcomePage from './WelcomePage'
import InterestsPage from './InterestsPage'

type LoginWizardProps = {
  open: boolean
  onClose: () => void
}

const LoginWizard: React.FC<LoginWizardProps> = ({ open, onClose }: LoginWizardProps) => {  
  const [page, setPage] = useState(0)
  const [interests, setInterests] = useState<(string | null)[]>([]);
  const userData = useGetUserData()

  useEffect(() => {
    const interestTags = userData?.userBySub?.items[0]?.interestTags as (string | null)[]
    if (interestTags){
      setInterests(interestTags)
    }
  }, [userData]) 

  const PageDisplay = () => {
    if (page === 0) {
      return <WelcomePage/>
    } else if (page === 1) {
      return <InterestsPage interests={interests}/>
    }
  }

  const backButtonText = page === 0 ? 'Skip' : 'Back';
  const confirmButtonText = page === 2 ? 'Save' : 'Next';

  return (
    <Dialog open={open} onClose={onClose} maxWidth='xl' >
      <DialogTitle style={{ textAlign: 'center', padding: 8, paddingBottom: 0 }}>Login Wizard</DialogTitle>
      <DialogContent>
        {PageDisplay()}
      </DialogContent>
      <DialogActions style={{ justifyContent: 'space-between', padding: '1rem', paddingTop: 0 }}>
        <Button
          variant="contained"
          onClick={() => {
            if (page === 0) {
              onClose()
            } else {
              setPage(page - 1)
            }
          }}>
          {backButtonText}
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            if (page === 2) {
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