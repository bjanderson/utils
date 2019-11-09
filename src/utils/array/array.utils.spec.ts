import {
  getArray,
  getArrayOfBooleans,
  getArrayOfModels,
  getArrayOfNumbers,
  getArrayOfStrings,
} from './array.utils';

class TestModel {
  public test: string;
  public x: string;
  constructor() {
    this.test = 'test';
    this.x = 'test';
  }
}

describe('array.utils', () => {
  describe('getArray(objs)', () => {
    it('is a function', () => {
      expect(typeof getArray).toEqual('function');
    });

    it('returns an empty array when objs is undefined', () => {
      const objs = undefined;
      const result = getArray(objs);
      const expected: any = [];
      expect(result).toEqual(expected);
    });

    it('returns an empty array when objs is null', () => {
      const objs = null;
      const result = getArray(objs);
      const expected: any = [];
      expect(result).toEqual(expected);
    });

    it('returns an array of strings objs is a string', () => {
      const objs = 'test';
      const result = getArray(objs);
      const expected = ['test'];
      expect(result).toEqual(expected);
    });

    it('returns objs when it is an array', () => {
      const objs = ['test'];
      const result = getArray(objs);
      const expected = ['test'];
      expect(result).toEqual(expected);
    });
  });

  describe('getArrayOfBooleans(objs)', () => {
    it('is a function', () => {
      expect(typeof getArrayOfBooleans).toEqual('function');
    });

    it('returns an empty array when the input is undefined', () => {
      const expected: any = [];
      const result: any = getArrayOfBooleans(undefined);
      expect(result).toEqual(expected);
    });

    it('returns an empty array when the input is null', () => {
      const expected: any = [];
      const result: any = getArrayOfBooleans(null);
      expect(result).toEqual(expected);
    });

    it('returns an array when the input is a single object', () => {
      const expected: any = [true];
      const result: any = getArrayOfBooleans('true');
      expect(result).toEqual(expected);
    });

    it('returns an array of booleans when the input is an array of items that can be converted to booleans', () => {
      const input: any = [true, false, 1, 0, 'true', 'false', {}, []];
      const expected: any = [true, false, true, false, true, false, true, true];
      const result: any = getArrayOfBooleans(input);
      expect(result).toEqual(expected);
    });

    it('excludes null and undefined values from the returned array', () => {
      const input: any = [true, null, undefined, true];
      const expected: any = [true, true];
      const result: any = getArrayOfBooleans(input);
      expect(result).toEqual(expected);
    });
  });

  describe('getArrayOfModels(clazz, objs)', () => {
    it('is a function', () => {
      expect(typeof getArrayOfModels).toEqual('function');
    });

    it('returns an empty array when objs is undefined', () => {
      const objs = undefined;
      const result = getArrayOfModels(TestModel, objs);
      const expected: any = [];
      expect(result).toEqual(expected);
    });

    it('returns an empty array when objs is null', () => {
      const objs = null;
      const result = getArrayOfModels(TestModel, objs);
      const expected: any = [];
      expect(result).toEqual(expected);
    });

    it('returns an array of models when objs is a single model', () => {
      const objs = new TestModel();
      const result = getArrayOfModels(TestModel, objs);
      const expected = [new TestModel()];
      expect(result).toEqual(expected);
    });

    it('returns an array of models when objs is an array of models', () => {
      const objs = [new TestModel()];
      const result = getArrayOfModels(TestModel, objs);
      const expected = [new TestModel()];
      expect(result).toEqual(expected);
    });

    it('returns an empty array when objs is not of the given model type', () => {
      const objs = [{ name: 'name' }];
      const result = getArrayOfModels(TestModel, objs);
      const expected: any = [];
      expect(result).toEqual(expected);
    });
  });

  describe('getArrayOfNumbers(objs)', () => {
    it('is a function', () => {
      expect(typeof getArrayOfNumbers).toEqual('function');
    });

    it('returns an empty array when the input is undefined', () => {
      const expected: any = [];
      const result: any = getArrayOfNumbers(undefined);
      expect(result).toEqual(expected);
    });

    it('returns an empty array when the input is null', () => {
      const expected: any = [];
      const result: any = getArrayOfNumbers(null);
      expect(result).toEqual(expected);
    });

    it('returns an array when the input is a single object', () => {
      const expected: any = [1];
      const result: any = getArrayOfNumbers('1');
      expect(result).toEqual(expected);
    });

    it('returns an array of numbers when the input is an array of items that can be converted to numbers', () => {
      const input: any = [
        100,
        1,
        0.1,
        0,
        -0.1,
        -1,
        -100,
        '100',
        '1',
        '0.1',
        '0',
        '-0.1',
        '-1',
        '-100',
      ];
      const expected: any = [100, 1, 0.1, 0, -0.1, -1, -100, 100, 1, 0.1, 0, -0.1, -1, -100];
      const result: any = getArrayOfNumbers(input);
      expect(result).toEqual(expected);
    });

    it('excludes null and undefined values from the returned array', () => {
      const input: any = [1, null, undefined, 2];
      const expected: any = [1, 2];
      const result: any = getArrayOfNumbers(input);
      expect(result).toEqual(expected);
    });
  });

  describe('getArrayOfStrings(objs)', () => {
    it('is a function', () => {
      expect(typeof getArrayOfStrings).toEqual('function');
    });

    it('returns an empty array when the input is undefined', () => {
      const expected: any = [];
      const result: any = getArrayOfStrings(undefined);
      expect(result).toEqual(expected);
    });

    it('returns an empty array when the input is null', () => {
      const expected: any = [];
      const result: any = getArrayOfStrings(null);
      expect(result).toEqual(expected);
    });

    it('returns an array when the input is a single object', () => {
      const expected: any = ['test'];
      const result: any = getArrayOfStrings('test');
      expect(result).toEqual(expected);
    });

    it('returns an array of strings when the input is an array of items that can be converted to strings', () => {
      const input: any = ['test', 100, true, { toString: () => 'test toString' }];
      const expected: any = ['test', '100', 'true', 'test toString'];
      const result: any = getArrayOfStrings(input);
      expect(result).toEqual(expected);
    });

    it('returns an array of empty strings for any input array elements that cannot be safely converted to a string', () => {
      const input: any = [['test array'], {}, () => 'test'];
      const expected: any = ['', '', ''];
      const result: any = getArrayOfStrings(input);
      expect(result).toEqual(expected);
    });

    it('excludes null and undefined values from the returned array', () => {
      const input: any = ['test 1', null, undefined, 'test 2'];
      const expected: any = ['test 1', 'test 2'];
      const result: any = getArrayOfStrings(input);
      expect(result).toEqual(expected);
    });
  });
});
