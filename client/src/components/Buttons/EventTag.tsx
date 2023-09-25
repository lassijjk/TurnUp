import React from 'react'
import './EventTag.css'
import { EventTagType } from '../../types/event.ts'
import { useTranslation } from 'react-i18next'
import {
  ChildFriendly,
  ColorLens,
  Elderly,
  Forest,
  MoneyOff,
  MusicNote,
  PhotoCamera,
  School,
  Science,
  SelfImprovement,
  SportsHockey,
  TheaterComedy,
  WineBar,
} from '@mui/icons-material'
import { Box, Button } from '@mui/material'

interface EventTagProps {
  variant: EventTagType
  onClick: () => void
  size: 'large' | null
}

const EventTag: React.FC<EventTagProps> = ({ variant, onClick, size }) => {
  const { t } = useTranslation()
  const getIcon = (variant: EventTagType) => {
    switch (variant) {
      case EventTagType.ART:
        return <ColorLens />
      case EventTagType.CULTURE:
        return <TheaterComedy />
      case EventTagType.FOOD:
        return <WineBar />
      case EventTagType.FOR_KIDS:
        return <ChildFriendly />
      case EventTagType.FREE:
        return <MoneyOff />
      case EventTagType.MUSIC:
        return <MusicNote />
      case EventTagType.OUTDOOR:
        return <Forest />
      case EventTagType.RELIGION:
        return <SelfImprovement />
      case EventTagType.SCIENCE:
        return <Science />
      case EventTagType.SEMINAR:
        return <School />
      case EventTagType.SENIORS:
        return <Elderly />
      case EventTagType.SIGHTSEEING:
        return <PhotoCamera />
      case EventTagType.SPORTS:
        return <SportsHockey />
    }
  }

  return (
    <Button
      variant="contained"
      className={'ripple-button event-tag-frame event-tag-frame-' + variant + ' event-tag-' + size}
      onClick={onClick}
    >
      <Box component="span" className="event-title">
        {t('EVENT_TAG.LABEL.' + variant)}
      </Box>
      {getIcon(variant)}
    </Button>
  )
}

export default EventTag
