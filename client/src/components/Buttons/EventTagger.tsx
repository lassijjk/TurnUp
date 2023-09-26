import {
  EventApiCategory,
  EventApiLink,
  EventApiLocation,
  EventApiTag,
  EventApiTarget,
  EventApiTopic,
  EventObj,
  EventTagType,
  FinnishCategoryName,
  FinnishTagName,
  FinnishTargetName,
  FinnishTopicName,
  KnownAddress,
  KnownEventDomain,
} from '../../types/event.ts'
import _ from 'lodash'
import { LanguageFullName } from '../../types/language.ts'

const domainRegex = /^(?:https?:\/\/)?(?:w{3,}\.)?([^\/]+)/
const addressRegex: RegExp = /^[^,]+/

const getTags = (event: EventObj, max: number, language: LanguageFullName) => {
  const needsTranslation = language === LanguageFullName.FINNISH
  const tagsRaw: Array<EventTagType> = [
    ...tagCategories(
      needsTranslation
        ? translateCategories(event.categories as FinnishCategoryName[])
        : (event.categories as EventApiCategory[])
    ),
    ...tagTopics(
      needsTranslation ? translateTopics(event.topics as FinnishTopicName[]) : (event.topics as EventApiTopic[])
    ),
    ...tagTargets(
      needsTranslation ? translateTargets(event.targets as FinnishTargetName[]) : (event.targets as EventApiTarget[])
    ),
    ...tagTags(needsTranslation ? translateTags(event.tags as FinnishTagName[]) : (event.tags as EventApiTag[])),
    ...tagLinks(event.links),
    ...tagLocations(event.locations),
  ]
  return _.take(_(tagsRaw).flatten().uniq().value(), max)
}

const tagCategories = (categories: Array<EventApiCategory>) => {
  const tags: Array<EventTagType> = []
  categories.forEach((category) => {
    const tag: EventTagType | null = getCategoryTag(category)
    if (tag) {
      tags.push(tag)
    }
  })
  return tags
}

const translateCategories = (categories: Array<FinnishCategoryName>): Array<EventApiCategory> => {
  return categories.map((category) => translateCategory(category))
}

const translateCategory = (category: FinnishCategoryName): EventApiCategory => {
  switch (category) {
    case FinnishCategoryName.CAFE:
      return EventApiCategory.CAFE
    case FinnishCategoryName.CREATIVE_ARTS:
      return EventApiCategory.CREATIVE_ARTS
    case FinnishCategoryName.CULINARY_EXPERIENCE:
      return EventApiCategory.CULINARY_EXPERIENCE
    case FinnishCategoryName.CULTURAL_HERITAGE:
      return EventApiCategory.CULTURAL_HERITAGE
    case FinnishCategoryName.EVENTS_FESTIVALS:
      return EventApiCategory.EVENTS_FESTIVALS
    case FinnishCategoryName.FINNISH_DESIGN_AND_FASHION:
      return EventApiCategory.FINNISH_DESIGN_AND_FASHION
    case FinnishCategoryName.FOOD_EXPERIENCE:
      return EventApiCategory.FOOD_EXPERIENCE
    case FinnishCategoryName.GUIDANCE:
      return EventApiCategory.GUIDANCE
    case FinnishCategoryName.GUIDED_SERVICE:
      return EventApiCategory.GUIDED_SERVICE
    case FinnishCategoryName.HANDICRAFT:
      return EventApiCategory.HANDICRAFT
    case FinnishCategoryName.HIKING_WALKING_TREKKING:
      return EventApiCategory.HIKING_WALKING_TREKKING
    case FinnishCategoryName.HISTORICAL_SITES:
      return EventApiCategory.HISTORICAL_SITES
    case FinnishCategoryName.HISTORY:
      return EventApiCategory.HISTORY
    case FinnishCategoryName.MARKET:
      return EventApiCategory.MARKET
    case FinnishCategoryName.MUSEUMS_GALLERIES:
      return EventApiCategory.MUSEUMS_GALLERIES
    case FinnishCategoryName.MUSIC:
      return EventApiCategory.MUSIC
    case FinnishCategoryName.PERFORMANCE_ARTS:
      return EventApiCategory.PERFORMANCE_ARTS
    case FinnishCategoryName.RESTAURANT:
      return EventApiCategory.RESTAURANT
    case FinnishCategoryName.SIGHTSEEING_TOURS:
      return EventApiCategory.SIGHTSEEING_TOURS
    case FinnishCategoryName.SPORTS:
      return EventApiCategory.SPORTS
    case FinnishCategoryName.THEATER:
      return EventApiCategory.THEATER
  }
  return category
}

const getCategoryTag = (category: EventApiCategory): EventTagType | null => {
  switch (category) {
    case EventApiCategory.CAFE:
      return EventTagType.FOOD
    case EventApiCategory.CREATIVE_ARTS:
      return EventTagType.ART
    case EventApiCategory.CULINARY_EXPERIENCE:
      return EventTagType.FOOD
    case EventApiCategory.CULTURAL_HERITAGE:
      return EventTagType.CULTURE
    case EventApiCategory.EVENTS_FESTIVALS:
      return EventTagType.OUTDOOR
    case EventApiCategory.FINNISH_DESIGN_AND_FASHION:
      return EventTagType.ART
    case EventApiCategory.FOOD_EXPERIENCE:
      return EventTagType.FOOD
    case EventApiCategory.GUIDANCE:
      return EventTagType.SIGHTSEEING
    case EventApiCategory.GUIDED_SERVICE:
      return EventTagType.SIGHTSEEING
    case EventApiCategory.HANDICRAFT:
      return EventTagType.ART
    case EventApiCategory.HIKING_WALKING_TREKKING:
      return EventTagType.OUTDOOR
    case EventApiCategory.HISTORICAL_SITES:
      return EventTagType.CULTURE
    case EventApiCategory.HISTORY:
      return EventTagType.CULTURE
    case EventApiCategory.MARKET:
      return EventTagType.OUTDOOR
    case EventApiCategory.MUSEUMS_GALLERIES:
      return EventTagType.ART
    case EventApiCategory.MUSIC:
      return EventTagType.MUSIC
    case EventApiCategory.PERFORMANCE_ARTS:
      return EventTagType.CULTURE
    case EventApiCategory.RESTAURANT:
      return EventTagType.FOOD
    case EventApiCategory.SIGHTSEEING_TOURS:
      return EventTagType.SIGHTSEEING
    case EventApiCategory.SPORTS:
      return EventTagType.SPORTS
    case EventApiCategory.THEATER:
      return EventTagType.CULTURE
  }
  return null
}

