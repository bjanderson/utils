import { DateTime } from 'luxon';
import { DEFAULT_DATE } from '../default-values';
import { getString } from '../string';

/**
 * Get a date from the given input, or else get an empty string.
 */
export function getDate(value: any, defaultValue: any = DEFAULT_DATE): string {
  const d = DateTime.fromJSDate(new Date(value));
  return getString(d.isValid ? d.toISO() : DateTime.fromJSDate(defaultValue).toISO());
}

/**
 * Check if a value can be converted to a date.
 */
export function isDate(value: any): boolean {
  return DateTime.fromJSDate(value).isValid;
}

// export function toUTCTimeZone(value: any): string {
// const d = getDate(value);
// if (isNullOrEmpty(d)) {
//   return null;
// }
// const utc = Date.UTC(
//   d.getFullYear(),
//   d.getMonth(),
//   d.getDate(),
//   d.getHours(),
//   d.getMinutes(),
//   d.getSeconds(),
//   d.getMilliseconds()
// );
// return new Date(utc);
// return DateTime.fromJSDate(new Date(value)).setZone('UTC').toISO();
// }

// export function toLocalTimeZone(value: any): string {
// const d = getDate(value);
// if (isNullOrEmpty(d)) {
//   return null;
// }
// const local = new Date(
//   d.getFullYear(),
//   d.getMonth(),
//   d.getDate(),
//   d.getHours(),
//   d.getMinutes(),
//   d.getSeconds(),
//   d.getMilliseconds()
// );
// return local;
// return DateTime.fromJSDate(new Date(value)).toLocal().toISO();
// }
