export const convertDateforFilter = (time: string | Date, ): number => {
  const inputDate = new Date(time);

  return new Date(Date.UTC(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate())).getTime();
}
