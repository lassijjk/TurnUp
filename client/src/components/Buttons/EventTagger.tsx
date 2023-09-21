import {EventApiCategory, EventApiTopic, EventObj, EventTagType} from "../../types/Event.ts";
import _ from 'lodash';

const getTags = (event: EventObj, max: number) => {
    const tagsRaw: Array<EventTagType> = [...tagCategories(event.categories), ...tagTopics(event.topics)];
    return _.take(_(tagsRaw).flatten().uniq().sort().value(), max);
}

const tagCategories = (categories: Array<EventApiCategory>) => {
    const tags: Array<EventTagType> = [];
    categories.forEach(category => {
        const tag: EventTagType | null = getCategoryTag(category);
        if (tag) {
            tags.push(tag);
        }
    })
    return tags;
}

const getCategoryTag = (category: EventApiCategory): EventTagType | null => {
    switch (category) {
        case EventApiCategory.CAFE:
            return EventTagType.FOOD;
        case EventApiCategory.CREATIVE_ARTS:
            return EventTagType.ART;
        case EventApiCategory.CULINARY_EXPERIENCE:
            return EventTagType.FOOD;
        case EventApiCategory.CULTURAL_HERITAGE:
            return EventTagType.CULTURE;
        case EventApiCategory.EVENTS_FESTIVALS:
            return EventTagType.OUTDOOR;
        case EventApiCategory.FINNISH_DESIGN_AND_FASHION:
            return EventTagType.ART;
        case EventApiCategory.FOOD_EXPERIENCE:
            return EventTagType.FOOD;
        case EventApiCategory.GUIDANCE:
            return EventTagType.SIGHTSEEING;
        case EventApiCategory.GUIDED_SERVICE:
            return EventTagType.SIGHTSEEING;
        case EventApiCategory.HANDICRAFT:
            return EventTagType.ART;
        case EventApiCategory.HIKING_WALKING_TREKKING:
            return EventTagType.OUTDOOR;
        case EventApiCategory.HISTORICAL_SITES:
            return EventTagType.CULTURE;
        case EventApiCategory.HISTORY:
            return EventTagType.CULTURE;
        case EventApiCategory.MARKET:
            return EventTagType.OUTDOOR;
        case EventApiCategory.MUSEUMS_GALLERIES:
            return EventTagType.ART;
        case EventApiCategory.MUSIC:
            return EventTagType.MUSIC;
        case EventApiCategory.PERFORMANCE_ARTS:
            return EventTagType.CULTURE;
        case EventApiCategory.RESTAURANT:
            return EventTagType.FOOD;
        case EventApiCategory.SIGHTSEEING_TOURS:
            return EventTagType.SIGHTSEEING;
        case EventApiCategory.SPORTS:
            return EventTagType.SPORTS;
        case EventApiCategory.THEATER:
            return EventTagType.CULTURE;
    }
    return null;
}

const tagTopics = (topics: Array<EventApiTopic>) => {
    const tags: Array<EventTagType> = [];
    topics.forEach(topic => {
        const tag: EventTagType | null = getTopicTag(topic);
        if (tag) {
            tags.push(tag);
        }
    })
    return tags;
}

const getTopicTag = (topic: EventApiTopic): EventTagType | null => {
    switch(topic) {
        case EventApiTopic.ART_CULTURE:
            return EventTagType.ART;
        case EventApiTopic.CRAFTMANSHIP_DESIGN:
            return EventTagType.ART;
        case EventApiTopic.EXCURSIONS_GUIDED_TOURS_ACTIVITIES:
            return EventTagType.SIGHTSEEING;
        case EventApiTopic.EXERCISE_SPORTS:
            return EventTagType.SPORTS;
        case EventApiTopic.EXHIBITIONS_MUSEUMS:
            return EventTagType.ART;
        case EventApiTopic.FAIRS_MARKETS_SALES:
            return EventTagType.FOOD;
        case EventApiTopic.FESTIVALS:
            return EventTagType.MUSIC;
        case EventApiTopic.FOOD_DRINK:
            return EventTagType.FOOD;
        case EventApiTopic.HEALTH_WELL_BEING_PEER_SUPPORT:
            return EventTagType.FREE;
        case EventApiTopic.INTERNATIONAL_HOUSE_TAMPERE:
            return EventTagType.BUSINESS;
        case EventApiTopic.LAIKKU:
            return EventTagType.CULTURE;
        case EventApiTopic.LITERATURE_SCIENCE_HISTORY:
            return EventTagType.SCIENCE;
        case EventApiTopic.MOVIE:
            return EventTagType.ART;
        case EventApiTopic.MUSIC:
            return EventTagType.MUSIC;
        case EventApiTopic.MUUMIMUSEO:
            return EventTagType.FOR_KIDS;
        case EventApiTopic.NATURE_ENVIRONMENT_ANIMALS:
            return EventTagType.OUTDOOR;
        case EventApiTopic.PARTICIPATION_INFLUENCE:
            return EventTagType.FREE;
        case EventApiTopic.RULLA:
            return EventTagType.FOR_KIDS;
        case EventApiTopic.SPIRITUAL_RELIGIOUS:
            return EventTagType.RELIGION;
        case EventApiTopic.SUSTAINABLE_LIFE_STYLE:
            return EventTagType.POLITICS;
        case EventApiTopic.TAMPERE_FILHARMONIA:
            return EventTagType.MUSIC;
        case EventApiTopic.TAMPEREEN_PAIVA:
            return EventTagType.MUSIC;
        case EventApiTopic.TAMPEREEN_TAIDEMUSEO:
            return EventTagType.ART;
        case EventApiTopic.THEATRE_DANCE_CIRCUS:
            return EventTagType.CULTURE;
        case EventApiTopic.TRAININGS_LECTURES:
            return EventTagType.BUSINESS;
        case EventApiTopic.WORK_AND_ENTREPRENEUR:
            return EventTagType.BUSINESS;
    }
    return null;
}

export default getTags;