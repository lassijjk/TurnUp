import { useState } from 'react'
import { Button, Dialog, DialogContent, DialogActions } from '@mui/material'
import { useGetUserData } from '../../hooks/appSyncHooks'
import InterestsPage from './InterestsPage'
import InfoPage from './InfoPage'
import './LoginWizard.css'
import { updateUserData } from '../../hooks/appSyncHooks'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

type LoginWizardProps = {
  open: boolean
  onClose: () => void
}

const LoginWizard: React.FC<LoginWizardProps> = ({ open, onClose }: LoginWizardProps) => {
  const [page, setPage] = useState(0)
  const [interests, setInterests] = useState<(string | null)[]>([])
  const navigate = useNavigate()
  const userData = useGetUserData()
  const id = userData?.userBySub?.items[0]?.id
  const { t } = useTranslation()

  const PageDisplay = () => {
    if (page === 1) {
      return <InterestsPage interests={interests} setInterests={setInterests} />
    } else {
      return <InfoPage index={page} />
    }
  }

  const backButtonText =
    page === 0
      ? t('LOGIN_WIZARD.SKIP')
      : page === 2 || page === -1
      ? t('LOGIN_WIZARD.SETTINGS')
      : t('LOGIN_WIZARD.BACK')
  const confirmButtonText =
    page === 1 ? t('LOGIN_WIZARD.SAVE') : page === 2 || page === -1 ? t('LOGIN_WIZARD.CLOSE') : t('LOGIN_WIZARD.NEXT')

  const handleSave = async () => {
    const inputData = {
      interestTags: interests || [],
      id: id || '',
      loginWizard: true,
    }

    await updateUserData(inputData)
  }

  const handleSkip = async () => {
    const inputData = {
      id: id || '',
      loginWizard: true,
    }

    await updateUserData(inputData)
  }

  const handleClose = (reason: string) => {
    if (reason !== 'backdropClick') {
      onClose()
    }
  }

  return (
    <Dialog
      open={open}
      onClose={(_, reason) => handleClose(reason)}
      maxWidth="md"
      fullWidth={true}
      className="login-wizard"
      classes={{ root: 'app' }}
      disableEscapeKeyDown={true}
    >
      <DialogContent className="dialog-content">{PageDisplay()}</DialogContent>
      <DialogActions className="dialog-actions">
        <Button
          variant="contained"
          className="dialog-button"
          onClick={() => {
            if (page === 2 || page === -1) {
              navigate('/user-settings')
              onClose()
            } else if (page === 0) {
              handleSkip()
              setPage(page - 1)
            } else {
              setPage(page - 1)
            }
          }}
        >
          {backButtonText}
        </Button>
        <Button
          variant="contained"
          className="dialog-button"
          onClick={() => {
            if (page === 1) {
              handleSave()
              setPage(page + 1)
            } else if (page === 2 || page === -1) {
              onClose()
            } else {
              setPage(page + 1)
            }
          }}
        >
          {confirmButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default LoginWizard
