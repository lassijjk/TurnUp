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
}

export interface EventLocationData {
  id?: string
  name?: string
  latitude: number
  longitude: number
}

export type EventObj = {
  id: string
  _id: string
  creationDate: string
  modificationDate: string
  name: string
  startTime: string
  endTime: string
  locations: Array<EventApiLocation>
  dates: Array<EventApiDate>
  links: Array<EventApiLink>
  sourceName: string
  description: string
  price: number | null
  images: Array<EventApiImage>
  imageCopyrights: string | null
  imageAt: string | null
  language: string
  siteName: string
  categories: Array<EventApiCategory | FinnishCategoryName>
  topics: Array<EventApiTopic | FinnishTopicName>
  targets: Array<EventApiTarget | FinnishTargetName>
  tags: Array<EventApiTag | FinnishTagName>
  url: string
  areas: Array<EventApiArea>
}

export type EventApiLocation = {
  address: string
  page_id: number | null
  geoIndex: Array<number>
  location_id: string
}

export type EventApiDate = {
  end: string
  start: string
  isSoldOut: boolean
}

export type EventApiLink = {
  url: string
  name: string
}

export type EventApiImage = {
  url: string
  type: string
  width: number
  height: number
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
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
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
  WORK_AND_ENTREPRENEUR = 'Work and entrepreneur',
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
  WORK_AND_ENTREPRENEUR = 'Työ ja yrittäminen',
}

export enum EventApiTarget {
  ADULTS = 'Adults',
  BABIES_SMALL_CHILDREN = 'Babies and small children',
  MIDDLE_SCHOOLERS = 'Middle schoolers',
  PRIMARY_SCHOOL_CHILDREN = 'Primary school children',
  SENIORS = 'Seniors',
  YOUNG_PEOPLE = 'Young people',
}

export enum FinnishTargetName {
  ADULTS = 'Aikuiset',
  BABIES_SMALL_CHILDREN = 'Vauvat ja pienet lapset',
  MIDDLE_SCHOOLERS = 'Yläkouluikäiset',
  PRIMARY_SCHOOL_CHILDREN = 'Alakouluikäiset',
  SENIORS = 'Seniorit',
  YOUNG_PEOPLE = 'Nuoret',
}

export enum EventApiTag {
  ACCESSIBLE = 'Accessible',
  FREE = 'Free',
  VIRTUAL = 'Virtual',
}

export enum FinnishTagName {
  ACCESSIBLE = 'Esteetön',
  FREE = 'Maksuton',
  VIRTUAL = 'Virtuaali',
}

export type EventApiArea = {
  name: string
}

