import './LoginWizard.css'
import InterestsTags from '../InterestsTags/InterestsTags'
import { Dispatch, SetStateAction } from 'react'

type InterestsPageProps = {
  interests: (string | null)[],
  setInterests: Dispatch<SetStateAction<(string | null)[]>>
}

const InterestsPage: React.FC<InterestsPageProps> = ({ interests, setInterests }) => {
  console.log(interests)
  console.log(setInterests)

  return (
    <div className='page-container'>
      <h1 className='page-title'>Interests Page</h1>
      <InterestsTags interests={interests}/>
    </div>
  )
}

export default InterestsPage