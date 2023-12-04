import { describe, it, expect } from 'vitest';


import { convertToReadableTime } from '../utils/convertToReadableTime'; 

describe('convertToReadableTime', () => {
    it('Converts valid time string to readable time', () => {
      const result = convertToReadableTime('2023-12-03T08:30:00Z');
      expect(result).toBe('08:30');
    });
  
    it('Converts valid Date object to readable time', () => {
      const result = convertToReadableTime(new Date('2023-12-03T08:30:00Z'));
      expect(result).toBe('08:30');
    });
  
    it('Converts time with single-digit hours and minutes', () => {
      const result = convertToReadableTime('2023-12-03T05:09:00Z');
      expect(result).toBe('05:09');
    });
  
    it('Converts midnight time to readable time', () => {
      const result = convertToReadableTime('2023-12-03T00:00:00Z');
      expect(result).toBe('00:00');
    });
  
    it('Converts noon time to readable time', () => {
      const result = convertToReadableTime('2023-12-03T12:00:00Z');
      expect(result).toBe('12:00');
    });
  
    it('Converts Date object with different timezone to readable time', () => {
      const result = convertToReadableTime(new Date('2023-12-03T08:30:00+0300'));
      expect(result).toBe('05:30');
    });
  
});
  
