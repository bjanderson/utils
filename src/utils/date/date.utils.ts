import { DEFAULT_DATE } from '../default-values';

/**
 * Get a date from the given input, or else get an empty string.
 */
export function getDate(value: any, defaultValue: any = DEFAULT_DATE): Date {
  return isDate(value) ? new Date(value) : defaultValue;
}

/**
 * Check if a value can be converted to a date.
 */
export function isDate(value: any): boolean {
  return new Date(value).toString() !== 'Invalid Date';
}