const translateTopics = (topics: Array<FinnishTopicName>): Array<EventApiTopic> => {
  return topics.map((topic) => translateTopic(topic))
}

const translateTopic = (topic: FinnishTopicName): EventApiTopic => {
  switch (topic) {
    case FinnishTopicName.ADULTS:
      return EventApiTopic.ADULTS
    case FinnishTopicName.ART_CULTURE:
      return EventApiTopic.ART_CULTURE
    case FinnishTopicName.BABIES_SMALL_CHILDREN:
      return EventApiTopic.BABIES_SMALL_CHILDREN
    case FinnishTopicName.CRAFTMANSHIP_DESIGN:
      return EventApiTopic.CRAFTMANSHIP_DESIGN
    case FinnishTopicName.EVENT_TIPS:
      return EventApiTopic.EVENT_TIPS
    case FinnishTopicName.EXCURSIONS_GUIDED_TOURS_ACTIVITIES:
      return EventApiTopic.EXCURSIONS_GUIDED_TOURS_ACTIVITIES
    case FinnishTopicName.EXERCISE_SPORTS:
      return EventApiTopic.EXERCISE_SPORTS
    case FinnishTopicName.EXHIBITIONS_MUSEUMS:
      return EventApiTopic.EXHIBITIONS_MUSEUMS
    case FinnishTopicName.FAIRS_MARKETS_SALES:
      return EventApiTopic.FAIRS_MARKETS_SALES
    case FinnishTopicName.FESTIVALS:
      return EventApiTopic.FESTIVALS
    case FinnishTopicName.FOOD_DRINK:
      return EventApiTopic.FOOD_DRINK
    case FinnishTopicName.HEALTH_WELL_BEING_PEER_SUPPORT:
      return EventApiTopic.HEALTH_WELL_BEING_PEER_SUPPORT
    case FinnishTopicName.INTERNATIONAL_HOUSE_TAMPERE:
      return EventApiTopic.INTERNATIONAL_HOUSE_TAMPERE
    case FinnishTopicName.LAIKKU:
      return EventApiTopic.LAIKKU
    case FinnishTopicName.LITERATURE_SCIENCE_HISTORY:
      return EventApiTopic.LITERATURE_SCIENCE_HISTORY
    case FinnishTopicName.MEETINGS_CONGRESSES:
      return EventApiTopic.MEETINGS_CONGRESSES
    case FinnishTopicName.MOVIE:
      return EventApiTopic.MOVIE
    case FinnishTopicName.MUSIC:
      return EventApiTopic.MUSIC
    case FinnishTopicName.MUUMIMUSEO:
      return EventApiTopic.MUUMIMUSEO
    case FinnishTopicName.NATURE_ENVIRONMENT_ANIMALS:
      return EventApiTopic.NATURE_ENVIRONMENT_ANIMALS
    case FinnishTopicName.PARTICIPATION_INFLUENCE:
      return EventApiTopic.PARTICIPATION_INFLUENCE
    case FinnishTopicName.PRIMARY_SCHOOL_CHILDREN:
      return EventApiTopic.PRIMARY_SCHOOL_CHILDREN
    case FinnishTopicName.PRODUCT_PROMOTION_CAMPAIGNS:
      return EventApiTopic.PRODUCT_PROMOTION_CAMPAIGNS
    case FinnishTopicName.RULLA:
      return EventApiTopic.RULLA
    case FinnishTopicName.SENIORS:
      return EventApiTopic.SENIORS
    case FinnishTopicName.SPIRITUAL_RELIGIOUS:
      return EventApiTopic.SPIRITUAL_RELIGIOUS
    case FinnishTopicName.SUSTAINABLE_LIFE_STYLE:
      return EventApiTopic.SUSTAINABLE_LIFE_STYLE
    case FinnishTopicName.TAMPERE_FILHARMONIA:
      return EventApiTopic.TAMPERE_FILHARMONIA
    case FinnishTopicName.TAMPEREEN_PAIVA:
      return EventApiTopic.TAMPEREEN_PAIVA
    case FinnishTopicName.TAMPEREEN_SEUDUN_TYOVAENOPISTO:
      return EventApiTopic.TAMPEREEN_SEUDUN_TYOVAENOPISTO
    case FinnishTopicName.TAMPEREEN_TAIDEMUSEO:
      return EventApiTopic.TAMPEREEN_TAIDEMUSEO
    case FinnishTopicName.THEATRE_DANCE_CIRCUS:
      return EventApiTopic.THEATRE_DANCE_CIRCUS
    case FinnishTopicName.TRAININGS_LECTURES:
      return EventApiTopic.TRAININGS_LECTURES
    case FinnishTopicName.WORK_AND_ENTREPRENEUR:
      return EventApiTopic.WORK_AND_ENTREPRENEUR
  }
  return topic
}

const tagTopics = (topics: Array<EventApiTopic>) => {
  const tags: Array<EventTagType> = []
  topics.forEach((topic) => {
    const tag: EventTagType | null = getTopicTag(topic)
    if (tag) {
      tags.push(tag)
    }
  })
  return tags
}

