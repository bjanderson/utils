import { DateTime } from 'luxon';
import { DEFAULT_DATE } from '../default-values';
import { getString } from '../string';

/**
 * Get a date from the given input, or else get an empty string.
 * Returns a UTC date by default.
 * @param value should be an ISO formatted date string
 */
export function getDate(
  value: string,
  options: any = { defaultValue: DEFAULT_DATE, timezone: 'UTC' }
): string {
  const d = DateTime.fromISO(value, { zone: options.timezone });
  return getString(
    d.isValid
      ? d.toISO()
      : DateTime.fromJSDate(options.defaultValue, { zone: options.timezone }).toISO()
  );
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
