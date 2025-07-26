import { it, describe, expect } from 'vitest';
import { formatData, type FormattedData } from '@/utils/formatDate';

describe('formatData function', () => {
  it('should format data correctly', async () => {
    const mockData: readonly [number, number][] = [
      [1752537600000, 47000.5], // 2025-07-15
      [1752624000000, 47500.25], // 2025-07-16
      [1752710400000, 48000.75], // 2025-07-17
    ];
    const expectedOutput = [
      { label: '2025-7-15', value: 47000.5 },
      { label: '2025-7-16', value: 47500.25 },
      { label: '2025-7-17', value: 48000.75 },
    ];
    const result: FormattedData[] = formatData(mockData);
    expect(result).toEqual(expectedOutput);
  });
});
