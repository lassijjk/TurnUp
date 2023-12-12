import { describe, it, expect } from 'vitest';


import { convertToReadableTime } from '../utils/convertToReadableTime'; 



describe('convertToReadableTime', () => {
  it('should format the time correctly', () => {
    const date = new Date('2022-01-01T00:00:00Z');
    const result = convertToReadableTime(date);

    
    expect(result).toBe('02:00');
  });
});