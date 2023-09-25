
export enum QueryId {
    TODAYS_EVENTS = 'todaysEvents'
}

export enum MaxCacheDuration {
    TODAYS_EVENTS = {h: 1, m: 0, s: 0}
}

export type DurationStamp = {
    h: number;
    m: number;
    s: number
}

export enum TimeInMilliseconds {
    SECOND = 1000,
    MINUTE = 1000 * 60,
    HOUR = 1000 * 60 * 60
}