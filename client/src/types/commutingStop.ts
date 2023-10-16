export type Mode = 'WALK' | 'BUS' | 'TRAM'

export interface Leg {
  startTime: number
  endTime: number
  mode: Mode
  distance: number
  duration: number
  from: {
    name: string
    stop: {
      code: number
      name: string
    }
  }
  to: {
    name: string
    stop: {
      code: number
      name: string
    }
  }
}

export interface Itinerary {
  legs: [Leg]
}

export interface Plan {
  plan: {
    itineraries: [Itinerary]
  }
}

export interface LocationPoint {
  lat: number
  lon: number
}
