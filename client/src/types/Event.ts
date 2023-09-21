export enum EventTagType {
    ART = 'art',
    BUSINESS = 'business',
    CULTURE = 'culture',
    FOOD = 'food',
    FOR_KIDS = 'for-kids',
    FREE = 'free',
    MUSIC = 'music',
    OUTDOOR = 'outdoor',
    POLITICS = 'politics',
    RELIGION = 'religion',
    SCIENCE = 'science',
    SIGHTSEEING = 'sightseeing',
    SPORTS = 'sports',
};

export type EventObj = {
    id: string;
    _id: string;
    creationDate: string;
    modificationDate: string;
    name: string;
    start_time: string;
    end_time: string;
    locations: Array<EventApiLocation>;
    dates: Array<EventApiDate>;
    links: Array<EventApiLink>;
    sourceName: string;
    description: string;
    price: number | null;
    images: Array<EventApiImage>;
    imageCopyrights: string | null;
    imageAt: string | null;
    language: string;
    siteName: string;
    categories: Array<EventApiCategory>;
    topics: Array<EventApiTopic>;
    targets: Array<EventApiTarget>;
    tags: Array<EventApiTag>;
    url: string;
    areas: Array<EventApiArea>;
}

export type EventApiLocation = {
    address: string;
    page_id: number | null;
    geoIndex: Array<number>;
    location_id: string;
}

export type EventApiDate = {
    end: string;
    start: string;
    isSoldOut: boolean;
}

export type EventApiLink = {
    url: string;
    name: string;
}

export type EventApiImage = {
    url: string;
    type: string;
    width: number;
    height: number;
}

export enum EventApiCategory {
    CAFE = 'Café',
    CREATIVE_ARTS = 'Creative arts',
    CULINARY_EXPERIENCE = 'Culinary experience',
    CULTURAL_HERITAGE = 'Cultural heritage',
    EVENTS_FESTIVALS = 'Events & festivals',
    FINNISH_DESIGN_AND_FASHION = 'Finnish design and fashion',
    FOOD_EXPERIENCE = 'Food experience',
    GUIDANCE = 'Guidance',
    GUIDED_SERVICE = 'Guided service',
    HANDICRAFT = 'Handicraft',
    HIKING_WALKING_TREKKING = 'Hiking, walking & trekking',
    HISTORICAL_SITES = 'Historical sites',
    HISTORY = 'History',
    MARKET = 'Market',
    MUSEUMS_GALLERIES = 'Museums & galleries',
    MUSIC = 'Music',
    PERFORMANCE_ARTS = 'Performance arts',
    RESTAURANT = 'Restaurant',
    SIGHTSEEING_TOURS = 'Sightseeing & tours',
    SPORTS = 'Sports',
    THEATER = 'Theater',
}

export enum EventApiTopic {
    ART_CULTURE = 'Art and culture',
    CRAFTMANSHIP_DESIGN = 'Craftmanship and design',
    EXCURSIONS_GUIDED_TOURS_ACTIVITIES = 'Excursions, guided tours and activities',
    EXERCISE_SPORTS = 'Exercise and sports',
    EXHIBITIONS_MUSEUMS = 'Exhibitions and museums',
    FAIRS_MARKETS_SALES = 'Fairs, markets and sales',
    FESTIVALS = 'Festivals',
    FOOD_DRINK = 'Food and drink',
    HEALTH_WELL_BEING_PEER_SUPPORT = 'Health, well-being and peer support',
    INTERNATIONAL_HOUSE_TAMPERE = 'International House Tampere',
    LAIKKU = 'Laikku',
    LITERATURE_SCIENCE_HISTORY = 'Literature, science, history',
    MOVIE = 'Movie',
    MUSIC = 'Music',
    MUUMIMUSEO = 'Muumimuseo',
    NATURE_ENVIRONMENT_ANIMALS = 'Nature, environment and animals',
    PARTICIPATION_INFLUENCE = 'Participation and influence',
    RULLA = 'Rulla',
    SPIRITUAL_RELIGIOUS = 'Spiritual and religious',
    SUSTAINABLE_LIFE_STYLE = 'Sustainable life style',
    TAMPERE_FILHARMONIA = 'Tampere Filharmonia',
    TAMPEREEN_PAIVA = 'Tampereen päivä',
    TAMPEREEN_TAIDEMUSEO = 'Tampereen taidemuseo',
    THEATRE_DANCE_CIRCUS = 'Theatre, dance and circus',
    TRAININGS_LECTURES = 'Trainings and lectures',
    WORK_AND_ENTREPRENEUR = 'Work and entrepreneur'
}

export enum EventApiTarget {
    ADULTS = 'Adults',
    BABIES_SMALL_CHILDREN = 'Babies and small children',
    MIDDLE_SCHOOLERS = 'Middle schoolers',
    PRIMARY_SCHOOL_CHILDREN = 'Primary school children',
    SENIORS = 'Seniors',
    YOUNG_PEOPLE = 'Young people'
}

export enum EventApiTag {
    ACCESSIBLE = 'Accessible',
    FREE = 'Free'
}

export type EventApiArea = {
    name: string;
}