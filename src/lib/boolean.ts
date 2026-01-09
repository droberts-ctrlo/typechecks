import { isNotNullOrUndefined } from './general';

/**
 * Check if a value is a boolean
 * @param value The value to check
 * @returns True if the value is boolean, otherwise false
 */
export const isBoolean = (value: unknown): value is boolean => isNotNullOrUndefined(value) && (value === true || value === false);
