export const convertToReadableTime = (time: string | Date) => {
  const inputTime = new Date(time);

  // Convert to Finland time (UTC+2 or UTC+3 during daylight saving time)
  const finlandTimeOptions: Intl.DateTimeFormatOptions = {
    timeZone: 'Europe/Helsinki',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  };

  const timeFormatted = inputTime.toLocaleString('en-US', finlandTimeOptions);

  return timeFormatted;
};