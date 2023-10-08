export const convertToReadableTime = (time: string | Date) => {
  const startTime = new Date(time)
  const startTimeHours = String(startTime.getUTCHours()).padStart(2, '0')
  const startTimeMinutes = String(startTime.getUTCMinutes()).padStart(2, '0')
  const startTimeFormatted = `${startTimeHours}:${startTimeMinutes}`
  return startTimeFormatted
}
