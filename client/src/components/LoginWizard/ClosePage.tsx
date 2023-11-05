import './LoginWizard.css'
import { useTranslation } from 'react-i18next'

const ClosePage = () => {
  const { t } = useTranslation()

  return (
    <div className='page-container'>
      <h1 className="page-title">{t('LOGIN_WIZARD.CLOSE_TITLE')}</h1>
      <h4>{t('LOGIN_WIZARD.CLOSE_TEXT')}</h4>
    </div>
  )
}

export default ClosePage