const getTopicTag = (topic: EventApiTopic): EventTagType | null => {
  switch (topic) {
    case EventApiTopic.ADULTS:
      return null
    case EventApiTopic.ART_CULTURE:
      return EventTagType.ART
    case EventApiTopic.BABIES_SMALL_CHILDREN:
      return EventTagType.FOR_KIDS
    case EventApiTopic.CRAFTMANSHIP_DESIGN:
      return EventTagType.ART
    case EventApiTopic.EVENT_TIPS:
      return EventTagType.MUSIC
    case EventApiTopic.EXCURSIONS_GUIDED_TOURS_ACTIVITIES:
      return EventTagType.SIGHTSEEING
    case EventApiTopic.EXERCISE_SPORTS:
      return EventTagType.SPORTS
    case EventApiTopic.EXHIBITIONS_MUSEUMS:
      return EventTagType.ART
    case EventApiTopic.FAIRS_MARKETS_SALES:
      return EventTagType.FOOD
    case EventApiTopic.FESTIVALS:
      return EventTagType.MUSIC
    case EventApiTopic.FOOD_DRINK:
      return EventTagType.FOOD
    case EventApiTopic.HEALTH_WELL_BEING_PEER_SUPPORT:
      return EventTagType.SENIORS
    case EventApiTopic.INTERNATIONAL_HOUSE_TAMPERE:
      return EventTagType.SEMINAR
    case EventApiTopic.LAIKKU:
      return EventTagType.CULTURE
    case EventApiTopic.LITERATURE_SCIENCE_HISTORY:
      return EventTagType.SCIENCE
    case EventApiTopic.MEETINGS_CONGRESSES:
      return EventTagType.SCIENCE
    case EventApiTopic.MOVIE:
      return EventTagType.ART
    case EventApiTopic.MUSIC:
      return EventTagType.MUSIC
    case EventApiTopic.MUUMIMUSEO:
      return EventTagType.FOR_KIDS
    case EventApiTopic.NATURE_ENVIRONMENT_ANIMALS:
      return EventTagType.OUTDOOR
    case EventApiTopic.PARTICIPATION_INFLUENCE:
      return EventTagType.FREE
    case EventApiTopic.PRIMARY_SCHOOL_CHILDREN:
      return EventTagType.FOR_KIDS
    case EventApiTopic.PRODUCT_PROMOTION_CAMPAIGNS:
      return EventTagType.FOOD
    case EventApiTopic.RULLA:
      return EventTagType.FOR_KIDS
    case EventApiTopic.SENIORS:
      return EventTagType.SENIORS
    case EventApiTopic.SPIRITUAL_RELIGIOUS:
      return EventTagType.RELIGION
    case EventApiTopic.SUSTAINABLE_LIFE_STYLE:
      return EventTagType.FREE
    case EventApiTopic.TAMPERE_FILHARMONIA:
      return EventTagType.MUSIC
    case EventApiTopic.TAMPEREEN_PAIVA:
      return null
    case EventApiTopic.TAMPEREEN_SEUDUN_TYOVAENOPISTO:
      return EventTagType.SEMINAR
    case EventApiTopic.TAMPEREEN_TAIDEMUSEO:
      return EventTagType.ART
    case EventApiTopic.THEATRE_DANCE_CIRCUS:
      return EventTagType.CULTURE
    case EventApiTopic.TRAININGS_LECTURES:
      return EventTagType.SEMINAR
    case EventApiTopic.WORK_AND_ENTREPRENEUR:
      return EventTagType.SEMINAR
  }
  return null
}

const translateTargets = (targets: Array<FinnishTargetName>): Array<EventApiTarget> => {
  return targets.map((target) => translateTarget(target))
}

const translateTarget = (target: FinnishTargetName): EventApiTarget => {
  switch (target) {
    case FinnishTargetName.ADULTS:
      return EventApiTarget.ADULTS
    case FinnishTargetName.BABIES_SMALL_CHILDREN:
      return EventApiTarget.BABIES_SMALL_CHILDREN
    case FinnishTargetName.MIDDLE_SCHOOLERS:
      return EventApiTarget.MIDDLE_SCHOOLERS
    case FinnishTargetName.SENIORS:
      return EventApiTarget.SENIORS
    case FinnishTargetName.PRIMARY_SCHOOL_CHILDREN:
      return EventApiTarget.PRIMARY_SCHOOL_CHILDREN
    case FinnishTargetName.YOUNG_PEOPLE:
      return EventApiTarget.YOUNG_PEOPLE
  }
  return target
}

const tagTargets = (targets: Array<EventApiTarget>) => {
  const tags: Array<EventTagType> = []
  targets.forEach((target) => {
    const tag: EventTagType | null = getTargetTag(target)
    if (tag) {
      tags.push(tag)
    }
  })
  return tags
}

const getTargetTag = (target: EventApiTarget): EventTagType | null => {
  switch (target) {
    case EventApiTarget.ADULTS:
      return null
    case EventApiTarget.MIDDLE_SCHOOLERS:
      return EventTagType.FOR_KIDS
    case EventApiTarget.PRIMARY_SCHOOL_CHILDREN:
      return EventTagType.FOR_KIDS
    case EventApiTarget.SENIORS:
      return EventTagType.SENIORS
    case EventApiTarget.YOUNG_PEOPLE:
      return null
  }
  return null
}

const translateTags = (tags: Array<FinnishTagName>): Array<EventApiTag> => {
  return tags.map((tag) => translateTag(tag))
}

const translateTag = (tag: FinnishTagName): EventApiTag => {
  switch (tag) {
    case FinnishTagName.ACCESSIBLE:
      return EventApiTag.ACCESSIBLE
    case FinnishTagName.FREE:
      return EventApiTag.FREE
    case FinnishTagName.VIRTUAL:
      return EventApiTag.VIRTUAL
  }
  return tag
}

const tagTags = (tags: Array<EventApiTag>) => {
  const tagTags: Array<EventTagType> = []
  tags.forEach((tag) => {
    const tagTag: EventTagType | null = getTagTag(tag)
    if (tagTag) {
      tagTags.push(tagTag)
    }
  })
  return tagTags
}

const getTagTag = (tag: EventApiTag): EventTagType | null => {
  switch (tag) {
    case EventApiTag.ACCESSIBLE:
      return EventTagType.SENIORS
    case EventApiTag.FREE:
      return EventTagType.FREE
    case EventApiTag.VIRTUAL:
      return EventTagType.FREE
  }
  return null
}

const tagLinks = (links: Array<EventApiLink>) => {
  const tags: Array<EventTagType> = []
  const domains = _.flatten(links).map((link) => {
    const matches = link ? domainRegex.exec(link.url) : null
    return matches ? matches[1] : null
  })
  domains.forEach((domain) => {
    const tag: EventTagType | null = getDomainTag(domain as KnownEventDomain)
    if (tag) {
      tags.push(tag)
    }
  })
  return tags
}

