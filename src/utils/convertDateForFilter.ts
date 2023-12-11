export const convertDateforFilter = (time: string | Date): Date => {
    const inputDate = new Date(time);
  
    return new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate());
  };
  