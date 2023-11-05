import { Grid } from '@mui/material'
import EventTag from "../Buttons/EventTag"
import { EventTagType } from "../../types/event"
import './InterestsTags.css'

type InterestsPageProps = {
  interests: (string | null)[]
}

const InterestsTags: React.FC<InterestsPageProps> = ({ interests }) => {
  return (
    <Grid container spacing={2} marginTop={1} className="interests-container">
      {Object.values(EventTagType).map((interest) => {
        return (
          <EventTag
            key={interest}
            variant={interest}
            selected={interests.includes(interest)}
            onClick={() => console.log(interest)}
          />
        )
      })}
    </Grid>
  )
}

export default InterestsTags
