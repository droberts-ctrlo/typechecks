import { isNotNullOrUndefined } from './general';

/**
 * Check if a value is a number
 * @param value The value to check
 * @returns True if the value is a number, else false
 */
export const isNumber = (value: unknown): value is number => isNotNullOrUndefined(value) && (typeof value === 'number');

/**
 * Checks if a value is finite
 * @param value The value to check
 * @returns True if the value is finite, otherwise false
 */
export const isFinite = (value: unknown): value is number => isNumber(value) && Number.isFinite(value);

/**
 * Check if a value is infinite
 * @param value The value to check
 * @returns True if the value is infinite, otherwise false
 */
export const isInfinite = (value: unknown): value is number => isNumber(value) && !isFinite(value);

/**
 * Check if a number is an integer
 * @param value The value to check
 * @returns True if the number is an integer, otherwise false
 */
export const isInteger = (value: unknown): value is number => isNumber(value) && Number.isInteger(value);

/**
 * Check to see if a value is Not a Number.
 * @param value The value to check
 * @returns True if the value is Not a Number (NaN), false otherwise
 */
export const isNaN = (value: unknown): value is number => isNumber(value) && Number.isNaN(value);

/**
 * Check if a value is not an integer
 * @param value The value to check
 * @returns True if the number is not an integer, otherwise false
 */
export const isNotInteger = (value: unknown): value is number => isNumber(value) && !isInteger(value);

/**
 * Check if a value is a number (i.e. *not* NaN)
 * @param value The value to check
 * @returns True if the value is a number, false if not
 */
export const isNotNan = (value: unknown): value is number => isNumber(value) && !isNaN(value);
