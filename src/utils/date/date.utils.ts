import * as moment from 'moment';
import { DEFAULT_DATE } from '../default-values';

/**
 * Format the given date as toLocaleDateString.
 */
export function formatDate(value: any, format: string = 'L'): string {
  return moment(value).format(format);
}

/**
 * Get a date from the given input, or else get an empty string.
 */
export function getDate(
  value: any,
  format = 'MM/DD/YYYY',
  defaultValue: any = DEFAULT_DATE
): Date {
  const date = moment(value, format).toDate();
  return isDate(date) ? date : defaultValue;
}

/**
 * Check if a value can be converted to a date.
 */
export function isDate(value: any): boolean {
  return moment.isDate(value) && value.toString() !== 'Invalid Date';
}
