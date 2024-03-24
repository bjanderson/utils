import { DEFAULT_STRING } from '../default-values';
import { getValueOrDefault, isFunction } from '../primitive';

/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
/**
 * Get a string from any given input.
 *
 * Optionally, choose the default value if the input value is undefined or null.
 */
export function getString(value: any, defaultValue: string = DEFAULT_STRING): string {
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
 * Convert value string to all lowercase.
 */
export function lowerize(value: string): string {
  return getString(value).toLocaleLowerCase();
}

/**
 * Convert the value to all uppercase.
 */
export function upperize(value: string): string {
  return getString(value).toLocaleUpperCase();
}

/**
 * Convert the first character of the value to lowercase.
 */
export function lowercaseFirst(value: string): string {
  const str = getString(value);
  return `${lowerize(str.charAt(0))}${str.slice(1)}`;
}

/**
 * Convert the first character of the value to uppercase.
 */
export function uppercaseFirst(value: string): string {
  const str = getString(value);
  return `${upperize(str.charAt(0))}${str.slice(1)}`;
}

/**
 * Convert a kabob-case or PascalCase string to camelCase.
 */
export function camelFromKabobOrPascal(value: string): string {
  const str = lowercaseFirst(value);
  const parts = str.split('-');
  let camel = parts.shift();
  parts.forEach((part: string) => {
    camel += uppercaseFirst(part);
  });
  return camel;
}

/**
 * Convert a kabob-case or camelCase string to PascalCase.
 */
export function pascalFromKabobOrCamel(value: string): string {
  const str = camelFromKabobOrPascal(value);
  return uppercaseFirst(str);
}

/**
 * Convert a kabob-case string to snake_case.
 */
export function snakeFromKabob(value: string): string {
  return getString(value).replace(/-/g, '_');
}

/**
 * Convert a kabob-case string to capitalized SNAKE_CASE.
 */
export function upperSnakeFromKabob(value: string): string {
  return upperize(snakeFromKabob(value));
}

/**
 * Convert a kabob-case string to Title Case.
 */
export function titleFromKabob(value: string): string {
  const str = getString(value);
  const parts = str.split('-');
  let title = uppercaseFirst(parts.shift());
  parts.forEach((part: string) => {
    title += ` ${uppercaseFirst(part)}`;
  });
  return title;
}

/**
 * Convert any string to kabob-case.
 */
export function toKabob(value: string): string {
  const str = getString(value);
  if (isKabobCase(str)) {
    return str.replace(/--*/g, '-');
  }
  if (isSnakeCase(str)) {
    return lowerize(str).replace(/_/g, '-').replace(/--*/g, '-');
  }

  const kabob = str
    .replace(/  */g, '-')
    .replace(/__*/g, '-')
    .split('')
    .map((s, i) => {
      if (s === s.toLocaleUpperCase()) {
        if (i > 0 && /[a-z]/.test(str[i - 1])) {
          return `-${s.toLocaleLowerCase()}`;
        }

        return s.toLocaleLowerCase();
      }
      return s;
    })
    .join('')
    .replace(/--*/g, '-');
  return kabob.replace(/--*/g, '-');
}

export function isLowerCase(value: string): boolean {
  return value == null || value === value.toLocaleLowerCase();
}

export function isUpperCase(value: string): boolean {
  return value == null || value === value.toLocaleUpperCase();
}

export function isKabobCase(value: string): boolean {
  return value == null || (isLowerCase(value) && !/_/g.test(value) && !/ /g.test(value));
}

export function isCamelCase(value: string): boolean {
  return (
    value == null ||
    (/^[a-z]/.test(value.slice(0, 1)) &&
      !/-/g.test(value) &&
      !/ /g.test(value) &&
      !/_/g.test(value))
  );
}

export function isPascalCase(value: string): boolean {
  return (
    value == null ||
    (/^[A-Z]/.test(value) &&
      !isUpperCase(value) &&
      !/-/g.test(value) &&
      !/ /g.test(value) &&
      !/_/g.test(value))
  );
}

export function isSnakeCase(value: string): boolean {
  return value == null || (isUpperCase(value) && !/-/g.test(value) && !/ /g.test(value));
}

export function isTitleCase(value: string): boolean {
  return (
    value == null ||
    (/^[A-Z]/.test(value) &&
      !isUpperCase(value) &&
      !/-/g.test(value) &&
      !/_/.test(value) &&
      !/[a-z][A-Z]/g.test(value) &&
      (!/ /.test(value) || / [A-Z]/g.test(value)))
  );
}
