import { DEFAULT_DATE } from '../default-values';

/**
 * Format the given date as toLocaleDateString.
 */
export function formatDate(date: any): string {
  let formattedDate = 'Invalid Date';

  try {
    formattedDate = new Date(date).toLocaleDateString();
  } catch (err) {}

  return formattedDate;
}

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
  let isValid = false;

  try {
    const date = new Date(value);
    isValid = date.toString() !== 'Invalid Date';
  } catch (err) {}

  return isValid;
}
