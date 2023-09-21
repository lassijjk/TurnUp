export enum EventTagType {
    ART = 'art',
    CULTURE = 'culture',
    FOOD = 'food',
    FOR_KIDS = 'for-kids',
    FREE = 'free',
    MUSIC = 'music',
    OUTDOOR = 'outdoor',
    RELIGION = 'religion',
    SCIENCE = 'science',
    SEMINAR = 'seminar',
    SENIORS = 'seniors',
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

export enum FinnishCategoryName {
    CAFE = 'Kahvilat',
    CREATIVE_ARTS = 'Teatteri',
    CULINARY_EXPERIENCE = 'Ruokaelämykset',
    CULTURAL_HERITAGE = 'Kulttuuriperintö',
    EVENTS_FESTIVALS = 'Tapahtumat ja festivaalit',
    FINNISH_DESIGN_AND_FASHION = 'Suomalainen design ja muoti',
    FOOD_EXPERIENCE = 'Ruokaelämys',
    GUIDANCE = 'Opastukset',
    GUIDED_SERVICE = 'Opastuspalvelut',
    HANDICRAFT = 'Käsityöt',
    HIKING_WALKING_TREKKING = 'Patikointi, kävely ja vaeltaminen',
    HISTORICAL_SITES = 'Historiallinen nähtävyys',
    HISTORY = 'Historia',
    MARKET = 'Torit',
    MUSEUMS_GALLERIES = 'Museot ja galleriat',
    MUSIC = 'Musiikki',
    PERFORMANCE_ARTS = 'Esittävät taiteet',
    RESTAURANT = 'Ravintola',
    SIGHTSEEING_TOURS = 'Nähtävyydet ja kierrokset',
    SPORTS = 'Urheilu',
    THEATER = 'Teatteri',
}

export enum EventApiTopic {
    ADULTS = 'Adults',
    ART_CULTURE = 'Art and culture',
    BABIES_SMALL_CHILDREN = 'Babies and small children',
    CRAFTMANSHIP_DESIGN = 'Craftmanship and design',
    EVENT_TIPS = 'Event tips',
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
    MEETINGS_CONGRESSES = 'Meetings and congresses',
    MOVIE = 'Movie',
    MUSIC = 'Music',
    MUUMIMUSEO = 'Muumimuseo',
    NATURE_ENVIRONMENT_ANIMALS = 'Nature, environment and animals',
    PARTICIPATION_INFLUENCE = 'Participation and influence',
    PRIMARY_SCHOOL_CHILDREN = 'Primary school children',
    PRODUCT_PROMOTION_CAMPAIGNS = 'Product promotion campaigns',
    RULLA = 'Rulla',
    SENIORS = 'Seniors',
    SPIRITUAL_RELIGIOUS = 'Spiritual and religious',
    SUSTAINABLE_LIFE_STYLE = 'Sustainable life style',
    TAMPERE_FILHARMONIA = 'Tampere Filharmonia',
    TAMPEREEN_PAIVA = 'Tampereen päivä',
    TAMPEREEN_SEUDUN_TYOVAENOPISTO = 'Tampereen seudun työväenopisto',
    TAMPEREEN_TAIDEMUSEO = 'Tampereen taidemuseo',
    THEATRE_DANCE_CIRCUS = 'Theatre, dance and circus',
    TRAININGS_LECTURES = 'Trainings and lectures',
    WORK_AND_ENTREPRENEUR = 'Work and entrepreneur'
}

export enum FinnishTopicName {
    ADULTS = 'Aikuiset',
    ART_CULTURE = 'Kulttuuri ja taide',
    BABIES_SMALL_CHILDREN = 'Vauvat ja pienet lapset',
    CRAFTMANSHIP_DESIGN = 'Kädentaidot ja design',
    EVENT_TIPS = 'Tapahtumavinkit',
    EXCURSIONS_GUIDED_TOURS_ACTIVITIES = 'Retket, opastetut kierrokset ja aktiviteetit',
    EXERCISE_SPORTS = 'Liikunta ja urheilu',
    EXHIBITIONS_MUSEUMS = 'Näyttelyt ja museot',
    FAIRS_MARKETS_SALES = 'Messut, markkinat ja myyjäiset',
    FESTIVALS = 'Festivaalit ja suuret tapahtumat',
    FOOD_DRINK = 'Ruoka ja juoma',
    HEALTH_WELL_BEING_PEER_SUPPORT = 'Terveys, hyvinvointi ja vertaistuki',
    INTERNATIONAL_HOUSE_TAMPERE = 'International House Tampere',
    LAIKKU = 'Laikku',
    LITERATURE_SCIENCE_HISTORY = 'Kirjallisuus, tiede ja historia',
    MEETINGS_CONGRESSES = 'Kokoukset ja kongressit',
    MOVIE = 'Elokuva',
    MUSIC = 'Musiikki',
    MUUMIMUSEO = 'Muumimuseo',
    NATURE_ENVIRONMENT_ANIMALS = 'Luonto, ympäristö ja eläimet',
    PARTICIPATION_INFLUENCE = 'Osallistuminen ja vaikuttaminen',
    PRIMARY_SCHOOL_CHILDREN = 'Alakouluikäiset',
    PRODUCT_PROMOTION_CAMPAIGNS = 'Tuotetarjouskampanjat',
    RULLA = 'Rulla',
    SENIORS = 'Seniorit',
    SPIRITUAL_RELIGIOUS = 'Hengelliset ja uskonnolliset',
    SUSTAINABLE_LIFE_STYLE = 'Kestävä elämäntapa',
    TAMPERE_FILHARMONIA = 'Tampere Filharmonia',
    TAMPEREEN_PAIVA = 'Tampereen päivä',
    TAMPEREEN_SEUDUN_TYOVAENOPISTO = 'Tampereen seudun työväenopisto',
    TAMPEREEN_TAIDEMUSEO = 'Tampereen taidemuseo',
    THEATRE_DANCE_CIRCUS = 'Teatteri, tanssi ja sirkus',
    TRAININGS_LECTURES = 'Koulutukset ja luennot',
    WORK_AND_ENTREPRENEUR = 'Työ ja yrittäminen'
}

export enum EventApiTarget {
    ADULTS = 'Adults',
    BABIES_SMALL_CHILDREN = 'Babies and small children',
    MIDDLE_SCHOOLERS = 'Middle schoolers',
    PRIMARY_SCHOOL_CHILDREN = 'Primary school children',
    SENIORS = 'Seniors',
    YOUNG_PEOPLE = 'Young people'
}

export enum FinnishTargetName {
    ADULTS = 'Aikuiset',
    BABIES_SMALL_CHILDREN = 'Vauvat ja pienet lapset',
    MIDDLE_SCHOOLERS = 'Yläkouluikäiset',
    PRIMARY_SCHOOL_CHILDREN = 'Alakouluikäiset',
    SENIORS = 'Seniorit',
    YOUNG_PEOPLE = 'Nuoret'
}

export enum EventApiTag {
    ACCESSIBLE = 'Accessible',
    FREE = 'Free',
    VIRTUAL = 'Virtual'
}

export enum FinnishTagName {
    ACCESSIBLE = 'Esteetön',
    FREE = 'Maksuton',
    VIRTUAL = 'Virtuaali'
}

export type EventApiArea = {
    name: string;
}

export enum KnownEventDomain {
    ANNE_OLLGREN = "anne-ollgren.webnode.fi",
    ART_FROM_THE_UNDERGROUND = "artfromtheunderground.fi",
    ARTTELI = "artteli.fi",
    EKOKUMPPANIT = "ekokumppanit.fi",
    ERIMENU = "erimenu.fi",
    FACEBOOK = "facebook.com",
    FB = "fb.me",
    FUNGUS = "fungus.yhdistysavain.fi",
    GAMES_AS_ART_CENTER = "gamesasartcenter.com",
    G_LIVELAB = "glivelab.fi",
    ISOT_KONEET_KESKUTORILLA = "isotkoneetkeskustorilla.fi",
    KOMEDIATEATTERI = "komediateatteri.fi",
    KOTAE = "kotae.fi",
    KRISTILLISET_IKINUORET = "Kristilliset Ikinuoret",
    KRISTILLINEN_ELAKEYHDISTYS = "Kristilllinen Eläkeläisyhdistys Ikinuoret ry Tampere",
    KULTTUURI_PIIPOO = "kulttuuripiipoo.fi",
    LAULUSISKOT = "laulusiskot.fi",
    LAULUTUNNIT_TAMPERE = "laulutunnittampere.fi",
    LIISA_AHLFORS = "liisaahlfors.fi",
    LIPPU = "lippu.fi",
    LIPPUAGENTTI = "lippuagentti.fi",
    LIVE_NATION = "livenation.fi",
    MALTIN_RANTA = "maltinranta.fi",
    MIELEN = "mielen.fi",
    MINUN_AANENI = "minunaaneni.fi",
    MOBILIA = "mobilia.fi",
    MOUNTAIN_WARRIORS = "mountainwarriors.fi",
    MUSEUM_ILAVIDA = "museomilavida.fi",
    MUUMIMUSEO = "muumimuseo.fi",
    NOKIA_ARENA = "nokiaarena.livex.fi",
    OPER_ART = "operart.fi",
    OPISTOPALVELUT = "uusi.opistopalvelut.fi",
    PARASTA_LAPSILLE = "tapahtumat-parastalapsille-fi.pwire.fi",
    PHOTO_FESTIVAL = "photofestival.fi",
    PILVIKANAVA = "uusi.pilvikanava.fi",
    PIRAVH = "piravh.fi",
    PIRKANMAAN_KIINTEISTOLIITTO = "pirkanmaa.kiinteistoliitto.fi",
    PIRKANMAAN_ALLERGIA = "pirkanmaanallergia.fi",
    PIRKANMAAN_TANSSIKESKUS = "pirkanmaantanssinkeskus.fi",
    PIRKKALA = "pirkkala.fi",
    PLEVNA = "plevna.fi",
    PMO = "pmo.fi",
    POSTIMUSEO = "postimuseo.fi",
    PUOTI = "puoti.nuorisoseurat.fi",
    RIENTOLA = "rientola.fi",
    SC_CLASSIC = "scclassic.com",
    SITES_TUNI = "sites.tuni.fi",
    SOINTU_SENIORI_PALVELUT = "sointusenioripalvelut.fi",
    STEEL_BODY = "steelbody.fi",
    TAMPERE = "tampere.fi",
    TAMPEREEN_OPPAAT = "tampereenoppaat.fi",
    TAMPERE_SEURAKUNNAT = "tampereenseurakunnat.fi",
    TAMPERE_TAIDEMUSEO = "tampereentaidemuseo.fi",
    TAMPEREEN_TARINATEATTERI = "tampereentarinateatteri.fi",
    TAMPERE_FILHARMONIA = "tamperefilharmonia.fi",
    TAMPERE_MISSIO = "tamperemissio.fi",
    TANSSIMANIA = "tanssimania.fi",
    TANSSITEATTERI_MD = "tanssiteatterimd.fi",
    TAPAHTUMAT_TAMPERE =  "tapahtumat.tampere.fi",
    TICKETMASTER = "ticketmaster.fi",
    TIKETTI = "tiketti.fi",
    TIKTOK = "tiktok.com",
    TREDU = "tredu.fi",
    TRE_FINLAND = "trefinland.fi",
    TTT_TEATTERI = "ttt-teatteri.fi",
    TUKKA_TEATTERI = "tukkateatteri.fi",
    TYOVAENMUSEO = "tyovaenmuseo.fi",
    ULKOPAKOPELI = "ulkopakopeli.com",
    VAPRIIKKI = "vapriikki.fi",
    VERTAISTERVARIT = "vertaistervarit.fi",
    VIMMART = "vimmart.fi",
    VIOLA_KOTI = "viola-koti.fi",
    VOIMAA_METSASTA = "voimaametsasta.fi",
    YOSTAJA = "yostaja.fi"
}