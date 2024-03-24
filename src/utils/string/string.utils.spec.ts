import { DEFAULT_STRING } from '../default-values';
import {
  camelFromKabobOrPascal,
  getString,
  isCamelCase,
  isKabobCase,
  isLowerCase,
  isPascalCase,
  isSnakeCase,
  isTitleCase,
  isUpperCase,
  lowercaseFirst,
  lowerize,
  pascalFromKabobOrCamel,
  snakeFromKabob,
  titleFromKabob,
  toKabob,
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

  describe('toKabob(value)', () => {
    it('is a function', () => {
      expect(typeof toKabob).toEqual('function');
    });

    it('returns an empty string when given null', () => {
      const result = toKabob(null);
      expect(result).toEqual('');
    });

    it('returns a the lowercase string when not a kabob', () => {
      const result = toKabob('Abcdefgh');
      expect(result).toEqual('abcdefgh');
    });

    it('returns a kabob-case string from kabob-case', () => {
      const result = toKabob('kabob-case');
      expect(result).toEqual('kabob-case');
    });

    it('returns a kabob-case string from camelCase', () => {
      const result = toKabob('kabobCase');
      expect(result).toEqual('kabob-case');
    });

    it('returns a kabob-case string from PascalCase', () => {
      const result = toKabob('KabobCase');
      expect(result).toEqual('kabob-case');
    });

    it('returns a kabob-case string from SNAKE_CASE', () => {
      const result = toKabob('KABOB_CASE');
      expect(result).toEqual('kabob-case');
    });

    it('returns a kabob-case string from Title Case', () => {
      const result = toKabob('Kabob Case');
      expect(result).toEqual('kabob-case');
    });

    it('removes multiple hyphens', () => {
      const result = toKabob('Kabob Case_test-string---a - b');
      expect(result).toEqual('kabob-case-test-string-a-b');
    });
  });

  describe('isLowerCase(value)', () => {
    it('is a function', () => {
      expect(typeof isLowerCase).toEqual('function');
    });

    it('returns true (null)', () => {
      const result = isLowerCase(null);
      expect(result).toEqual(true);
    });

    it('returns true (lowercase)', () => {
      const result = isLowerCase('lowercase');
      expect(result).toEqual(true);
    });

    it('returns false (UPPERCASE)', () => {
      const result = isLowerCase('UPPERCASE');
      expect(result).toEqual(false);
    });

    it('returns true (kabob-case)', () => {
      const result = isLowerCase('kabob-case');
      expect(result).toEqual(true);
    });

    it('returns false (camelCase)', () => {
      const result = isLowerCase('camelCase');
      expect(result).toEqual(false);
    });

    it('returns false (PascalCase)', () => {
      const result = isLowerCase('PascalCase');
      expect(result).toEqual(false);
    });

    it('returns false (SNAKE_CASE)', () => {
      const result = isLowerCase('SNAKE_CASE');
      expect(result).toEqual(false);
    });

    it('returns false (Title Case)', () => {
      const result = isLowerCase('Title Case');
      expect(result).toEqual(false);
    });
  });

  describe('isUpperCase(value)', () => {
    it('is a function', () => {
      expect(typeof isUpperCase).toEqual('function');
    });

    it('returns true (null)', () => {
      const result = isUpperCase(null);
      expect(result).toEqual(true);
    });

    it('returns false (lowercase)', () => {
      const result = isUpperCase('lowercase');
      expect(result).toEqual(false);
    });

    it('returns true (UPPERCASE)', () => {
      const result = isUpperCase('UPPERCASE');
      expect(result).toEqual(true);
    });

    it('returns false (kabob-case)', () => {
      const result = isUpperCase('kabob-case');
      expect(result).toEqual(false);
    });

    it('returns false (camelCase)', () => {
      const result = isUpperCase('camelCase');
      expect(result).toEqual(false);
    });

    it('returns false (PascalCase)', () => {
      const result = isUpperCase('PascalCase');
      expect(result).toEqual(false);
    });

    it('returns true (SNAKE_CASE)', () => {
      const result = isUpperCase('SNAKE_CASE');
      expect(result).toEqual(true);
    });

    it('returns false (Title Case)', () => {
      const result = isUpperCase('Title Case');
      expect(result).toEqual(false);
    });
  });

  describe('isKabobCase(value)', () => {
    it('is a function', () => {
      expect(typeof isKabobCase).toEqual('function');
    });

    it('returns true (null)', () => {
      const result = isKabobCase(null);
      expect(result).toEqual(true);
    });

    it('returns true (lowercase)', () => {
      const result = isKabobCase('lowercase');
      expect(result).toEqual(true);
    });

    it('returns false (UPPERCASE)', () => {
      const result = isKabobCase('UPPERCASE');
      expect(result).toEqual(false);
    });

    it('returns true (kabob-case)', () => {
      const result = isKabobCase('kabob-case');
      expect(result).toEqual(true);
    });

    it('returns false (camelCase)', () => {
      const result = isKabobCase('camelCase');
      expect(result).toEqual(false);
    });

    it('returns false (PascalCase)', () => {
      const result = isKabobCase('PascalCase');
      expect(result).toEqual(false);
    });

    it('returns false (SNAKE_CASE)', () => {
      const result = isKabobCase('SNAKE_CASE');
      expect(result).toEqual(false);
    });

    it('returns false (Title Case)', () => {
      const result = isKabobCase('Title Case');
      expect(result).toEqual(false);
    });
  });

  describe('isCamelCase(value)', () => {
    it('is a function', () => {
      expect(typeof isCamelCase).toEqual('function');
    });

    it('returns true (null)', () => {
      const result = isCamelCase(null);
      expect(result).toEqual(true);
    });

    it('returns true (lowercase)', () => {
      const result = isCamelCase('lowercase');
      expect(result).toEqual(true);
    });

    it('returns false (UPPERCASE)', () => {
      const result = isCamelCase('UPPERCASE');
      expect(result).toEqual(false);
    });

    it('returns false (kabob-case)', () => {
      const result = isCamelCase('kabob-case');
      expect(result).toEqual(false);
    });

    it('returns true (camelCase)', () => {
      const result = isCamelCase('camelCase');
      expect(result).toEqual(true);
    });

    it('returns false (PascalCase)', () => {
      const result = isCamelCase('PascalCase');
      expect(result).toEqual(false);
    });

    it('returns false (SNAKE_CASE)', () => {
      const result = isCamelCase('SNAKE_CASE');
      expect(result).toEqual(false);
    });

    it('returns false (Title Case)', () => {
      const result = isCamelCase('Title Case');
      expect(result).toEqual(false);
    });
  });

  describe('isPascalCase(value)', () => {
    it('is a function', () => {
      expect(typeof isPascalCase).toEqual('function');
    });

    it('returns true (null)', () => {
      const result = isPascalCase(null);
      expect(result).toEqual(true);
    });

    it('returns false (lowercase)', () => {
      const result = isPascalCase('lowercase');
      expect(result).toEqual(false);
    });

    it('returns false (UPPERCASE)', () => {
      const result = isPascalCase('UPPERCASE');
      expect(result).toEqual(false);
    });

    it('returns false (kabob-case)', () => {
      const result = isPascalCase('kabob-case');
      expect(result).toEqual(false);
    });

    it('returns false (camelCase)', () => {
      const result = isPascalCase('camelCase');
      expect(result).toEqual(false);
    });

    it('returns true (PascalCase)', () => {
      const result = isPascalCase('PascalCase');
      expect(result).toEqual(true);
    });

    it('returns false (SNAKE_CASE)', () => {
      const result = isPascalCase('SNAKE_CASE');
      expect(result).toEqual(false);
    });

    it('returns false (Title Case)', () => {
      const result = isPascalCase('Title Case');
      expect(result).toEqual(false);
    });
  });

  describe('isSnakeCase(value)', () => {
    it('is a function', () => {
      expect(typeof isSnakeCase).toEqual('function');
    });

    it('returns true (null)', () => {
      const result = isSnakeCase(null);
      expect(result).toEqual(true);
    });

    it('returns false (lowercase)', () => {
      const result = isSnakeCase('lowercase');
      expect(result).toEqual(false);
    });

    it('returns true (UPPERCASE)', () => {
      const result = isSnakeCase('UPPERCASE');
      expect(result).toEqual(true);
    });

    it('returns false (kabob-case)', () => {
      const result = isSnakeCase('kabob-case');
      expect(result).toEqual(false);
    });

    it('returns false (camelCase)', () => {
      const result = isSnakeCase('camelCase');
      expect(result).toEqual(false);
    });

    it('returns false (PascalCase)', () => {
      const result = isSnakeCase('PascalCase');
      expect(result).toEqual(false);
    });

    it('returns true (SNAKE_CASE)', () => {
      const result = isSnakeCase('SNAKE_CASE');
      expect(result).toEqual(true);
    });

    it('returns false (Title Case)', () => {
      const result = isSnakeCase('Title Case');
      expect(result).toEqual(false);
    });
  });

  describe('isTitleCase(value)', () => {
    it('is a function', () => {
      expect(typeof isTitleCase).toEqual('function');
    });

    it('returns true (null)', () => {
      const result = isTitleCase(null);
      expect(result).toEqual(true);
    });

    it('returns false (lowercase)', () => {
      const result = isTitleCase('lowercase');
      expect(result).toEqual(false);
    });

    it('returns false (UPPERCASE)', () => {
      const result = isTitleCase('UPPERCASE');
      expect(result).toEqual(false);
    });

    it('returns false (kabob-case)', () => {
      const result = isTitleCase('kabob-case');
      expect(result).toEqual(false);
    });

    it('returns false (camelCase)', () => {
      const result = isTitleCase('camelCase');
      expect(result).toEqual(false);
    });

    it('returns false (PascalCase)', () => {
      const result = isTitleCase('PascalCase');
      expect(result).toEqual(false);
    });

    it('returns false (SNAKE_CASE)', () => {
      const result = isTitleCase('SNAKE_CASE');
      expect(result).toEqual(false);
    });

    it('returns true (Title Case)', () => {
      const result = isTitleCase('Title Case');
      expect(result).toEqual(true);
    });
  });
});
