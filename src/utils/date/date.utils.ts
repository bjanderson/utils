
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
export function getDate(date: any): Date | string {
  let theDate: Date | string = '';

  if (isDate(date)) {
    theDate = new Date(date);
  }

  return theDate;
}

/**
 * Check if a value can be converted to a date.
 */
export function isDate(date: any): boolean {
  let isValid = false;

  try {
    const d = new Date(date);
    isValid = d.toString() !== 'Invalid Date';
  } catch (err) {}

  return isValid;
}
