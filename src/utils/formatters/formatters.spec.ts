import { DEFAULT_NUMBER, DEFAULT_STRING } from '../default-values';
import { dollarsToNum, msToTime, numToDollars } from './formatters';

describe('formatters', () => {
  describe('numToDollars(value, defaultValue)', () => {
    it('is a function', () => {
      expect(typeof numToDollars).toEqual('function');
    });

    it('returns the DEFAULT_STRING when the input is undefined', () => {
      const expected = DEFAULT_STRING;
      const result = numToDollars(undefined);
      expect(result).toEqual(expected);
    });

    it('returns the dollar string from the given number', () => {
      const expected = '$123,456.78';
      const result = numToDollars(123456.78);
      expect(result).toEqual(expected);
    });
  });

  describe('dollarsToNum(value, defaultValue)', () => {
    it('is a function', () => {
      expect(typeof dollarsToNum).toEqual('function');
    });

    it('returns the DEFAULT_NUMBER when the input is undefined', () => {
      const expected = DEFAULT_NUMBER;
      const result = dollarsToNum(undefined);
      expect(result).toEqual(expected);
    });

    it('returns the number from the given dollar string', () => {
      const expected = 1234567123345.89;
      const result = dollarsToNum('$1 234,567 123,345.89');
      expect(result).toEqual(expected);
    });

    it('returns the number from the given dollar string', () => {
      const expected = -1234567123345.89;
      const result = dollarsToNum('$(1 234,567 123,345.89)');
      expect(result).toEqual(expected);
    });

    it('returns the number from the given dollar string', () => {
      const expected = 1234.56;
      const result = dollarsToNum('1,234.56');
      expect(result).toEqual(expected);
    });
  });

  describe('msToTime()', () => {
    it('returns the correct s', () => {
      const expected = '5s';
      const milliSeconds = 5000;
      const result = msToTime(milliSeconds);
      expect(result).toEqual(expected);
    });

    it('returns the correct m', () => {
      const expected = '2m 5s';
      const milliSeconds = 125000;
      const result = msToTime(milliSeconds);
      expect(result).toEqual(expected);
    });

    it('returns the correct h', () => {
      const expected = '5h 2m';
      const milliSeconds = 18125000;
      const result = msToTime(milliSeconds);
      expect(result).toEqual(expected);
    });

    it('returns the correct d', () => {
      const expected = '3d 5h';
      const milliSeconds = 277325000;
      const result = msToTime(milliSeconds);
      expect(result).toEqual(expected);
    });
  });
});
