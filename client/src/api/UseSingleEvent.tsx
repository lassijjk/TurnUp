import {rememberQuery} from "./CacheManager.tsx";
import {QueryId} from "../types/api.ts";
import useTodaysEvents from "./UseTodaysEvents.tsx";
import {useStore} from "../stores/settingStore.tsx";

const UseSingleEvent = (id: string) => {
    const { language } = useStore()
    const events = rememberQuery(QueryId.TODAYS_EVENTS, language);
    return events ? events[id] : null;
}

export default UseSingleEvent
