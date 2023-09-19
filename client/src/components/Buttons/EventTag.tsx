import React from 'react';
import './EventTag.css';
import { EventTagType } from '../../types/EventTag';
import {useTranslation} from "react-i18next";
import { styled } from '@mui/system';
import {
    ChildFriendly,
    Forest,
    MusicNote,
    SelfImprovement,
    SportsHockey,
    TheaterComedy,
    WineBar
} from "@mui/icons-material";
import {Button} from "@mui/material";
import {rippleEffect} from "./RippleEffect.tsx";

interface EventTagProps {
    variant: EventTagType;
}

const EventTag: React.FC<EventTagProps> = ({ variant }) => {
    const { t } = useTranslation();
    const getIcon = (variant: EventTagType) => {
        switch (variant) {
            case EventTagType.CULTURE:
                return <TheaterComedy />;
            case EventTagType.FINE_DINING:
                return <WineBar />;
            case EventTagType.FOR_KIDS:
                return <ChildFriendly />;
            case EventTagType.MUSIC:
                return <MusicNote />;
            case EventTagType.OUTDOOR:
                return <Forest />;
            case EventTagType.RELIGION:
                return <SelfImprovement/>;
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
