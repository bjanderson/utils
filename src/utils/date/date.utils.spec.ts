import { formatDate, getDate, isDate } from './date.utils';

describe('date.utils', () => {

  describe('formatDate(date)', () => {
    it('is a function', () => {
      expect(typeof formatDate).toEqual('function');
    });

    it('returns "Invalid Date" for an invalid date', () => {
      const date = '';
      const expected = 'Invalid Date';
      const result = formatDate(date);
      expect(result).toEqual(expected);
    });

    it('returns a displayable date for a number', () => {
      const date = 1577941200000;
      const expected = new Date(date).toLocaleDateString();
      const result = formatDate(date);
      expect(result).toEqual(expected);
    });

    it('returns "Invalid Date" if the date is invalid', () => {
      const expected = 'Invalid Date';
      const result: any = formatDate(NaN);
      expect(result).toEqual(expected);
    });
  });

  describe('getDate(date)', () => {
    it('is a function', () => {
      expect(typeof getDate).toEqual('function');
    });

    it('returns a JavaScript Date if the input is a valid date', () => {
      const date = '1/2/2020';
      const expected = new Date(date).toString();
      const result = getDate(date).toString();
      expect(result).toEqual(expected);
    });

    it('returns an empty string if the input is not a valid date', () => {
      const date = '99/00/2020';
      const expected = '';
      const result = getDate(date);
      expect(result).toEqual(expected);
    });
  });

  describe('isDate(date)', () => {
    it('is a function', () => {
      expect(typeof isDate).toEqual('function');
    });

    it('returns true when the date is a correct mmddyyyy string', () => {
      const date = '1/2/2020';
      const expected = true;
      const result = isDate(date);
      expect(result).toEqual(expected);
    });

    it('returns true when the date is a Date', () => {
      const date = new Date();
      const expected = true;
      const result = isDate(date);
      expect(result).toEqual(expected);
    });

    it('returns true when the date is null', () => {
      const date = null;
      const expected = true;
      const result = isDate(date);
      expect(result).toEqual(expected);
    });

    it('returns true when the date is a number', () => {
      const date = 1234;
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

    it('returns false when the date is not a correct mmddyyyy date', () => {
      const date = '60/70/2020';
      const expected = false;
      const result = isDate(date);
      expect(result).toEqual(expected);
    });
  });
});
