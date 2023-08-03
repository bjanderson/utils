import { DEFAULT_DATE } from '../default-values';
import { isNullOrEmpty } from '../primitive';

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
  return Number.isFinite(new Date(value).getTime());
}

export function toUTCTimeZone(value: any): Date {
  const d = getDate(value);
  if (isNullOrEmpty(d)) {
    return null;
  }
  const utc = Date.UTC(
    d.getFullYear(),
    d.getMonth(),
    d.getDate(),
    d.getHours(),
    d.getMinutes(),
    d.getSeconds(),
    d.getMilliseconds()
  );
  return new Date(utc);
}

export function toLocalTimeZone(value: any): Date {
  const d = getDate(value);
  if (isNullOrEmpty(d)) {
    return null;
  }
  const local = new Date(
    d.getFullYear(),
    d.getMonth(),
    d.getDate(),
    d.getHours(),
    d.getMinutes(),
    d.getSeconds(),
    d.getMilliseconds()
  );
  return local;
}
