import { Grid } from '@mui/material'
import { EventTagType } from '../types/event'
import EventTag from './Buttons/EventTag'

interface InterestsProps {
  interests: (string | null)[]
  onSelectInterest: (interest: EventTagType) => void
}

const Interests = ({ interests, onSelectInterest }: InterestsProps) => {
  return (
    <Grid container spacing={2} marginTop={1} className="interests-container">
      {Object.values(EventTagType).map((interest) => {
        return (
          <EventTag
            key={interest}
            variant={interest}
            selected={interests.includes(interest)}
            onClick={() => onSelectInterest(interest)}
          />
        )
      })}
    </Grid>
  )
}

export default Interests
