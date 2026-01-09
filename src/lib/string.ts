import { isNotNullOrUndefined } from './general';

/**
 * Check if a value is a string
 * @param value The value to check
 * @returns True if the value is a string, otherwise false
 */
export const isString = (value: unknown): value is string => isNotNullOrUndefined(value) && typeof (value) == 'string';

/**
 * Check if a value is an empty string
 * @param value The value to check
 * @returns True if the value is an empty string, otherwise false
 */
export const isEmptyString = (value: unknown): value is string => isString(value) && value == '';

/**
 * Check if a value is *not* an empty string
 * @param value The value to check
 * @returns True if the value is not an empty string, otherwise false
 */
export const isNotEmptyString = (value: unknown): value is string => isString(value) && value != '';

/**
 * Check if a value is empty or whitespace
 * @param value The value to check
 * @returns True if the value is an empty string or whitespace, else false
 */
export const isEmptyOrWhitespace = (value: unknown): value is string => isString(value) && /^\s*$/i.test(value);

/**
 * Check if a value is *not* empty or whitespace
 * @param value The value to check
 * @returns True if the value is not an empty string or whitespace, else false
 */
export const isNotEmptyOrWhitespace = (value: unknown): value is string => isString(value) && !isEmptyOrWhitespace(value);
