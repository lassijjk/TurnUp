import React from 'react';
import { DesktopDatePicker } from '@mui/pickers';

const DatePickerFilter = ({ selectedDate, handleDateChange }) => {
  return (
    <DesktopDatePicker
      value={selectedDate}
      onChange={handleDateChange}
      renderInput={(params) => <input {...params} />}
    />
  );
};

export default DatePickerFilter;