const getDomainTag = (domain: KnownEventDomain): EventTagType | null => {
  switch (domain) {
    case KnownEventDomain.ANNE_OLLGREN:
      return EventTagType.SPORTS
    case KnownEventDomain.ART_FROM_THE_UNDERGROUND:
      return EventTagType.ART
    case KnownEventDomain.ARTTELI:
      return EventTagType.SENIORS
    case KnownEventDomain.EKOKUMPPANIT:
      return EventTagType.FREE
    case KnownEventDomain.ERIMENU:
      return EventTagType.FOOD
    case KnownEventDomain.FACEBOOK:
      return EventTagType.MUSIC
    case KnownEventDomain.FB:
      return EventTagType.FOOD
    case KnownEventDomain.FUNGUS:
      return EventTagType.SCIENCE
    case KnownEventDomain.GAMES_AS_ART_CENTER:
      return EventTagType.ART
    case KnownEventDomain.G_LIVELAB:
      return EventTagType.MUSIC
    case KnownEventDomain.ISOT_KONEET_KESKUTORILLA:
      return EventTagType.SCIENCE
    case KnownEventDomain.KOMEDIATEATTERI:
      return EventTagType.CULTURE
    case KnownEventDomain.KOTAE:
      return EventTagType.SEMINAR
    case KnownEventDomain.KRISTILLISET_IKINUORET:
      return EventTagType.RELIGION
    case KnownEventDomain.KRISTILLINEN_ELAKEYHDISTYS:
      return EventTagType.RELIGION
    case KnownEventDomain.KULTTUURI_PIIPOO:
      return EventTagType.FOR_KIDS
    case KnownEventDomain.LAULUSISKOT:
      return EventTagType.MUSIC
    case KnownEventDomain.LAULUTUNNIT_TAMPERE:
      return EventTagType.MUSIC
    case KnownEventDomain.LIISA_AHLFORS:
      return EventTagType.ART
    case KnownEventDomain.LIPPU:
      return EventTagType.MUSIC
    case KnownEventDomain.LIPPUAGENTTI:
      return EventTagType.MUSIC
    case KnownEventDomain.LIVE_NATION:
      return EventTagType.MUSIC
    case KnownEventDomain.MALTIN_RANTA:
      return EventTagType.ART
    case KnownEventDomain.MIELEN:
      return EventTagType.OUTDOOR
    case KnownEventDomain.MINUN_AANENI:
      return EventTagType.MUSIC
    case KnownEventDomain.MOBILIA:
      return EventTagType.CULTURE
    case KnownEventDomain.MOUNTAIN_WARRIORS:
      return EventTagType.SPORTS
    case KnownEventDomain.MUSEUM_ILAVIDA:
      return EventTagType.CULTURE
    case KnownEventDomain.MUUMIMUSEO:
      return EventTagType.FOR_KIDS
    case KnownEventDomain.NOKIA_ARENA:
      return EventTagType.MUSIC
    case KnownEventDomain.OPER_ART:
      return EventTagType.ART
    case KnownEventDomain.OPISTOPALVELUT:
      return EventTagType.SEMINAR
    case KnownEventDomain.PARASTA_LAPSILLE:
      return EventTagType.FOR_KIDS
    case KnownEventDomain.PHOTO_FESTIVAL:
      return EventTagType.ART
    case KnownEventDomain.PILVIKANAVA:
      return EventTagType.SEMINAR
    case KnownEventDomain.PIRAVH:
      return EventTagType.FOOD
    case KnownEventDomain.PIRKANMAAN_KIINTEISTOLIITTO:
      return EventTagType.FREE
    case KnownEventDomain.PIRKANMAAN_ALLERGIA:
      return EventTagType.FOOD
    case KnownEventDomain.PIRKANMAAN_TANSSIKESKUS:
      return EventTagType.SPORTS
    case KnownEventDomain.PIRKKALA:
      return EventTagType.ART
    case KnownEventDomain.PLEVNA:
      return EventTagType.ART
    case KnownEventDomain.PMO:
      return EventTagType.MUSIC
    case KnownEventDomain.POSTIMUSEO:
      return EventTagType.CULTURE
    case KnownEventDomain.PUOTI:
      return EventTagType.CULTURE
    case KnownEventDomain.RIENTOLA:
      return EventTagType.FOOD
    case KnownEventDomain.SC_CLASSIC:
      return EventTagType.SPORTS
    case KnownEventDomain.SITES_TUNI:
      return EventTagType.FOR_KIDS
    case KnownEventDomain.SOINTU_SENIORI_PALVELUT:
      return EventTagType.SENIORS
    case KnownEventDomain.STEEL_BODY:
      return EventTagType.SPORTS
    case KnownEventDomain.TAMPERE:
      return EventTagType.FOR_KIDS
    case KnownEventDomain.TAMPEREEN_OPPAAT:
      return EventTagType.SIGHTSEEING
    case KnownEventDomain.TAMPERE_SEURAKUNNAT:
      return EventTagType.RELIGION
    case KnownEventDomain.TAMPERE_TAIDEMUSEO:
      return EventTagType.ART
    case KnownEventDomain.TAMPEREEN_TARINATEATTERI:
      return EventTagType.CULTURE
    case KnownEventDomain.TAMPERE_FILHARMONIA:
      return EventTagType.MUSIC
    case KnownEventDomain.TANSSIMANIA:
      return EventTagType.MUSIC
    case KnownEventDomain.TANSSITEATTERI_MD:
      return EventTagType.ART
    case KnownEventDomain.TAPAHTUMAT_TAMPERE:
      return null
    case KnownEventDomain.TICKETMASTER:
      return EventTagType.MUSIC
    case KnownEventDomain.TIKETTI:
      return EventTagType.MUSIC
    case KnownEventDomain.TIKTOK:
      return EventTagType.SCIENCE
    case KnownEventDomain.TREDU:
      return EventTagType.OUTDOOR
    case KnownEventDomain.TRE_FINLAND:
      return EventTagType.SEMINAR
    case KnownEventDomain.TTT_TEATTERI:
      return EventTagType.CULTURE
    case KnownEventDomain.TUKKA_TEATTERI:
      return EventTagType.CULTURE
    case KnownEventDomain.TYOVAENMUSEO:
      return EventTagType.CULTURE
    case KnownEventDomain.ULKOPAKOPELI:
      return EventTagType.OUTDOOR
    case KnownEventDomain.VAPRIIKKI:
      return EventTagType.CULTURE
    case KnownEventDomain.VERTAISTERVARIT:
      return EventTagType.SEMINAR
    case KnownEventDomain.VIMMART:
      return EventTagType.SEMINAR
    case KnownEventDomain.VIOLA_KOTI:
      return EventTagType.FREE
    case KnownEventDomain.VOIMAA_METSASTA:
      return EventTagType.OUTDOOR
    case KnownEventDomain.YOSTAJA:
      return EventTagType.FOR_KIDS
  }
  return null
}

const tagLocations = (locations: Array<EventApiLocation>) => {
  let tags: Array<EventTagType> = []
  const addresses = _.flatten(locations).map((location) => {
    const matches = addressRegex.exec(location.address)
    return matches ? matches[0].toLowerCase() : null
  })
  addresses.forEach((address) => {
    tags = tags.concat(getAddressTags(address as KnownAddress))
  })
  return tags
}

