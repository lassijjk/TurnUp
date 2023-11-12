import './LoginWizard.css'
import Interests from '../Interests'
import { Dispatch, SetStateAction } from 'react'
import { EventTagType } from '../../types/event'
import '../Buttons/EventTag.css'
import { useTranslation } from 'react-i18next'

type InterestsPageProps = {
  interests: (string | null)[]
  setInterests: Dispatch<SetStateAction<(string | null)[]>>
}

const InterestsPage: React.FC<InterestsPageProps> = ({ interests, setInterests }) => {
  const { t } = useTranslation()

  const onSelectInterest = (interest: EventTagType) => {
    if (interests.includes(interest)) {
      setInterests((interests) => interests.filter((item) => item !== interest))
      return
    }

    setInterests((interests) => [...interests, interest])
  }

  return (
    <div className="page-container">
      <h1 className="page-title">{t('LOGIN_WIZARD.INTERESTS_TITLE')}</h1>
      <Interests interests={interests} onSelectInterest={onSelectInterest} />
    </div>
  )
}

export default InterestsPage
