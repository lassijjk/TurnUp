import './LoginWizard.css'
import { useTranslation } from 'react-i18next'

const InfoPage = ({ index }: { index: number }) => {
  const { t } = useTranslation()

  const title = index === 0 ? t('LOGIN_WIZARD.WELCOME_TITLE'): index === 2 ? t('LOGIN_WIZARD.CLOSE_TITLE'): t('LOGIN_WIZARD.SKIP_TITLE')
  const text = index === 0 ? t('LOGIN_WIZARD.WELCOME_TEXT'): index === 2 ? t('LOGIN_WIZARD.CLOSE_TEXT'): t('LOGIN_WIZARD.SKIP_TEXT')
  
  return (
    <div className='page-container'>
      <h1 className="page-title">{title}</h1>
      <h4>{text}</h4>
    </div>
  )
}

export default InfoPage