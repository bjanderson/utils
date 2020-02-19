import { hasPropertyOf } from '../model';
import { getBoolean, getNumber, getValueOrDefault } from '../primitive';
import { getString } from '../string';

/**
 * Convert the input to an array.
 *
 * If the input is a single object, it will be added to an array and returned.
 */
export function getArray(items: any): any[] {
  const objs = getValueOrDefault(items, []);
  let array = [];

  if (Array.isArray(objs)) {
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
export function getArrayOfBooleans(items: any): boolean[] {
  const objs = getArray(items);
  const array = [];

  objs.forEach((obj: any) => {
    if (obj != null) {
      array.push(getBoolean(obj));
    }
  });

  return array;
}

/**
 * Convert the input to an array of instances of the given class.
 *
 * If the input is a single object, it will be added to an array and returned.
 */
export function getArrayOfModels<T>(Clazz: new (o?: Partial<T>) => T, items: any): T[] {
  const objs = getArray(items);
  const array = [];

  objs.forEach((obj: any) => {
    if (hasPropertyOf(Clazz, obj)) {
      array.push(new Clazz(obj));
    }
  });

  return array;
}

/**
 * Convert the input to an array of numbers.
 *
 * If the input is a single object, it will be added to an array and returned.
 */
export function getArrayOfNumbers(items: any): number[] {
  const objs = getArray(items);
  const array = [];

  objs.forEach((obj: any) => {
    if (obj != null) {
      array.push(getNumber(obj));
    }
  });

  return array;
}

/**
 * Convert the input to an array of strings.
 *
 * If the input is a single object, it will be added to an array and returned.
 */
export function getArrayOfStrings(items: any): string[] {
  const objs = getArray(items);
  const array = [];

  objs.forEach((obj: any) => {
    if (obj != null) {
      array.push(getString(obj));
    }
  });

  return array;
}
