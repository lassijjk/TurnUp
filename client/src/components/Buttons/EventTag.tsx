import React from 'react';
import './EventTag.css';
import {EventTagType} from '../../types/Event.ts';
import {useTranslation} from "react-i18next";
import {
    ChildFriendly,
    ColorLens,
    Forest,
    MoneyOff,
    MusicNote, PhotoCamera,
    Public,
    Science,
    SelfImprovement,
    SportsHockey,
    TheaterComedy,
    WineBar,
    Work
} from "@mui/icons-material";
import {rippleEffect} from "./RippleEffect.tsx";

interface EventTagProps {
    variant: EventTagType;
}

const EventTag: React.FC<EventTagProps> = ({ variant }) => {
    const { t } = useTranslation();
    const getIcon = (variant: EventTagType) => {
        switch (variant) {
            case EventTagType.ART:
                return <ColorLens />;
            case EventTagType.BUSINESS:
                return <Work />;
            case EventTagType.CULTURE:
                return <TheaterComedy />;
            case EventTagType.FOOD:
                return <WineBar />;
            case EventTagType.FOR_KIDS:
                return <ChildFriendly />;
            case EventTagType.FREE:
                return <MoneyOff />;
            case EventTagType.MUSIC:
                return <MusicNote />;
            case EventTagType.OUTDOOR:
                return <Forest />;
            case EventTagType.POLITICS:
                return <Public />;
            case EventTagType.RELIGION:
                return <SelfImprovement/>;
            case EventTagType.SCIENCE:
                return <Science />;
            case EventTagType.SIGHTSEEING:
                return <PhotoCamera />;
            case EventTagType.SPORTS:
                return <SportsHockey />;
        }
    }


    return (
        <button variant='contained' onClick={event => rippleEffect(event)} className={'ripple-button event-tag-frame event-tag-frame-' + variant}>
            <span>{t('EVENT_TAG.LABEL.' + variant)}</span>
            {getIcon(variant)}
        </button>
    );
};

export default EventTag;
