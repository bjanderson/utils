import { getNumber } from '../primitive';
import { getString } from '../string';

/**
 * Convert a number to a string in USD currency format
 */
export function numToDollars(num: number): string {
  const numberFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  let str = getString(numberFormatter.format(num));

  if (str === '$NaN') {
    str = '';
  }

  return str;
}

/**
 * Convert a string in USD currency format to a number
 */
export function dollarsToNum(dollars: string): number {
  const str = getString(dollars)
    .replace(/[$),\s]/g, '')
    .replace(/[(]/g, '-');

  const num = getNumber(parseFloat(str));
  return num;
}

/**
 * Convert milliseconds to an abbreviated humanized string -
 * days/hours, hours/minutes, minutes/seconds, or just seconds depending on the number of milliseconds
 */
export function msToTime(milliSeconds: number): string {
  let time = Math.floor(milliSeconds / 1000);
  const s = time % 60;
  time = Math.floor(time / 60);
  const m = time % 60;
  time = Math.floor(time / 60);
  const h = time % 24;
  time = Math.floor(time / 24);
  const d = time;
  if (d) {
    return `${d}d ${h}h`;
  }
  if (h) {
    return `${h}h ${m}m`;
  }
  if (m) {
    return `${m}m ${s}s`;
  }
  return `${s}s`;
}
