import { DEFAULT_NUMBER, DEFAULT_STRING } from '../default-values';
import { dollarsToNum, numToDollars } from './formatters';

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
  });
});
