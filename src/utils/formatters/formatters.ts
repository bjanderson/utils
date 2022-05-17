import { getNumber } from '../primitive';
import { getString } from '../string';

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

export function dollarsToNum(dollars: string): number {
  return getNumber(parseFloat(getString(dollars).replace(/[$,\s]/g, '')));
}
