export const defaultArray: any[] = [];
export const defaultBoolean = false;
export const defaultNumber = 0;
export const defaultObject: any = {};
export const defaultString = '';

/**
 * Get a boolean from any given input.
 *
 * Optionally, choose the default value if the input value is undefined or null.
 */
export function getBoolean(value: any, defaultValue: boolean = defaultBoolean): boolean {
  if (value === 'false') {
    value = false;
  }
  value = value == null ? defaultValue : !!value;
  return value;
}

/**
 * Get a number from any given input.
 *
 * Optionally, choose the default value if the input value is undefined or null.
 */
export function getNumber(value: any, defaultValue: number | null = defaultNumber): number | null {
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
export function getObject(value: any, defaultValue: any = defaultObject): any {
  value = getValueOrDefault(value, defaultValue);
  if (value != null && value.toString() !== '[object Object]') {
    value = {value};
  }
  return value;
}

/**
 * Get a string from any given input.
 *
 * Optionally, choose the default value if the input value is undefined or null.
 */
export function getString(value: any, defaultValue: string | null = defaultString): string | null {
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
  return value == null ||
    (value.length != null && value.length === 0);
}