export enum KnownEventDomain {
  ANNE_OLLGREN = 'anne-ollgren.webnode.fi',
  ART_FROM_THE_UNDERGROUND = 'artfromtheunderground.fi',
  ARTTELI = 'artteli.fi',
  EKOKUMPPANIT = 'ekokumppanit.fi',
  ERIMENU = 'erimenu.fi',
  FACEBOOK = 'facebook.com',
  FB = 'fb.me',
  FUNGUS = 'fungus.yhdistysavain.fi',
  GAMES_AS_ART_CENTER = 'gamesasartcenter.com',
  G_LIVELAB = 'glivelab.fi',
  ISOT_KONEET_KESKUTORILLA = 'isotkoneetkeskustorilla.fi',
  KOMEDIATEATTERI = 'komediateatteri.fi',
  KOTAE = 'kotae.fi',
  KRISTILLISET_IKINUORET = 'Kristilliset Ikinuoret',
  KRISTILLINEN_ELAKEYHDISTYS = 'Kristilllinen Eläkeläisyhdistys Ikinuoret ry Tampere',
  KULTTUURI_PIIPOO = 'kulttuuripiipoo.fi',
  LAULUSISKOT = 'laulusiskot.fi',
  LAULUTUNNIT_TAMPERE = 'laulutunnittampere.fi',
  LIISA_AHLFORS = 'liisaahlfors.fi',
  LIPPU = 'lippu.fi',
  LIPPUAGENTTI = 'lippuagentti.fi',
  LIVE_NATION = 'livenation.fi',
  MALTIN_RANTA = 'maltinranta.fi',
  MIELEN = 'mielen.fi',
  MINUN_AANENI = 'minunaaneni.fi',
  MOBILIA = 'mobilia.fi',
  MOUNTAIN_WARRIORS = 'mountainwarriors.fi',
  MUSEUM_ILAVIDA = 'museomilavida.fi',
  MUUMIMUSEO = 'muumimuseo.fi',
  NOKIA_ARENA = 'nokiaarena.livex.fi',
  OPER_ART = 'operart.fi',
  OPISTOPALVELUT = 'uusi.opistopalvelut.fi',
  PARASTA_LAPSILLE = 'tapahtumat-parastalapsille-fi.pwire.fi',
  PHOTO_FESTIVAL = 'photofestival.fi',
  PILVIKANAVA = 'uusi.pilvikanava.fi',
  PIRAVH = 'piravh.fi',
  PIRKANMAAN_KIINTEISTOLIITTO = 'pirkanmaa.kiinteistoliitto.fi',
  PIRKANMAAN_ALLERGIA = 'pirkanmaanallergia.fi',
  PIRKANMAAN_TANSSIKESKUS = 'pirkanmaantanssinkeskus.fi',
  PIRKKALA = 'pirkkala.fi',
  PLEVNA = 'plevna.fi',
  PMO = 'pmo.fi',
  POSTIMUSEO = 'postimuseo.fi',
  PUOTI = 'puoti.nuorisoseurat.fi',
  RIENTOLA = 'rientola.fi',
  SC_CLASSIC = 'scclassic.com',
  SITES_TUNI = 'sites.tuni.fi',
  SOINTU_SENIORI_PALVELUT = 'sointusenioripalvelut.fi',
  STEEL_BODY = 'steelbody.fi',
  TAMPERE = 'tampere.fi',
  TAMPEREEN_OPPAAT = 'tampereenoppaat.fi',
  TAMPERE_SEURAKUNNAT = 'tampereenseurakunnat.fi',
  TAMPERE_TAIDEMUSEO = 'tampereentaidemuseo.fi',
  TAMPEREEN_TARINATEATTERI = 'tampereentarinateatteri.fi',
  TAMPERE_FILHARMONIA = 'tamperefilharmonia.fi',
  TAMPERE_MISSIO = 'tamperemissio.fi',
  TANSSIMANIA = 'tanssimania.fi',
  TANSSITEATTERI_MD = 'tanssiteatterimd.fi',
  TAPAHTUMAT_TAMPERE = 'tapahtumat.tampere.fi',
  TICKETMASTER = 'ticketmaster.fi',
  TIKETTI = 'tiketti.fi',
  TIKTOK = 'tiktok.com',
  TREDU = 'tredu.fi',
  TRE_FINLAND = 'trefinland.fi',
  TTT_TEATTERI = 'ttt-teatteri.fi',
  TUKKA_TEATTERI = 'tukkateatteri.fi',
  TYOVAENMUSEO = 'tyovaenmuseo.fi',
  ULKOPAKOPELI = 'ulkopakopeli.com',
  VAPRIIKKI = 'vapriikki.fi',
  VERTAISTERVARIT = 'vertaistervarit.fi',
  VIMMART = 'vimmart.fi',
  VIOLA_KOTI = 'viola-koti.fi',
  VOIMAA_METSASTA = 'voimaametsasta.fi',
  YOSTAJA = 'yostaja.fi',
}