const getAddressTags = (address: KnownAddress): Array<EventTagType> => {
  switch (address) {
    case KnownAddress.AHAA_TEATTERI:
      return [EventTagType.FOR_KIDS]
    case KnownAddress.AHLMANINTIE_63:
      return [EventTagType.CULTURE]
    case KnownAddress.AKERLUNDINKATU_6_200:
      return [EventTagType.ART]
    case KnownAddress.ALEKSANTERIN_KIRKKO:
      return [EventTagType.RELIGION]
    case KnownAddress.ARTTELI_KUMPPANUUSYHDISTYS_RY:
      return [EventTagType.FREE]
    case KnownAddress.AVANT_CENTER_PIHA_ALUE:
      return [EventTagType.SPORTS]
    case KnownAddress.BAR_IHKUN_TILOISSA:
      return [EventTagType.SEMINAR]
    case KnownAddress.BLAK_BOKS:
      return [EventTagType.SPORTS]
    case KnownAddress.F_E_SILLANPAAN_KATU_9:
      return [EventTagType.MUSIC]
    case KnownAddress.FACTORY_HALLI:
      return [EventTagType.MUSIC]
    case KnownAddress.FEDERLEYNKATU_19:
      return [EventTagType.OUTDOOR]
    case KnownAddress.FRENCKELLINAUKIO:
      return [EventTagType.OUTDOOR]
    case KnownAddress.G_LIVELAB_TAMPERE:
      return [EventTagType.MUSIC]
    case KnownAddress.GALLERIA_2:
      return [EventTagType.ART]
    case KnownAddress.GASTROPUB_NORDIC:
      return [EventTagType.FOOD]
    case KnownAddress.HALLA_NAYTTAMO:
      return [EventTagType.ART]
    case KnownAddress.HAMEENKYRON_KIRKKO:
      return [EventTagType.RELIGION, EventTagType.MUSIC]
    case KnownAddress.HAMEENPUISTO_44:
      return [EventTagType.FREE]
    case KnownAddress.HAMMARENINKATU_5:
      return [EventTagType.FREE]
    case KnownAddress.HARKITIE_6:
      return [EventTagType.SEMINAR]
    case KnownAddress.HATANPAAN_KOULU:
      return [EventTagType.MUSIC]
    case KnownAddress.HATANPAAN_VALTATIE_1:
      return [EventTagType.ART]
    case KnownAddress.HERVANNAN_KIRJASTO:
      return [EventTagType.FREE]
    case KnownAddress.HERVANNAN_UIMAHALLI:
      return [EventTagType.SPORTS]
    case KnownAddress.HERVANNAN_UIMAHALLIN_KUNTOSALI:
      return [EventTagType.SPORTS]
    case KnownAddress.HERVANNAN_VAPAA_AIKAKESKUS:
      return [EventTagType.SPORTS]
    case KnownAddress.HONO_BAARI:
      return [EventTagType.MUSIC]
    case KnownAddress.HOTELLI_WALTIKKA:
      return [EventTagType.MUSIC]
    case KnownAddress.IDEAPARKINKATU_4:
      return [EventTagType.SPORTS]
    case KnownAddress.IKAALINEN_SPA_ARENA:
      return [EventTagType.MUSIC]
    case KnownAddress.IKAALINEN_SPA_KYROS_SALI:
      return [EventTagType.MUSIC]
    case KnownAddress.IKAALISTEN_KYLPYLA:
      return [EventTagType.MUSIC]
    case KnownAddress.IKAALISTEN_SPA_RESORT:
      return [EventTagType.MUSIC]
    case KnownAddress.ILMAILUNKATU_20:
      return [EventTagType.SEMINAR]
    case KnownAddress.ITAINENKATU_8:
      return [EventTagType.FOOD]
    case KnownAddress.ITSENAINISYYDENKATU_21_B:
      return [EventTagType.FOOD]
    case KnownAddress.JOUKAHAISENKATU_7_B:
      return [EventTagType.SPORTS]
    case KnownAddress.KANGASALA_TALO:
      return [EventTagType.MUSIC]
    case KnownAddress.KANGASALAN_KIRKKO:
      return [EventTagType.MUSIC]
    case KnownAddress.KAUKAJARVEN_KIRJASTO:
      return [EventTagType.FOR_KIDS]
    case KnownAddress.KAUKAJARVEN_VAPAA_AIKATALO:
      return [EventTagType.SPORTS]
    case KnownAddress.KAUPIN_JALKAPALLOSTADION:
      return [EventTagType.SPORTS]
    case KnownAddress.KAUPPAKATU_10:
      return [EventTagType.MUSIC]
    case KnownAddress.KAUPPI_SPORTS_CENTER:
      return [EventTagType.FOR_KIDS]
    case KnownAddress.KERHOLA:
      return [EventTagType.MUSIC]
    case KnownAddress.KESKUSTORI:
      return [EventTagType.OUTDOOR]
    case KnownAddress.KESKUSTORI_2:
      return [EventTagType.SIGHTSEEING]
    case KnownAddress.KESKUSTORIN_VANHA_KIRKKO:
      return [EventTagType.RELIGION, EventTagType.SENIORS]
    case KnownAddress.KIRJASTO_LEIJAN_MONITOIMITILA:
      return [EventTagType.SEMINAR]
    case KnownAddress.KOILLISKESKUKSEN_KIRJASTO:
      return [EventTagType.FOR_KIDS, EventTagType.MUSIC]
    case KnownAddress.KOIVISTONKYLAN_KIRJASTO:
      return [EventTagType.FOR_KIDS, EventTagType.MUSIC]
    case KnownAddress.KOSKELAN_KOULUKESKUKSEN_LIIKUNTASALI:
      return [EventTagType.FOR_KIDS, EventTagType.MUSIC]
    case KnownAddress.KOUKKUNIEMEN_KIRJASTO:
      return [EventTagType.FOR_KIDS]
    case KnownAddress.KOUKKUNIEMEN_VANHAINKOTI:
      return [EventTagType.RELIGION, EventTagType.SENIORS]
    case KnownAddress.KULTTUURIKESKUS_MAANALAINEN:
      return [EventTagType.CULTURE]
    case KnownAddress.KULTTUURIKESKUS_PIIPOO:
      return [EventTagType.FOR_KIDS]
    case KnownAddress.KULTTUURITALO_JAATSI:
      return [EventTagType.ART]
    case KnownAddress.KULTTUURITALO_LAIKKU:
      return [EventTagType.MUSIC]
    case KnownAddress.KUNINKAANKATU_2:
      return [EventTagType.ART]
    case KnownAddress.KUNTOKATU_17:
      return [EventTagType.OUTDOOR, EventTagType.FREE]
    case KnownAddress.KUUSELAN_LAHITORI:
      return [EventTagType.FOR_KIDS, EventTagType.SPORTS]
    case KnownAddress.KYLLIKINKATU_9:
      return [EventTagType.FOOD, EventTagType.FOR_KIDS, EventTagType.SEMINAR]
    case KnownAddress.LAIKUNLAVA:
      return [EventTagType.MUSIC]
    case KnownAddress.KYTTALAN_LAHITORI:
      return [EventTagType.SENIORS, EventTagType.SPORTS]
    case KnownAddress.LAPINTIE_3A:
      return [EventTagType.CULTURE]
    case KnownAddress.LAPLAND_HOTELS_ARENA:
      return [EventTagType.CULTURE]
    case KnownAddress.LASTENKULTTUURIKESKUS_RULLA:
      return [EventTagType.FOR_KIDS, EventTagType.ART]
    case KnownAddress.LAUKONTORI_12:
      return [EventTagType.MUSIC, EventTagType.ART]
    case KnownAddress.LENIN_MUSEO:
      return [EventTagType.CULTURE, EventTagType.SEMINAR]
    case KnownAddress.MANTTAALITALO:
      return [EventTagType.CULTURE]
    case KnownAddress.LIELAHDEN_KIRJASTO:
      return [EventTagType.FREE, EventTagType.CULTURE, EventTagType.SEMINAR]
    case KnownAddress.MARIANKATU_40:
      return [EventTagType.ART, EventTagType.FREE]
    case KnownAddress.MARTTILANKATU_14:
      return [EventTagType.ART]
    case KnownAddress.MAAILMAN_AINOA_MUUMIMUSEO:
      return [EventTagType.FOR_KIDS, EventTagType.CULTURE]
    case KnownAddress.MESSUKYLAN_KIRJASTO:
      return [EventTagType.SEMINAR, EventTagType.ART]
    case KnownAddress.MESSUKYLAN_KIRKKO:
      return [EventTagType.FOR_KIDS, EventTagType.ART, EventTagType.RELIGION]
    case KnownAddress.MUSTALAHTI:
      return [EventTagType.OUTDOOR]
    case KnownAddress.MUSTANLAHDENKATU_22:
      return [EventTagType.MUSIC, EventTagType.FOR_KIDS]
    case KnownAddress.MUUMIMUSEO:
      return [EventTagType.FREE, EventTagType.ART, EventTagType.CULTURE]
    case KnownAddress.NAASHALLI:
      return [EventTagType.SPORTS]
    case KnownAddress.NASILINNANKATU_26:
      return [EventTagType.RELIGION, EventTagType.SENIORS]
    case KnownAddress.MUSEO_MILAVIDA:
      return [EventTagType.ART]
    case KnownAddress.MUSEOKESKUS_VAPRIIKKI:
      return [EventTagType.FOR_KIDS, EventTagType.ART]
    case KnownAddress.NEKALAN_KIRJASTO:
      return [EventTagType.FOR_KIDS, EventTagType.FREE]
    case KnownAddress.OLYMPIA:
      return [EventTagType.MUSIC]
    case KnownAddress.NOKIANTIE_150:
      return [EventTagType.SPORTS, EventTagType.OUTDOOR]
    case KnownAddress.NOKIA_ARENA:
      return [EventTagType.MUSIC, EventTagType.ART]
    case KnownAddress.ONE_KRS_MONITOIMI:
      return [EventTagType.SENIORS, EventTagType.FREE]
    case KnownAddress.PAAKIRJASTO_METSO:
      return [EventTagType.SEMINAR, EventTagType.FREE]
    case KnownAddress.PAAVOLANTIE_4:
      return [EventTagType.FOR_KIDS, EventTagType.MUSIC, EventTagType.ART]
    case KnownAddress.PAAKIRJASTO_METSON_EDUSTA:
      return [EventTagType.OUTDOOR, EventTagType.FOR_KIDS]
    case KnownAddress.PARKANON_KIRKKO:
      return [EventTagType.MUSIC, EventTagType.RELIGION]
    case KnownAddress.PENKOLAMMINTIE_124:
      return [EventTagType.OUTDOOR, EventTagType.SIGHTSEEING, EventTagType.FOOD]
    case KnownAddress.PARKANON_URHEILUTALO:
      return [EventTagType.MUSIC]
    case KnownAddress.PESA_LASNAOLON_YHTEISO:
      return [EventTagType.FREE]
    case KnownAddress.PIRKANMAAN_MUISTIYHDISTYS_RY:
      return [EventTagType.SEMINAR]
    case KnownAddress.PISPALAN_KIRJASTO:
      return [EventTagType.ART]
    case KnownAddress.PISPALAN_KIRKKO:
      return [EventTagType.MUSIC]
    case KnownAddress.PISPAN_LAHITORI:
      return [EventTagType.ART]
    case KnownAddress.POURUNTIE_1242:
      return [EventTagType.FOR_KIDS]
    case KnownAddress.POHJOLAN_LAHITORI:
      return [EventTagType.ART]
    case KnownAddress.PUB_KOLO:
      return [EventTagType.MUSIC]
    case KnownAddress.PUUTARHAKATU_1:
      return [EventTagType.MUSIC]
    case KnownAddress.PUUTARHAKATU_4:
      return [EventTagType.RELIGION, EventTagType.CULTURE, EventTagType.FOOD]
    case KnownAddress.PUUTARHAKATU_34:
      return [EventTagType.ART]
    case KnownAddress.PYHAJARVENKATU_5B:
      return [EventTagType.FOR_KIDS, EventTagType.FREE]
    case KnownAddress.PYHAJARVENKATU_10:
      return [EventTagType.FREE]
    case KnownAddress.PUNKALAITUMEN_KIRKKO:
      return [EventTagType.MUSIC, EventTagType.RELIGION]
    case KnownAddress.PYHAN_BIRGITAN_KIRKKO:
      return [EventTagType.MUSIC, EventTagType.FOR_KIDS]
    case KnownAddress.PYYNIKKISALI:
      return [EventTagType.MUSIC, EventTagType.FOR_KIDS]
    case KnownAddress.PYYNIKIN_UIMAHALLI:
      return [EventTagType.SPORTS]
    case KnownAddress.PYYNIKINTIE_9:
      return [EventTagType.RELIGION, EventTagType.FREE, EventTagType.SENIORS]
    case KnownAddress.PYYNIKIN_PALLOILUHALLI:
      return [EventTagType.SPORTS]
    case KnownAddress.RATAPIHANKATU_37:
      return [EventTagType.FREE]
    case KnownAddress.RATAPIHANKATU_54:
      return [EventTagType.OUTDOOR, EventTagType.CULTURE]
    case KnownAddress.RAHOLAN_LIIKUNTAKESKUS:
      return [EventTagType.SPORTS]
    case KnownAddress.RATINA_STADION:
      return [EventTagType.SPORTS, EventTagType.OUTDOOR, EventTagType.FREE]
    case KnownAddress.RATINAN_STADION:
      return [EventTagType.SPORTS]
    case KnownAddress.RATINANNIEMEN_FESTIVAALIALUE:
      return [EventTagType.MUSIC]
    case KnownAddress.RATINANNIEMEN_PUISTO:
      return [EventTagType.MUSIC]
    case KnownAddress.RATINANNIEMEN_TAPAHTUMAPUISTO:
      return [EventTagType.MUSIC]
    case KnownAddress.RAUTAJARVEN_RAUTAHOVI:
      return [EventTagType.MUSIC]
    case KnownAddress.SAASTAJANKATU_16:
      return [EventTagType.FOR_KIDS, EventTagType.MUSIC]
    case KnownAddress.SAMMONKATU_2:
      return [EventTagType.FREE, EventTagType.FOOD]
    case KnownAddress.SAMPOLA:
      return [EventTagType.SEMINAR, EventTagType.FREE]
    case KnownAddress.RAVINTOLA_KRUUNA_KLAAVA:
      return [EventTagType.MUSIC]
    case KnownAddress.SAAKSMAEN_KIRKKO:
      return [EventTagType.MUSIC]
    case KnownAddress.SAMPOLAN_KIRJASTO:
      return [EventTagType.FOR_KIDS, EventTagType.FREE]
    case KnownAddress.SATAKUNNANKATU_18:
      return [EventTagType.ART, EventTagType.FREE]
    case KnownAddress.TALLIPIHA:
      return [EventTagType.OUTDOOR, EventTagType.SIGHTSEEING, EventTagType.FOOD]
    case KnownAddress.TAMMELAKESKUS:
      return [EventTagType.FOOD, EventTagType.FREE]
    case KnownAddress.SORIN_SIRKUS:
      return [EventTagType.FOR_KIDS, EventTagType.ART]
    case KnownAddress.TAMPERE:
      return [EventTagType.OUTDOOR, EventTagType.FREE]
    case KnownAddress.SPIRAL_HALLI:
      return [EventTagType.SPORTS]
    case KnownAddress.SUOMEN_MUSIIKKITEATTERI:
      return [EventTagType.MUSIC]
    case KnownAddress.SUUPANTORI_2:
      return [EventTagType.RELIGION, EventTagType.SEMINAR]
    case KnownAddress.TAIDEKESKUS_MALTINRANTA:
      return [EventTagType.ART]
    case KnownAddress.TAMPERE_TALO:
      return [EventTagType.MUSIC]
    case KnownAddress.LIELAHDEN_KARTANO_1_KRS:
      return [EventTagType.ART]
    case KnownAddress.SORELLA_CELLAR_CLUB:
      return [EventTagType.CULTURE]
    case KnownAddress.TAMPEREEN_JAAHALLI:
      return [EventTagType.SPORTS]
    case KnownAddress.TAMPEREEN_KAUPPAHALLI:
      return [EventTagType.FOOD, EventTagType.FREE, EventTagType.CULTURE]
    case KnownAddress.TAMPEREEN_KAUPUNGINARKISTO:
      return [EventTagType.FREE, EventTagType.CULTURE]
    case KnownAddress.TAMPEREEN_KOMEDIATEATTERI:
      return [EventTagType.CULTURE]
    case KnownAddress.ORIGINAL_SOKOS_HOTEL_ILVES:
      return [EventTagType.MUSIC, EventTagType.FOOD]
    case KnownAddress.RAVINTOLATEATTERI_TAMPEREEN_KOMEDIATEATTERI:
      return [EventTagType.CULTURE]
    case KnownAddress.TAMPEREEN_KONSERVATORIO:
      return [EventTagType.SPORTS]
    case KnownAddress.TAMPEREEN_KOMEDIATEATTERI_PAANAYTTAMO:
      return [EventTagType.CULTURE]
    case KnownAddress.TAMPEREEN_KOMEDIATEATTERI_RAVINTOLATEATTERI:
      return [EventTagType.CULTURE]
    case KnownAddress.TAMPEREEN_TAIDEMUSEO:
      return [EventTagType.CULTURE]
    case KnownAddress.TAMPEREEN_STADION:
      return [EventTagType.SPORTS]
    case KnownAddress.TAMPEREEN_TEATTERI:
      return [EventTagType.CULTURE, EventTagType.FOR_KIDS]
    case KnownAddress.TAMPEREEN_TUOMIOKIRKKO:
      return [EventTagType.MUSIC]
    case KnownAddress.TAMPEREEN_UINTIKESKUKSEN_KUNTOSALI:
      return [EventTagType.SPORTS]
    case KnownAddress.TAMPEREEN_UINTIKESKUS:
      return [EventTagType.SPORTS]
    case KnownAddress.TAMPEREEN_YLIOPIPPILASTEATTERI:
      return [EventTagType.MUSIC]
    case KnownAddress.TAMPEREEN_YLIOPISTON_JUHLASALI:
      return [EventTagType.MUSIC]
    case KnownAddress.TAMPEREEN_YO_TALO:
      return [EventTagType.MUSIC]
    case KnownAddress.TANSSITEATTERI_MD:
      return [EventTagType.ART]
    case KnownAddress.TAVARA_ASEMA:
      return [EventTagType.MUSIC]
    case KnownAddress.TEERENPELI:
      return [EventTagType.CULTURE]
    case KnownAddress.TEATTERI_MUKAMAS:
      return [EventTagType.FOR_KIDS, EventTagType.CULTURE]
    case KnownAddress.TELAKKA:
      return [EventTagType.MUSIC]
    case KnownAddress.TEATTERI_TELAKKA:
      return [EventTagType.ART]
    case KnownAddress.TEHTAAN_KENTTA:
      return [EventTagType.SPORTS]
    case KnownAddress.TREDU:
      return [EventTagType.OUTDOOR, EventTagType.SEMINAR]
    case KnownAddress.TESOMAN_JAAHALLIN_KUNTOSALI:
      return [EventTagType.SPORTS]
    case KnownAddress.TESOMAN_KIRJASTO:
      return [EventTagType.FOR_KIDS, EventTagType.FREE]
    case KnownAddress.TESOMAN_PALLOILUHALLI:
      return [EventTagType.SPORTS]
    case KnownAddress.TESOMAN_UIMAHALLI:
      return [EventTagType.SPORTS]
    case KnownAddress.TESOMANKATU_33:
      return [EventTagType.SEMINAR, EventTagType.SPORTS]
    case KnownAddress.TT_PAANAYTTAMON_RAVINTOLA:
      return [EventTagType.FOOD]
    case KnownAddress.TUKKATEATTERI:
      return [EventTagType.ART, EventTagType.CULTURE]
    case KnownAddress.TTT_KLUBI:
      return [EventTagType.CULTURE]
    case KnownAddress.TTT_KELLARITEATTERI:
      return [EventTagType.ART]
    case KnownAddress.TULLIKAMARIN_AUKIO_2:
      return [EventTagType.MUSIC, EventTagType.FREE]
    case KnownAddress.TULLIKAMARIN_KLUBI:
      return [EventTagType.MUSIC]
    case KnownAddress.VARJOBAARI:
      return [EventTagType.MUSIC]
    case KnownAddress.TULLIKAMARIN_PAKKAHUONE:
      return [EventTagType.MUSIC]
    case KnownAddress.TUOMIOKIRKONKATU_1:
      return [EventTagType.SEMINAR]
    case KnownAddress.TUULENSUUN_PALATSI:
      return [EventTagType.FOOD, EventTagType.CULTURE]
    case KnownAddress.KUSTAA_KOLMANNEN_TIE_75:
      return [EventTagType.FOR_KIDS]
    case KnownAddress.TTT_SUURI_NAYTTAMO:
      return [EventTagType.CULTURE]
    case KnownAddress.TYOVAENMUSEO_WERSTAS:
      return [EventTagType.MUSIC, EventTagType.SENIORS]
    case KnownAddress.URAMONKATU_9:
      return [EventTagType.ART]
    case KnownAddress.URHEILUTIE_5:
      return [EventTagType.FOR_KIDS, EventTagType.FREE, EventTagType.OUTDOOR]
    case KnownAddress.VALKEAKOSKEN_TEATTERI:
      return [EventTagType.ART]
    case KnownAddress.VALSSIPADONRAITTI_3:
      return [EventTagType.SCIENCE, EventTagType.SEMINAR]
    case KnownAddress.VANHA_KIRKKO:
      return [EventTagType.SEMINAR, EventTagType.MUSIC, EventTagType.RELIGION]
    case KnownAddress.VANHA_RAIKKA:
      return [EventTagType.SEMINAR]
    case KnownAddress.VASTAVIRTA_KLUBI:
      return [EventTagType.MUSIC]
    case KnownAddress.WREDE_SALI:
      return [EventTagType.MUSIC]
    case KnownAddress.YLIOPISTONKATU_55:
      return [EventTagType.MUSIC]
    case KnownAddress.YLIOPISTONKATU_58:
      return [EventTagType.ART]
    case KnownAddress.YLIOPISTONKATU_60:
      return [EventTagType.ART]
    case KnownAddress.TAMPEREEN_MESSU_JA_URHEILUKESKU:
      return [EventTagType.SEMINAR]
    case KnownAddress.TAMPEREEN_MESSU_JA_URHEILUKESKUS_2:
      return [EventTagType.SEMINAR]
    case KnownAddress.TAMPEREEN_MESSU_JA_URHEILUKESKUS_3:
      return [EventTagType.ART, EventTagType.SEMINAR]
    case KnownAddress.TTT_EINO_SALMELAISEN_NAYTTAMO:
      return [EventTagType.ART]
    case KnownAddress.SERLACHIUS_MUSEO_GOSTAN_TAKANA_RANNASSA:
      return [EventTagType.SPORTS, EventTagType.OUTDOOR]
    case KnownAddress.KNUUTILAN_KARTANO_LUKKISALMENTIE49_37200_SIURO:
      return [EventTagType.OUTDOOR, EventTagType.FREE]
    case KnownAddress.ADDRESS_33100:
      return [EventTagType.ART]
    case KnownAddress.ARTCENTER_MALTINRANTA:
      return [EventTagType.ART]
    case KnownAddress.ADDRESS_33101:
      return [EventTagType.SEMINAR]
    case KnownAddress.ADDRESS_33180:
      return [EventTagType.RELIGION, EventTagType.SENIORS]
    case KnownAddress.ADDRESS_33210:
      return [EventTagType.CULTURE]
    case KnownAddress.ADDRESS_33820:
      return [EventTagType.MUSIC]
    case KnownAddress.CHILDRENS_CULTURAL_CENTRE_RULLA:
      return [EventTagType.FOR_KIDS, EventTagType.FREE, EventTagType.MUSIC]
    case KnownAddress.GALLEN_KALLELANKATU_1:
      return [EventTagType.ART]
    case KnownAddress.HAMEENKATU_23:
      return [EventTagType.MUSIC, EventTagType.FOOD]
    case KnownAddress.JUHLATALONKATU_4:
      return [EventTagType.SENIORS, EventTagType.FREE]
    case KnownAddress.KOIVUMAENTIE_2:
      return [EventTagType.SEMINAR, EventTagType.SCIENCE]
    case KnownAddress.KUNINKAANKATU_4:
      return [EventTagType.MUSIC, EventTagType.OUTDOOR, EventTagType.ART]
    case KnownAddress.KURUNTIE_12:
      return [EventTagType.SEMINAR]
    case KnownAddress.MOOMIN_MUSEUM:
      return [EventTagType.ART, EventTagType.FOR_KIDS]
    case KnownAddress.NUOLIALANTIE_46:
      return [EventTagType.FOR_KIDS]
    case KnownAddress.POHJOLANKATU_25:
      return [EventTagType.ART]
    case KnownAddress.SIMOLANKATU_4:
      return [EventTagType.ART]
    case KnownAddress.TAMPERE_CITY_ARCHIVES:
      return [EventTagType.SIGHTSEEING, EventTagType.FREE, EventTagType.CULTURE]
    case KnownAddress.TAMPERE_HALL:
      return [EventTagType.MUSIC]
    case KnownAddress.TEHDASKARTANONKATU_28:
      return [EventTagType.ART]
    case KnownAddress.TUOMIOKIRKONKATU_22:
      return [EventTagType.SENIORS, EventTagType.SPORTS]
    case KnownAddress.VOIMAKATU_11:
      return [EventTagType.ART, EventTagType.FREE]
  }
  return []
}

export default getTags
