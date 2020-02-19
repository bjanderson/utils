import { getValueOrNull } from '../primitive';

/**
 * Check if the given object has any properties in common with an instance of the given class.
 */
export function hasPropertyOf<T>(Clazz: new (o?: Partial<T>) => T, obj: any): boolean {
  if (Clazz == null || obj == null) {
    return false;
  }
  const model = new Clazz();
  const modelKeys = Object.keys(model);

  // eslint-disable-next-line no-restricted-syntax
  for (const key of modelKeys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return true;
    }
  }

  return false;
}

/**
 * Check if the given object has all properties in common with an instance of the given class.
 */
export function isInstanceOf<T>(Clazz: new (o?: Partial<T>) => T, obj: any): boolean {
  if (Clazz == null || obj == null) {
    return false;
  }
  const model = new Clazz();
  const modelKeys = Object.keys(model);

  // eslint-disable-next-line no-restricted-syntax
  for (const key of modelKeys) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }

  return true;
}

/**
 * If the given object is defined, create a new instance of the given class with it.
 * Otherwise return null.
 */
export function newIfDefined<T>(Clazz: new (o?: Partial<T>) => T, obj: any): T {
  const value = getValueOrNull(obj);
  if (value != null) {
    return new Clazz(value);
  }

  return null;
}
