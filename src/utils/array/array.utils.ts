import { hasPropertyOf } from '../model';
import { getBoolean, getNumber, getString, getValueOrDefault } from '../primitive';

/**
 * Convert the input to an array.
 *
 * If the input is a single object, it will be added to an array and returned.
 */
export function getArray(objs: any): any[] {
  objs = getValueOrDefault(objs, []);
  let array = [];

  if (isArray(objs)) {
    array = objs;
  } else {
    array = [objs];
  }

  return array;
}

/**
 * Convert the input to an array of booleans.
 *
 * If the input is a single object, it will be added to an array and returned.
 */
export function getArrayOfBooleans(objs: any): boolean[] {
  objs = getArray(objs);
  const array = [];

  for (let obj of objs) {
    if (obj != null) {
      obj = getBoolean(obj);
      array.push(obj);
    }
  }

  return array;
}

/**
 * Convert the input to an array of instances of the given class.
 *
 * If the input is a single object, it will be added to an array and returned.
 */
export function getArrayOfModels<T>(clazz: (new (o?: Partial<T>) => T), objs: any): T[] {
  objs = getArray(objs);
  const array = [];

  for (const obj of objs) {
    if (hasPropertyOf(clazz, obj)) {
      array.push(new clazz(obj));
    }
  }

  return array;
}

/**
 * Convert the input to an array of numbers.
 *
 * If the input is a single object, it will be added to an array and returned.
 */
export function getArrayOfNumbers(objs: any): number[] {
  objs = getArray(objs);
  const array = [];

  for (let obj of objs) {
    if (obj != null) {
      obj = getNumber(obj);
      array.push(obj);
    }
  }

  return array;
}

/**
 * Convert the input to an array of strings.
 *
 * If the input is a single object, it will be added to an array and returned.
 */
export function getArrayOfStrings(objs: any): string[] {
  objs = getArray(objs);
  const array = [];

  for (let obj of objs) {
    if (obj != null) {
      obj = getString(obj);
      array.push(obj);
    }
  }

  return array;
}

/**
 * Check if a value is an array.
 */
export function isArray(obj: any): boolean {
  return Array.isArray(obj);
}