export enum KnownAddress {
  ADDRESS_33100 = '33100',
  ADDRESS_33101 = '33101',
  ADDRESS_33180 = '33180',
  ADDRESS_33210 = '33210',
  ADDRESS_33820 = '33820',
  AHAA_TEATTERI = 'ahaa teatteri',
  AHLMANINTIE_63 = 'ahlmanintie 63',
  AKERLUNDINKATU_6_200 = 'åkerlundinkatu 6',
  ALEKSANTERIN_KIRKKO = 'aleksanterin kirkko',
  ARTCENTER_MALTINRANTA = 'artcenter mältinranta',
  ARTTELI_KUMPPANUUSYHDISTYS_RY = 'artteli-kumppanuusyhdistys ry',
  AVANT_CENTER_PIHA_ALUE = 'avant center piha-alue',
  BAR_IHKUN_TILOISSA = 'bar ihkun tiloissa',
  BLAK_BOKS = 'bläk boks',
  CHILDRENS_CULTURAL_CENTRE_RULLA = "children's cultural centre rulla",
  F_E_SILLANPAAN_KATU_9 = 'f.e. sillanpään katu 9',
  FACTORY_HALLI = 'factory halli',
  FEDERLEYNKATU_19 = 'federleynkatu 19',
  FRENCKELLINAUKIO = 'frenckellinaukio',
  G_LIVELAB_TAMPERE = 'g livelab tampere',
  GALLEN_KALLELANKATU_1 = 'gallen-kallelan katu 1',
  GALLERIA_2 = 'galleria 2',
  GASTROPUB_NORDIC = 'gastropub nordic',
  HAMMARENINKATU_5 = 'hammareninkatu 5',
  HATANPAAN_KOULU = 'hatanpään koulu',
  HATANPAAN_VALTATIE_1 = 'hatanpään valtatie 1',
  HERVANNAN_KIRJASTO = 'hervannan kirjasto',
  HERVANNAN_UIMAHALLI = 'hervannan uimahalli',
  HERVANNAN_UIMAHALLIN_KUNTOSALI = 'hervannan uimahallin kuntosali',
  HERVANNAN_VAPAA_AIKAKESKUS = 'hervannan vapaa-aikakeskus',
  HOTELLI_WALTIKKA = 'hotelli waltikka',
  HALLA_NAYTTAMO = 'hällä-näyttämö',
  HAMEENKYRON_KIRKKO = 'hämeenkyrön kirkko',
  HAMEENKATU_23 = 'hämeenkatu 23',
  HAMEENPUISTO_44 = 'hämeenpuisto 44',
  HARKITIE_6 = 'härkitie 6',
  HONO_BAARI = 'hönö baari',
  IDEAPARKINKATU_4 = 'ideaparkinkatu 4',
  IKAALINEN_SPA_KYROS_SALI = 'ikaalinen spa / kyrös sali',
  IKAALINEN_SPA_ARENA = 'ikaalinen spa arena',
  IKAALISTEN_KYLPYLA = 'ikaalisten kylpylä',
  IKAALISTEN_SPA_RESORT = 'ikaalisten spa & resort',
  ILMAILUNKATU_20 = 'ilmailunkatu 20',
  ITSENAINISYYDENKATU_21_B = 'itsenäisyydenkatu 21 b',
  ITAINENKATU_8 = 'itäinenkatu 8',
  JOUKAHAISENKATU_7_B = 'joukahaisenkatu 7 b',
  JUHLATALONKATU_4 = 'juhlatalonkatu 4',
  KANGASALA_TALO = 'kangasala-talo',
  KANGASALAN_KIRKKO = 'kangasalan kirkko',
  KAUKAJARVEN_KIRJASTO = 'kaukajärven kirjasto',
  KAUKAJARVEN_VAPAA_AIKATALO = 'kaukajärven vapaa-aikatalo',
  KAUPIN_JALKAPALLOSTADION = 'kaupin jalkapallostadion',
  KAUPPAKATU_10 = 'kauppakatu 10',
  KAUPPI_SPORTS_CENTER = 'kauppi sports center',
  KERHOLA = 'kerhola',
  KESKUSTORI = 'keskustori',
  KESKUSTORI_2 = 'keskustori 2',
  KESKUSTORIN_VANHA_KIRKKO = 'keskustorin vanha kirkko',
  KIRJASTO_LEIJAN_MONITOIMITILA = 'kirjasto leijan monitoimitila',
  KNUUTILAN_KARTANO_LUKKISALMENTIE49_37200_SIURO = 'knuutilan kartano lukkisalmentie49 37200 siuro',
  KOILLISKESKUKSEN_KIRJASTO = 'koilliskeskuksen kirjasto',
  KOIVISTONKYLAN_KIRJASTO = 'koivistonkylän kirjasto',
  KOIVUMAENTIE_2 = 'koivumäentie 2',
  KOSKELAN_KOULUKESKUKSEN_LIIKUNTASALI = 'koskelan koulukeskuksen liikuntasali',
  KOUKKUNIEMEN_KIRJASTO = 'koukkuniemen kirjasto',
  KOUKKUNIEMEN_VANHAINKOTI = 'koukkuniemen vanhainkoti',
  KULTTUURIKESKUS_MAANALAINEN = 'kulttuurikeskus maanalainen',
  KULTTUURIKESKUS_PIIPOO = 'kulttuurikeskus piipoo',
  KULTTUURITALO_JAATSI = 'kulttuuritalo jaatsi',
  KULTTUURITALO_LAIKKU = 'kulttuuritalo laikku',
  KUNINKAANKATU_2 = 'kuninkaankatu 2',
  KUNINKAANKATU_4 = 'kuninkaankatu 4',
  KUNTOKATU_17 = 'kuntokatu 17',
  KURUNTIE_12 = 'kuruntie 12',
  KUSTAA_KOLMANNEN_TIE_75 = 'kustaa kolmannen tie 75',
  KUUSELAN_LAHITORI = 'kuuselan lähitori',
  KYLLIKINKATU_9 = 'kyllikinkatu 9',
  KYTTALAN_LAHITORI = 'kyttälän lähitori',
  LAIKUNLAVA = 'laikunlava',
  LAPINTIE_3A = 'lapintie 3a',
  LAPLAND_HOTELS_ARENA = 'lapland hotels arena',
  LASTENKULTTUURIKESKUS_RULLA = 'lastenkulttuurikeskus rulla',
  LAUKONTORI_12 = 'laukontori 12',
  LENIN_MUSEO = 'lenin-museo',
  LIELAHDEN_KARTANO_1_KRS = 'lielahden kartano 1. krs.',
  LIELAHDEN_KIRJASTO = 'lielahden kirjasto',
  MAAILMAN_AINOA_MUUMIMUSEO = 'maailman ainoa muumimuseo',
  MANTTAALITALO = 'manttaalitalo',
  MARIANKATU_40 = 'mariankatu 40',
  MARTTILANKATU_14 = 'marttilankatu 14',
  MESSUKYLAN_KIRJASTO = 'messukylän kirjasto',
  MESSUKYLAN_KIRKKO = 'messukylän kirkko',
  MOOMIN_MUSEUM = 'moomin museum',
  MUSEO_MILAVIDA = 'museo milavida',
  MUSEOKESKUS_VAPRIIKKI = 'museokeskus vapriikki',
  MUSTALAHTI = 'mustalahti',
  MUSTANLAHDENKATU_22 = 'mustanlahdenkatu 22',
  MUUMIMUSEO = 'muumimuseo',
  NEKALAN_KIRJASTO = 'nekalan kirjasto',
  NOKIA_ARENA = 'nokia arena',
  NOKIANTIE_150 = 'nokiantie 150',
  NUOLIALANTIE_46 = 'nuolialantie 46',
  NASILINNANKATU_26 = 'näsilinnankatu 26',
  NAASHALLI = 'nääshalli',
  OLYMPIA = 'olympia',
  ONE_KRS_MONITOIMI = '1krs. monitoimi.',
  ORIGINAL_SOKOS_HOTEL_ILVES = 'original sokos hotel ilves',
  PAAVOLANTIE_4 = 'paavolantie 4',
  PARKANON_KIRKKO = 'parkanon kirkko',
  PARKANON_URHEILUTALO = 'parkanon urheilutalo',
  PENKOLAMMINTIE_124 = 'penkolammintie 124',
  PESA_LASNAOLON_YHTEISO = 'pesä läsnäolon yhteisö',
  PIRKANMAAN_MUISTIYHDISTYS_RY = 'pirkanmaan muistiyhdistys ry',
  PISPALAN_KIRJASTO = 'pispalan kirjasto',
  PISPALAN_KIRKKO = 'pispalan kirkko',
  PISPAN_LAHITORI = 'pispan lähitori',
  POHJOLAN_LAHITORI = 'pohjolan lähitori',
  POHJOLANKATU_25 = 'pohjolankatu 25',
  POURUNTIE_1242 = 'pouruntie 1242',
  PUB_KOLO = 'pub kolo',
  PUNKALAITUMEN_KIRKKO = 'punkalaitumen kirkko',
  PUUTARHAKATU_1 = 'puutarhakatu 1',
  PUUTARHAKATU_34 = 'puutarhakatu 34',
  PUUTARHAKATU_4 = 'puutarhakatu 4',
  PYHAJARVENKATU_10 = 'pyhäjärvenkatu 10',
  PYHAJARVENKATU_5B = 'pyhäjärvenkatu 5b',
  PYHAN_BIRGITAN_KIRKKO = 'pyhän birgitan kirkko',
  PYYNIKIN_PALLOILUHALLI = 'pyynikin palloiluhalli',
  PYYNIKIN_UIMAHALLI = 'pyynikin uimahalli',
  PYYNIKINTIE_9 = 'pyynikintie 9',
  PYYNIKKISALI = 'pyynikkisali',
  PAAKIRJASTO_METSO = 'pääkirjasto metso',
  PAAKIRJASTO_METSON_EDUSTA = 'pääkirjasto metson edusta',
  RAHOLAN_LIIKUNTAKESKUS = 'raholan liikuntakeskus',
  RATAPIHANKATU_37 = 'ratapihankatu 37',
  RATAPIHANKATU_54 = 'ratapihankatu 54',
  RATINA_STADION = 'ratina stadion',
  RATINAN_STADION = 'ratinan stadion',
  RATINANNIEMEN_FESTIVAALIALUE = 'ratinanniemen festivaalialue',
  RATINANNIEMEN_PUISTO = 'ratinanniemen puisto',
  RATINANNIEMEN_TAPAHTUMAPUISTO = 'ratinanniemen tapahtumapuisto',
  RAUTAJARVEN_RAUTAHOVI = 'rautajärven rautahovi',
  RAVINTOLA_KRUUNA_KLAAVA = 'ravintola kruuna & klaava',
  RAVINTOLATEATTERI_TAMPEREEN_KOMEDIATEATTERI = 'ravintolateatteri tampereen komediateatteri',
  SAMMONKATU_2 = 'sammonkatu 2',
  SAMPOLA = 'sampola',
  SAMPOLAN_KIRJASTO = 'sampolan kirjasto',
  SATAKUNNANKATU_18 = 'satakunnankatu 18',
  SERLACHIUS_MUSEO_GOSTAN_TAKANA_RANNASSA = 'serlachius-museo göstan takana rannassa',
  SIMOLANKATU_4 = 'simolankatu 4',
  SORELLA_CELLAR_CLUB = 'sorella cellar club',
  SORIN_SIRKUS = 'sorin sirkus',
  SPIRAL_HALLI = 'spiral-halli',
  SUOMEN_MUSIIKKITEATTERI = 'suomen musiikkiteatteri',
  SUUPANTORI_2 = 'suupantori 2',
  SAAKSMAEN_KIRKKO = 'sääksmäen kirkko',
  SAASTAJANKATU_16 = 'säästäjänkatu 16',
  TAIDEKESKUS_MALTINRANTA = 'taidekeskus mältinranta',
  TALLIPIHA = 'tallipiha',
  TAMMELAKESKUS = 'tammelakeskus',
  TAMPERE = 'tampere',
  TAMPERE_CITY_ARCHIVES = 'tampere city archives',
  TAMPERE_HALL = 'tampere hall',
  TAMPERE_TALO = 'tampere-talo',
  TAMPEREEN_JAAHALLI = 'tampereen jäähalli',
  TAMPEREEN_KAUPPAHALLI = 'tampereen kauppahalli',
  TAMPEREEN_KAUPUNGINARKISTO = 'tampereen kaupunginarkisto',
  TAMPEREEN_KOMEDIATEATTERI = 'tampereen komediateatteri',
  TAMPEREEN_KOMEDIATEATTERI_PAANAYTTAMO = 'tampereen komediateatteri päänäyttämö',
  TAMPEREEN_KOMEDIATEATTERI_RAVINTOLATEATTERI = 'tampereen komediateatteri ravintolateatteri',
  TAMPEREEN_KONSERVATORIO = 'tampereen konservatorio',
  TAMPEREEN_MESSU_JA_URHEILUKESKU = 'tampereen messu- ja urheilukesku',
  TAMPEREEN_MESSU_JA_URHEILUKESKUS_2 = 'tampereen messu- ja urheilukeskus',
  TAMPEREEN_MESSU_JA_URHEILUKESKUS_3 = 'tampereen messu-ja urheilukeskus',
  TAMPEREEN_STADION = 'tampereen stadion',
  TAMPEREEN_TAIDEMUSEO = 'tampereen taidemuseo',
  TAMPEREEN_TEATTERI = 'tampereen teatteri',
  TAMPEREEN_TUOMIOKIRKKO = 'tampereen tuomiokirkko',
  TAMPEREEN_UINTIKESKUKSEN_KUNTOSALI = 'tampereen uintikeskuksen kuntosali',
  TAMPEREEN_UINTIKESKUS = 'tampereen uintikeskus',
  TAMPEREEN_YLIOPISTON_JUHLASALI = 'tampereen yliopiston juhlasali',
  TAMPEREEN_YLIOPIPPILASTEATTERI = 'tampereen ylioppilasteatteri',
  TAMPEREEN_YO_TALO = 'tampereen yo-talo',
  TANSSITEATTERI_MD = 'tanssiteatteri md',
  TAVARA_ASEMA = 'tavara-asema',
  TEATTERI_MUKAMAS = 'teatteri mukamas',
  TEATTERI_TELAKKA = 'teatteri telakka',
  TEERENPELI = 'teerenpeli',
  TEHDASKARTANONKATU_28 = 'tehdaskartanonkatu 28',
  TEHTAAN_KENTTA = 'tehtaan kenttä',
  TELAKKA = 'telakka',
  TESOMAN_JAAHALLIN_KUNTOSALI = 'tesoman jäähallin kuntosali',
  TESOMAN_KIRJASTO = 'tesoman kirjasto',
  TESOMAN_PALLOILUHALLI = 'tesoman palloiluhalli',
  TESOMAN_UIMAHALLI = 'tesoman uimahalli',
  TESOMANKATU_33 = 'tesomankatu 33',
  TREDU = 'tredu',
  TT_PAANAYTTAMON_RAVINTOLA = 'tt päänäyttämön ravintola',
  TTT_EINO_SALMELAISEN_NAYTTAMO = 'ttt eino salmelaisen näyttämö',
  TTT_KELLARITEATTERI = 'ttt kellariteatteri',
  TTT_SUURI_NAYTTAMO = 'ttt suuri näyttämö',
  TTT_KLUBI = 'ttt-klubi',
  TUKKATEATTERI = 'tukkateatteri',
  TULLIKAMARIN_AUKIO_2 = 'tullikamarin aukio 2',
  TULLIKAMARIN_KLUBI = 'tullikamarin klubi',
  TULLIKAMARIN_PAKKAHUONE = 'tullikamarin pakkahuone',
  TUOMIOKIRKONKATU_1 = 'tuomiokirkonkatu 1',
  TUOMIOKIRKONKATU_22 = 'tuomiokirkonkatu 22',
  TUULENSUUN_PALATSI = 'tuulensuun palatsi',
  TYOVAENMUSEO_WERSTAS = 'työväenmuseo werstas',
  URAMONKATU_9 = 'uramonkatu 9',
  URHEILUTIE_5 = 'urheilutie 5',
  VALKEAKOSKEN_TEATTERI = 'valkeakosken teatteri',
  VALSSIPADONRAITTI_3 = 'valssipadonraitti 3',
  VANHA_KIRKKO = 'vanha kirkko',
  VANHA_RAIKKA = 'vanha räikkä',
  VARJOBAARI = 'varjobaari',
  VASTAVIRTA_KLUBI = 'vastavirta-klubi',
  VOIMAKATU_11 = 'voimakatu 11',
  WREDE_SALI = 'wrede-sali',
  YLIOPISTONKATU_55 = 'yliopistonkatu 55',
  YLIOPISTONKATU_58 = 'yliopistonkatu 58',
  YLIOPISTONKATU_60 = 'yliopistonkatu 60',
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  AKERLUNDINKATU_6 = 'åkerlundinkatu 6',
}

export interface SingleEvent {
  id: string
  dates: { end: string; start: string }[]
  description: string
  endTime: string
  image: { url: string; height: string; width: string; type: string }[]
  isFree: boolean
  links: { url: string; name: string }[]
  locations: { address: string; geoIndex: [string, string] }[]
  startTime: string
  topics: Array<EventApiTopic | FinnishTopicName>
  targets: Array<EventApiTarget | FinnishTargetName>
  url: string
  name: string
}
