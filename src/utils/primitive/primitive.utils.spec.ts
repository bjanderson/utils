import { defaultBoolean, defaultNumber, defaultObject, defaultString, getBoolean, getNumber, getObject, getString, getValueOrDefault, getValueOrNull, isFunction, isNullOrEmpty } from './primitive.utils';

describe('primitive.utils', () => {

  describe('getBoolean(value, defaultValue)', () => {
    it('is a function', () => {
      expect(typeof getBoolean).toEqual('function');
    });

    it('returns the defaultBoolean when the input is undefined', () => {
      const expected = defaultBoolean;
      const result = getBoolean(undefined);
      expect(result).toEqual(expected);
    });

    it('returns the defaultBoolean when the input is null', () => {
      const expected = defaultBoolean;
      const result = getBoolean(null);
      expect(result).toEqual(expected);
    });

    it('returns the defaultValue when the input is undefined', () => {
      const expected = !defaultBoolean;
      const result = getBoolean(undefined, !defaultBoolean);
      expect(result).toEqual(expected);
    });

    it('returns the defaultValue when the input is null', () => {
      const expected = !defaultBoolean;
      const result = getBoolean(null, !defaultBoolean);
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

    it('returns the defaultNumber when the input is undefined', () => {
      const expected = defaultNumber;
      const result = getNumber(undefined);
      expect(result).toEqual(expected);
    });

    it('returns the defaultNumber when the input is null', () => {
      const expected = defaultNumber;
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

    it('returns the defaultNumber when the input is a NaN string', () => {
      const expected = defaultNumber;
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

    it('returns the defaultObject when the input is undefined', () => {
      const expected = defaultObject;
      const result = getObject(undefined);
      expect(result).toEqual(expected);
    });

    it('returns the defaultObject when the input is null', () => {
      const expected = defaultObject;
      const result = getObject(null);
      expect(result).toEqual(expected);
    });

    it('returns null as the defaultValue', () => {
      const result = getObject(undefined, null);
      expect(result).toBeNull();
    });

    it('returns the defaultValue', () => {
      const expected = {test: 'test'};
      const result = getObject(undefined, {test: 'test'});
      expect(result).toEqual(expected);
    });

    it('returns the given object', () => {
      const expected = {test: 'test'};
      const result = getObject({test: 'test'});
      expect(result).toEqual(expected);
    });

    it('returns an object with the input string as a value of the returned object', () => {
      const expected = {value: 'test'};
      const result = getObject('test');
      expect(result).toEqual(expected);
    });

    it('returns an object with the input boolean as a value of the returned object', () => {
      const expected = {value: true};
      const result = getObject(true);
      expect(result).toEqual(expected);
    });

    it('returns an object with the input number as a value of the returned object', () => {
      const expected = {value: 5};
      const result = getObject(5);
      expect(result).toEqual(expected);
    });

    it('returns an object with the input array as a value of the returned object', () => {
      const expected = {value: ['test 1', 'test 2']};
      const result = getObject(['test 1', 'test 2']);
      expect(result).toEqual(expected);
    });
  });

  describe('getString(value, defaultValue)', () => {
    it('is a function', () => {
      expect(typeof getString).toEqual('function');
    });

    it('returns the defaultString when the input is undefined', () => {
      const expected = defaultString;
      const result = getString(undefined);
      expect(result).toEqual(expected);
    });

    it('returns the defaultString when the value null', () => {
      const expected = defaultString;
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
      const expected = defaultString;
      const result = getString({});
      expect(result).toEqual(expected);
    });

    it('returns the defaultValue when the input is an array', () => {
      const expected = defaultString;
      const result = getString(['test 1', 'test 2']);
      expect(result).toEqual(expected);
    });

    it('returns the defaultValue when the input is a function', () => {
      const expected = defaultString;
      const result = getString(() => 'test 1');
      expect(result).toEqual(expected);
    });

    it('returns the toString() result when the input specifies a custom toString function', () => {
      const input = {
        toString: () => 'custom toString result'
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

  describe('getValueOrDefault(value, defaultValue)', () => {
    it('is a function', () => {
      expect(typeof getValueOrDefault).toEqual('function');
    });

    it('returns null when the input is undefined', () => {
      const result = getValueOrDefault(undefined);
      expect(result).toBeNull();
    });

    it('returns null when the input is null', () => {
      const result = getValueOrDefault(null);
      expect(result).toBeNull();
    });

    it('returns null when the input is null', () => {
      const result = getValueOrDefault(null);
      expect(result).toBeNull();
    });

    it('returns the value when the input is defined', () => {
      const expected = 'test';
      const result = getValueOrDefault('test');
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

    it('returns false when the input is an object', () => {
      const result = isNullOrEmpty({a: 'test'});
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
