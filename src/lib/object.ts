import { isNotNullOrUndefined } from './general';

/**
 * Check if a value is an object and not an array
 * @param value The value to check
 * @returns True if the value is not an object (and not an array), otherwise false
 */
export const isObject = (value: unknown): value is object => isNotNullOrUndefined(value) && typeof value === 'object' && !Array.isArray(value);
