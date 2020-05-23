import { DEFAULT_BOOLEAN, DEFAULT_NUMBER, DEFAULT_OBJECT } from '../default-values';

/**
 * Get a nested value from an object without encountering null or undefined errors
 *
 * @param obj - the object containing the nested value
 * @param dottedPath - the dotted path to the nested value in the object. Can contain array indexes (not in square brakets) as part of the dotted path (e.g. a.1.b).
 * @param defaultValue - the value to return if the path is not defined (default: null)
 */
export function getNested(obj: any, dottedPath: string, defaultValue: any = null): any {
  let value = defaultValue;
  try {
    value = dottedPath.split('.').reduce((a, b) => (a == null ? null : a[b]), obj);
    if (value == null) {
      return defaultValue;
    }
  } catch (err) {
    return defaultValue;
  }
  return value;
}

/**
 * Get a boolean from any given input.
 *
 * Optionally, choose the default value if the input value is undefined or null.
 */
export function getBoolean(value: any, defaultValue: boolean = DEFAULT_BOOLEAN): boolean {
  if (typeof value === 'string' && value.toLowerCase() === 'false') {
    return false;
  }
  return value == null ? defaultValue : !!value;
}

/**
 * Get a number from any given input.
 *
 * Optionally, choose the default value if the input value is undefined or null.
 */
export function getNumber(value: any, defaultValue: number = DEFAULT_NUMBER): number {
  let num = value == null ? defaultValue : Number(value).valueOf();
  if (num == null || isNaN(num)) {
    num = defaultValue;
  }
  return num;
}

/**
 * Get an object from any given input.
 *
 * Optionally, choose the default value if the input value is undefined or null.
 */
export function getObject(value: any, defaultValue: any = DEFAULT_OBJECT): any {
  let obj = getValueOrDefault(value, defaultValue);
  if (value != null && value.toString() !== '[object Object]') {
    obj = { value };
  }
  return obj;
}

/**
 * Get a value if it is defined, or else get the default value.
 *
 * Optionally, choose the default value if the input value is undefined or null.
 */
export function getValueOrDefault(value: any, defaultValue: any): any {
  return value == null ? defaultValue : value;
}

/**
 * Get a value if it is defined, or else get null.
 */
export function getValueOrNull(value: any): any {
  return getValueOrDefault(value, null);
}

/**
 * Check if a value is a function.
 */
export function isFunction(value: any): boolean {
  return typeof value === 'function';
}

/**
 * Check if a value is defined with a meaningful value.
 */
export function isNullOrEmpty(value: any): boolean {
  return value == null || (value.length != null && value.length === 0);
}
