export const DEFAULT_ARRAY: any[] = [];
export const DEFAULT_BOOLEAN = false;
export const DEFAULT_NUMBER = 0;
export const DEFAULT_OBJECT: any = {};
export const DEFAULT_STRING = '';
export const NOOP = () => undefined;

/**
 * Get a boolean from any given input.
 *
 * Optionally, choose the default value if the input value is undefined or null.
 */
export function getBoolean(value: any, defaultValue: boolean = DEFAULT_BOOLEAN): boolean {
  let bool;
  if (value === 'false') {
    bool = false;
  } else {
    bool = value == null ? defaultValue : !!value;
  }
  return bool;
}

/**
 * Get a number from any given input.
 *
 * Optionally, choose the default value if the input value is undefined or null.
 */
export function getNumber(value: any, defaultValue: number | null = DEFAULT_NUMBER): number | null {
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
 * Get a string from any given input.
 *
 * Optionally, choose the default value if the input value is undefined or null.
 */
export function getString(value: any, defaultValue: string | null = DEFAULT_STRING): string | null {
  let str = getValueOrDefault(value, defaultValue);

  if (Array.isArray(value) || isFunction(value)) {
    str = defaultValue;
  }

  if (str != null) {
    str = str.toString();
  }

  if (str === '[object Object]') {
    str = defaultValue;
  }

  return str;
}

/**
 * Get a value if it is defined, or else get the default value.
 *
 * Optionally, choose the default value if the input value is undefined or null.
 */
export function getValueOrDefault(value: any, defaultValue: any = null): any {
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
