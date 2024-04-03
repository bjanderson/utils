import { getDate, isDate } from './date.utils';

describe('date.utils', () => {
  describe('getDate(date)', () => {
    it('is a function', () => {
      expect(typeof getDate).toEqual('function');
    });

    it('returns the correct ISO string if the input is a valid date string', () => {
      const date = '2020-01-02';
      const expected = '2020-01-02T00:00:00.000Z';
      const result = getDate(date);
      expect(result).toEqual(expected);
    });
  });

  describe('isDate(date)', () => {
    it('is a function', () => {
      expect(typeof isDate).toEqual('function');
    });

    it('returns true when the date is a Date', () => {
      const date = new Date();
      const expected = true;
      const result = isDate(date);
      expect(result).toEqual(expected);
    });

    it('returns false when the date is an empty string', () => {
      const date = '';
      const expected = false;
      const result = isDate(date);
      expect(result).toEqual(expected);
    });

    it('returns false when the date is NaN', () => {
      const date = NaN;
      const expected = false;
      const result = isDate(date);
      expect(result).toEqual(expected);
    });

    it('returns false when the date is not correctly formatted', () => {
      const date = '20200201';
      const expected = false;
      const result = isDate(date);
      expect(result).toEqual(expected);
    });
  });

  // describe('toUTCTimeZone()', () => {
  //   it('is a function', () => {
  //     expect(typeof toUTCTimeZone).toEqual('function');
  //   });

  //   it('returns the given date and time in utc timezone instead of local without changing the values', () => {
  //     const date = '2020-01-02T12:00:00.000-0500';
  //     const expected = '2020-01-02T12:00:00.000Z';
  //     const result = toUTCTimeZone(date);
  //     expect(result).toEqual(expected);
  //   });
  // });

  // describe('toLocalTimeZone()', () => {
  //   it('is a function', () => {
  //     expect(typeof toLocalTimeZone).toEqual('function');
  //   });

  //   it('returns the given date and time in the locak timezone instead of utc without changing the values', () => {
  //     const date = '2020-01-02T12:00:00.000Z';
  //     const expected = '2020-01-02T12:00:00.000-0500';
  //     const result = toLocalTimeZone(date).toISOString();
  //     expect(result).toEqual(expected);
  //   });
  // });
});
