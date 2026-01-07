import { isNotNullOrUndefined } from './general';
import { isNumber } from './number';
import { isObject } from './object';
import { isString } from './string';

/**
 * Check a value is an array
 * @param value The value to check
 * @returns True if the value is an array, otherwise false
 */
export const isArray = (value: unknown): value is unknown[] => isNotNullOrUndefined(value) && Array.isArray(value);

/**
 * Check if a value is an empty array
 * @param value The value to check
 * @returns True if the value is an array, otherwise false
 */
export const isEmptyArray = (value: unknown): value is unknown[] => isArray(value) && value.length === 0;

/**
 * Check if a value is an array of numbers
 * @see isNumber
 * @param value The value to check
 * @returns True if the value is an array of numbers, otherwise false
 */
export const isNumberArray = (value: unknown): value is number[] => isArray(value) && value.reduce((last, i) => isNumber(i) && last, true) && !isEmptyArray(value);

/**
 * Check if a value is an array of objects
 * @see isObject
 * @param value The value to check
 * @returns True if the value is an array of objects, otherwise false
 */
export const isObjectArray = (value: unknown): value is object[] => isArray(value) && value.reduce((last, i) => isObject(i) && last, true) && !isEmptyArray(value);

/**
 * Check if a value is an array of strings
 * @see isString
 * @param value The value to check
 * @returns True if the value is an array of strings, otherwise false
 */
export const isStringArray = (value: unknown): value is string[] => isArray(value) && value.reduce((last, i) => isString(i) && last, true) && !isEmptyArray(value);
