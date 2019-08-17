import { hasPropertyOf, isInstanceOf, newIfDefined } from './model.utils';

class TestModel {
  test: string;
  x: string;
  constructor() {
    this.test = 'test';
    this.x = 'test';
  }
}

describe('model.utils', () => {

  describe('hasPropertyOf(clazz, obj)', () => {
    it('is a function', () => {
      expect(typeof hasPropertyOf).toEqual('function');
    });

    it('returns false when clazz is undefined', () => {
      const obj = {};
      const expected = false;
      const result = hasPropertyOf(null, obj);
      expect(result).toEqual(expected);
    });

    it('returns false when obj is undefined', () => {
      const obj = null;
      const expected = false;
      const result = hasPropertyOf(TestModel, obj);
      expect(result).toEqual(expected);
    });

    it('returns false when obj does not have any properties in common with clazz', () => {
      const obj = {name: 'name'};
      const expected = false;
      const result = hasPropertyOf(TestModel, obj);
      expect(result).toEqual(expected);
    });

    it('returns true when obj has properties in common with clazz', () => {
      const obj = {test: 'test'};
      const expected = true;
      const result = hasPropertyOf(TestModel, obj);
      expect(result).toEqual(expected);
    });

    it('returns true when obj is an instance of clazz', () => {
      const obj = new TestModel();
      const expected = true;
      const result = hasPropertyOf(TestModel, obj);
      expect(result).toEqual(expected);
    });
  });

  describe('isInstanceOf(clazz, obj)', () => {
    it('is a function', () => {
      expect(typeof isInstanceOf).toEqual('function');
    });

    it('returns false when clazz is undefined', () => {
      const obj = {};
      const expected = false;
      const result = isInstanceOf(null, obj);
      expect(result).toEqual(expected);
    });

    it('returns false when obj is undefined', () => {
      const obj = null;
      const expected = false;
      const result = isInstanceOf(TestModel, obj);
      expect(result).toEqual(expected);
    });

    it('returns false when obj does not have any properties in common with clazz', () => {
      const obj = {name: 'name'};
      const expected = false;
      const result = isInstanceOf(TestModel, obj);
      expect(result).toEqual(expected);
    });

    it('returns false when obj does not have all properties in common with clazz', () => {
      const obj = {test: 'test'};
      const expected = false;
      const result = isInstanceOf(TestModel, obj);
      expect(result).toEqual(expected);
    });

    it('returns true when obj is an instance of clazz', () => {
      const obj = new TestModel();
      const expected = true;
      const result = isInstanceOf(TestModel, obj);
      expect(result).toEqual(expected);
    });
  });

  describe('newIfDefined(clazz: any, obj: any)', () => {
    it('is a function', () => {
      expect(typeof newIfDefined).toEqual('function');
    });

    it('returns null when the input obj is undefined', () => {
      const result: any = newIfDefined(TestModel, undefined);
      expect(result).toBeNull();
    });

    it('returns a new instance of the given class when the input obj is defined', () => {
      const result: any = newIfDefined(TestModel, {});
      expect(result instanceof TestModel).toEqual(true);
    });
  });
});
