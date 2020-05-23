import { DEFAULT_BOOLEAN, DEFAULT_NUMBER, DEFAULT_OBJECT, DEFAULT_STRING } from '../default-values';
import {
  getBoolean,
  getNumber,
  getObject,
  getValueOrDefault,
  getValueOrNull,
  isFunction,
  isNullOrEmpty,
  getNested,
} from './primitive.utils';

describe('primitive.utils', () => {
  describe('getNested()', () => {
    it('is a function', () => {
      expect(typeof getNested).toEqual('function');
    });

    it('returns null when the nested value is not found', () => {
      const obj = {};
      const result = getNested(obj, 'a.b.1.c');
      expect(result).toBeNull();
    });

    it('returns the default value when the nested value is not found', () => {
      const defaultValue = 'test';
      const obj = {};
      const result = getNested(obj, 'a.b.1.c', defaultValue);
      expect(result).toEqual(defaultValue);
    });

    it('returns null when the nested value when the path contains a function', () => {
      const defaultValue = 'test';
      const obj = {
        a: () => ({ b: [{}, { c: 'value' }] }),
      };
      const result = getNested(obj, 'a.b.1.c', defaultValue);
      expect(result).toEqual(defaultValue);
    });

    it('returns the nested array', () => {
      const expected = [{ c: 'test-0' }, { c: 'test-1' }];
      const obj = { a: { b: [{ c: 'test-0' }, { c: 'test-1' }] } };
      const result = getNested(obj, 'a.b');
      expect(result).toEqual(expected);
    });

    it('returns the nested object', () => {
      const expected = { c: 'test-1' };
      const obj = { a: { b: [{ c: 'test-0' }, { c: 'test-1' }] } };
      const result = getNested(obj, 'a.b.1');
      expect(result).toEqual(expected);
    });

    it('returns the nested value', () => {
      const obj = { a: { b: [{ c: 'test-0' }, { c: 'test-1' }] } };
      const result = getNested(obj, 'a.b.1.c');
      expect(result).toEqual('test-1');
    });
  });

  describe('getBoolean(value, defaultValue)', () => {
    it('is a function', () => {
      expect(typeof getBoolean).toEqual('function');
    });

    it('returns the DEFAULT_BOOLEAN when the input is undefined', () => {
      const expected = DEFAULT_BOOLEAN;
      const result = getBoolean(undefined);
      expect(result).toEqual(expected);
    });

    it('returns the DEFAULT_BOOLEAN when the input is null', () => {
      const expected = DEFAULT_BOOLEAN;
      const result = getBoolean(null);
      expect(result).toEqual(expected);
    });

    it('returns the defaultValue when the input is undefined', () => {
      const expected = !DEFAULT_BOOLEAN;
      const result = getBoolean(undefined, !DEFAULT_BOOLEAN);
      expect(result).toEqual(expected);
    });

    it('returns the defaultValue when the input is null', () => {
      const expected = !DEFAULT_BOOLEAN;
      const result = getBoolean(null, !DEFAULT_BOOLEAN);
      expect(result).toEqual(expected);
    });

    it('returns true', () => {
      const expected = true;
      const result = getBoolean(true);
      expect(result).toEqual(expected);
    });

    it('returns false', () => {
      const expected = false;
      const result = getBoolean(false);
      expect(result).toEqual(expected);
    });

    it('returns true when input is "true"', () => {
      const expected = true;
      const result = getBoolean('true');
      expect(result).toEqual(expected);
    });

    it('returns false when input is "false"', () => {
      const expected = false;
      const result = getBoolean('false');
      expect(result).toEqual(expected);
    });

    it('returns true when input is 1', () => {
      const expected = true;
      const result = getBoolean(1);
      expect(result).toEqual(expected);
    });

    it('returns false when input is 0', () => {
      const expected = false;
      const result = getBoolean(0);
      expect(result).toEqual(expected);
    });

    it('returns true when input is a string "a string"', () => {
      const expected = true;
      const result = getBoolean('a string');
      expect(result).toEqual(expected);
    });

    it('returns false when input is ""', () => {
      const expected = false;
      const result = getBoolean('');
      expect(result).toEqual(expected);
    });
  });

  describe('getNumber(value, defaultValue)', () => {
    it('is a function', () => {
      expect(typeof getNumber).toEqual('function');
    });

    it('returns the DEFAULT_NUMBER when the input is undefined', () => {
      const expected = DEFAULT_NUMBER;
      const result = getNumber(undefined);
      expect(result).toEqual(expected);
    });

    it('returns the DEFAULT_NUMBER when the input is null', () => {
      const expected = DEFAULT_NUMBER;
      const result = getNumber(null);
      expect(result).toEqual(expected);
    });

    it('returns null as the defaultValue', () => {
      const result = getNumber(undefined, null);
      expect(result).toBeNull();
    });

    it('returns the defaultValue when given a NaN string', () => {
      const expected = 3;
      const result = getNumber('abc', 3);
      expect(result).toEqual(expected);
    });

    it('returns the given number', () => {
      const expected = 3;
      const result = getNumber(3);
      expect(result).toEqual(expected);
    });

    it('returns a number when the input is a number as a string', () => {
      const expected = 3;
      const result = getNumber('3');
      expect(result).toEqual(expected);
    });

    it('returns the DEFAULT_NUMBER when the input is a NaN string', () => {
      const expected = DEFAULT_NUMBER;
      const result = getNumber('abc');
      expect(result).toEqual(expected);
    });

    it('returns a float from a string', () => {
      const expected = 1.2345;
      const result = getNumber('1.2345');
      expect(result).toEqual(expected);
    });
  });

  describe('getObject(value, defaultValue)', () => {
    it('is a function', () => {
      expect(typeof getObject).toEqual('function');
    });

    it('returns the DEFAULT_OBJECT when the input is undefined', () => {
      const expected = DEFAULT_OBJECT;
      const result = getObject(undefined);
      expect(result).toEqual(expected);
    });

    it('returns the DEFAULT_OBJECT when the input is null', () => {
      const expected = DEFAULT_OBJECT;
      const result = getObject(null);
      expect(result).toEqual(expected);
    });

    it('returns null as the defaultValue', () => {
      const result = getObject(undefined, null);
      expect(result).toBeNull();
    });

    it('returns the defaultValue', () => {
      const expected = { test: 'test' };
      const result = getObject(undefined, { test: 'test' });
      expect(result).toEqual(expected);
    });

    it('returns the given object', () => {
      const expected = { test: 'test' };
      const result = getObject({ test: 'test' });
      expect(result).toEqual(expected);
    });

    it('returns an object with the input string as a value of the returned object', () => {
      const expected = { value: 'test' };
      const result = getObject('test');
      expect(result).toEqual(expected);
    });

    it('returns an object with the input boolean as a value of the returned object', () => {
      const expected = { value: true };
      const result = getObject(true);
      expect(result).toEqual(expected);
    });

    it('returns an object with the input number as a value of the returned object', () => {
      const expected = { value: 5 };
      const result = getObject(5);
      expect(result).toEqual(expected);
    });

    it('returns an object with the input array as a value of the returned object', () => {
      const expected = { value: ['test 1', 'test 2'] };
      const result = getObject(['test 1', 'test 2']);
      expect(result).toEqual(expected);
    });
  });

  describe('getValueOrDefault(value, defaultValue)', () => {
    it('is a function', () => {
      expect(typeof getValueOrDefault).toEqual('function');
    });

    it('returns the default when the input is undefined', () => {
      const defaultValue = 'test';
      const result = getValueOrDefault(undefined, defaultValue);
      expect(result).toEqual(defaultValue);
    });

    it('returns the default when the input is null', () => {
      const defaultValue = 'test';
      const result = getValueOrDefault(null, defaultValue);
      expect(result).toEqual(defaultValue);
    });

    it('returns the value when the input is defined', () => {
      const expected = 'test';
      const result = getValueOrDefault('test', DEFAULT_STRING);
      expect(result).toEqual(expected);
    });

    it('returns the defaultValue when the input is undefined and the default is set', () => {
      const expected = 'test';
      const result = getValueOrDefault(undefined, 'test');
      expect(result).toEqual(expected);
    });

    it('returns the defaultValue when the input is null and the default is set', () => {
      const expected = 'test';
      const result = getValueOrDefault(null, 'test');
      expect(result).toEqual(expected);
    });
  });

  describe('getValueOrNull(value)', () => {
    it('is a function', () => {
      expect(typeof getValueOrNull).toEqual('function');
    });

    it('returns null when the input is undefined', () => {
      const result = getValueOrNull(undefined);
      expect(result).toBeNull();
    });

    it('returns null when the input is null', () => {
      const result = getValueOrNull(null);
      expect(result).toBeNull();
    });

    it('returns the value when the input is defined', () => {
      const expected = 'test';
      const result = getValueOrNull('test');
      expect(result).toEqual(expected);
    });
  });

  describe('isFunction(value)', () => {
    it('is a function', () => {
      expect(typeof isFunction).toEqual('function');
    });

    it('returns false when the input is undefined', () => {
      const result = isFunction(undefined);
      expect(result).toEqual(false);
    });

    it('returns false when the input is null', () => {
      const result = isFunction(null);
      expect(result).toEqual(false);
    });

    it('returns false when the input is an object', () => {
      const result = isFunction({});
      expect(result).toEqual(false);
    });

    it('returns true when the input is a function', () => {
      const result = isFunction(() => undefined);
      expect(result).toEqual(true);
    });
  });

  describe('isNullOrEmpty(value)', () => {
    it('is a function', () => {
      expect(typeof isNullOrEmpty).toEqual('function');
    });

    it('returns true when the input is undefined', () => {
      const result = isNullOrEmpty(undefined);
      expect(result).toEqual(true);
    });

    it('returns true when the input is null', () => {
      const result = isNullOrEmpty(null);
      expect(result).toEqual(true);
    });

    it('returns true when the input is an empty string', () => {
      const result = isNullOrEmpty('');
      expect(result).toEqual(true);
    });

    it('returns true when the input is an empty array', () => {
      const result = isNullOrEmpty([]);
      expect(result).toEqual(true);
    });

    it('returns false when the input is a number', () => {
      const result = isNullOrEmpty(1);
      expect(result).toEqual(false);
    });

    it('returns false when the input is an object', () => {
      const result = isNullOrEmpty({ a: 'test' });
      expect(result).toEqual(false);
    });

    it('returns false when the input is a string with a value', () => {
      const result = isNullOrEmpty('test');
      expect(result).toEqual(false);
    });

    it('returns false when the input is an array with a value', () => {
      const result = isNullOrEmpty(['test']);
      expect(result).toEqual(false);
    });
  });
});
