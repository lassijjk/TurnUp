import React from 'react'
import './EventTag.css'
import { useTranslation } from 'react-i18next'
import {
  ChildFriendly,
  Forest,
  MusicNote,
  SelfImprovement,
  SportsHockey,
  TheaterComedy,
  WineBar,
} from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { rippleEffect } from './RippleEffect.tsx'
import { EventTagType } from '../../types/event.ts'

interface EventTagProps {
  variant: EventTagType
}

const EventTag: React.FC<EventTagProps> = ({ variant }) => {
  const { t } = useTranslation()
  const getIcon = (variant: EventTagType) => {
    switch (variant) {
      case EventTagType.CULTURE:
        return <TheaterComedy />
      case EventTagType.FINE_DINING:
        return <WineBar />
      case EventTagType.FOR_KIDS:
        return <ChildFriendly />
      case EventTagType.MUSIC:
        return <MusicNote />
      case EventTagType.OUTDOOR:
        return <Forest />
      case EventTagType.RELIGION:
        return <SelfImprovement />
      case EventTagType.SPORTS:
        return <SportsHockey />
    }
  }

  return (
    <Button
      variant="contained"
      onClick={(event) => rippleEffect(event)}
      className={'ripple-button event-tag-frame event-tag-frame-' + variant}
    >
      <Box component="span" className="event-title">
        {t('EVENT_TAG.LABEL.' + variant)}
      </Box>
      {getIcon(variant)}
    </Button>
  )
}

export default EventTag
