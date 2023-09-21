export enum EventTagType {
  CULTURE = 'culture',
  FINE_DINING = 'fine-dining',
  FOR_KIDS = 'for-kids',
  MUSIC = 'music',
  OUTDOOR = 'outdoor',
  RELIGION = 'religion',
  SPORTS = 'sports',
  DEFAULT = '',
}

export type EventObj = {
  id: number
  name: string
  description: string
  images: Array<{ url: string; type: string; width: number; height: number }>
  startTime: string
  endTime: string
}
