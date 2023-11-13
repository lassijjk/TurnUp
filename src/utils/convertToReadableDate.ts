import { TFunction } from 'i18next'

export const convertToReadableDate = (time: string | Date, t: TFunction): string => {
  const inputDate = new Date(time)
  const dayOfWeek = t('DATE.SHORT.' + inputDate.getUTCDay().toString())
  const dayOfMonth = inputDate.getUTCDate()
  const year = inputDate.getUTCFullYear()

  // Format the date as "Day Date.Month.Year"
  const formattedDate = `${dayOfWeek} ${dayOfMonth}.${inputDate.getUTCMonth() + 1}.${year}`

  return formattedDate
}
