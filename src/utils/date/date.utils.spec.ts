import { getDate, isDate } from './date.utils';

describe('date.utils', () => {
  describe('getDate(date)', () => {
    it('is a function', () => {
      expect(typeof getDate).toEqual('function');
    });

    it('returns a JavaScript Date if the input is a valid date', () => {
      const date = '01/02/2020';
      const expected = new Date(date).toString();
      const result = getDate(date).toString();
      expect(result).toEqual(expected);
    });

    it('returns a JavaScript Date if the input is a number and the format is set to null', () => {
      const date = 1577941200000;
      const expected = new Date(date).toString();
      const result = getDate(date, null).toString();
      expect(result).toEqual(expected);
    });

    it('returns an empty string if the input is not a valid date', () => {
      const date = new Date('99/00/2020');
      const expected: any = '';
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
});
