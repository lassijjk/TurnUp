export type Mode = 'WALK' | 'BUS'

export interface Leg {
  startTime: number
  endTime: number
  mode: Mode
  distance: number
}

export interface Itinerary {
  legs: [Leg]
}

export interface Plan {
  plan: {
    itineraries: [Itinerary]
  }
}
