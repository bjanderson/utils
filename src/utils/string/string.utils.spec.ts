import { DEFAULT_STRING } from '../default-values';
import {
  camelFromKabobOrPascal,
  getString,
  lowercaseFirst,
  lowerize,
  pascalFromKabobOrCamel,
  snakeFromKabob,
  titleFromKabob,
  uppercaseFirst,
  upperize,
  upperSnakeFromKabob,
} from './string.utils';

describe('string.utils', () => {
  describe('getString(value, defaultValue)', () => {
    it('is a function', () => {
      expect(typeof getString).toEqual('function');
    });

    it('returns the DEFAULT_STRING when the input is undefined', () => {
      const expected = DEFAULT_STRING;
      const result = getString(undefined);
      expect(result).toEqual(expected);
    });

    it('returns the DEFAULT_STRING when the value null', () => {
      const expected = DEFAULT_STRING;
      const result = getString(null);
      expect(result).toEqual(expected);
    });

    it('returns the input string', () => {
      const expected = 'test';
      const result = getString('test');
      expect(result).toEqual(expected);
    });

    it('returns the custom defaultValue when the value is undefined', () => {
      const expected = 'test';
      const result = getString(undefined, 'test');
      expect(result).toEqual(expected);
    });

    it('returns the custom defaultValue when the value is null', () => {
      const expected = 'test';
      const result = getString(null, 'test');
      expect(result).toEqual(expected);
    });

    it('returns the null as the defaultValue', () => {
      const result = getString(undefined, null);
      expect(result).toBeNull();
    });

    it('returns the defaultValue when the input is an object', () => {
      const expected = DEFAULT_STRING;
      const result = getString({});
      expect(result).toEqual(expected);
    });

    it('returns the defaultValue when the input is an array', () => {
      const expected = DEFAULT_STRING;
      const result = getString(['test 1', 'test 2']);
      expect(result).toEqual(expected);
    });

    it('returns the defaultValue when the input is a function', () => {
      const expected = DEFAULT_STRING;
      const result = getString(() => 'test 1');
      expect(result).toEqual(expected);
    });

    it('returns the toString() result when the input specifies a custom toString function', () => {
      const input = {
        toString: (): string => 'custom toString result',
      };
      const result = getString(input);
      expect(result).toEqual('custom toString result');
    });

    it('returns "0" when given 0', () => {
      const expected = '0';
      const result = getString(0);
      expect(result).toEqual(expected);
    });

    it('returns the given number as a string', () => {
      const expected = '11';
      const result = getString(11);
      expect(result).toEqual(expected);
    });

    it('returns "false" when given false', () => {
      const expected = 'false';
      const result = getString(false);
      expect(result).toEqual(expected);
    });

    it('returns "true" when given true', () => {
      const expected = 'true';
      const result = getString(true);
      expect(result).toEqual(expected);
    });
  });

  describe('lowerize(value)', () => {
    it('is a function', () => {
      expect(typeof lowerize).toEqual('function');
    });

    it('returns an empty string when given null', () => {
      const result = lowerize(null);
      expect(result).toEqual('');
    });

    it('returns the given string as all lowercase letters', () => {
      const result = lowerize('ABcd-EFgh');
      expect(result).toEqual('abcd-efgh');
    });
  });

  describe('upperize(value)', () => {
    it('is a function', () => {
      expect(typeof upperize).toEqual('function');
    });

    it('returns an empty string when given null', () => {
      const result = upperize(null);
      expect(result).toEqual('');
    });

    it('returns the given string as all uppercase letters', () => {
      const result = upperize('ABcd-EFgh');
      expect(result).toEqual('ABCD-EFGH');
    });
  });

  describe('lowercaseFirst(value)', () => {
    it('is a function', () => {
      expect(typeof lowercaseFirst).toEqual('function');
    });

    it('returns an empty string when given null', () => {
      const result = lowercaseFirst(null);
      expect(result).toEqual('');
    });

    it('returns the given string with the first character capitalized', () => {
      const result = lowercaseFirst('ABCD');
      expect(result).toEqual('aBCD');
    });
  });

  describe('uppercaseFirst(value)', () => {
    it('is a function', () => {
      expect(typeof uppercaseFirst).toEqual('function');
    });

    it('returns an empty string when given null', () => {
      const result = uppercaseFirst(null);
      expect(result).toEqual('');
    });

    it('returns the given string with the first character capitalized', () => {
      const result = uppercaseFirst('abcd');
      expect(result).toEqual('Abcd');
    });
  });

  describe('camelFromKabobOrPascal(value)', () => {
    it('is a function', () => {
      expect(typeof camelFromKabobOrPascal).toEqual('function');
    });

    it('returns an empty string when given null', () => {
      const result = camelFromKabobOrPascal(null);
      expect(result).toEqual('');
    });

    it('returns the given kabob-case string as camelCase', () => {
      const result = camelFromKabobOrPascal('abcd-efgh');
      expect(result).toEqual('abcdEfgh');
    });

    it('returns the given PascalCase string as camelCase', () => {
      const result = camelFromKabobOrPascal('AbcdEfgh');
      expect(result).toEqual('abcdEfgh');
    });
  });

  describe('pascalFromKabobOrCamel(value)', () => {
    it('is a function', () => {
      expect(typeof pascalFromKabobOrCamel).toEqual('function');
    });

    it('returns an empty string when given null', () => {
      const result = pascalFromKabobOrCamel(null);
      expect(result).toEqual('');
    });

    it('returns the given kabob-case string as PascalCase', () => {
      const result = pascalFromKabobOrCamel('abcd-efgh');
      expect(result).toEqual('AbcdEfgh');
    });

    it('returns the given camelCase string as PascalCase', () => {
      const result = pascalFromKabobOrCamel('abcdEfgh');
      expect(result).toEqual('AbcdEfgh');
    });
  });

  describe('snakeFromKabob(value)', () => {
    it('is a function', () => {
      expect(typeof snakeFromKabob).toEqual('function');
    });

    it('returns an empty string when given null', () => {
      const result = snakeFromKabob(null);
      expect(result).toEqual('');
    });

    it('returns the given kabob-case string as PascalCase', () => {
      const result = snakeFromKabob('abcd-efgh');
      expect(result).toEqual('abcd_efgh');
    });
  });

  describe('upperSnakeFromKabob(value)', () => {
    it('is a function', () => {
      expect(typeof upperSnakeFromKabob).toEqual('function');
    });

    it('returns an empty string when given null', () => {
      const result = upperSnakeFromKabob(null);
      expect(result).toEqual('');
    });

    it('returns the given kabob-case string as PascalCase', () => {
      const result = upperSnakeFromKabob('abcd-efgh');
      expect(result).toEqual('ABCD_EFGH');
    });
  });

  describe('titleFromKabob(value)', () => {
    it('is a function', () => {
      expect(typeof titleFromKabob).toEqual('function');
    });

    it('returns an empty string when given null', () => {
      const result = titleFromKabob(null);
      expect(result).toEqual('');
    });

    it('returns the given kabob-case string as PascalCase', () => {
      const result = titleFromKabob('abcd-efgh');
      expect(result).toEqual('Abcd Efgh');
    });
  });
});
