import { describe, it, expect } from 'vitest';

import { convertDateforFilter } from '../utils/convertDateForFilter';

describe('convertDateforFilter', () => {
  it('should format the date correctly', () => {
    const date = new Date('2022-01-01T15:30:00Z');
    const result = convertDateforFilter(date);

    expect(result).toEqual(new Date('2022-01-01T00:00:00Z'));
  });
});