/**
 * Check if a value is null
 * @param value The value to check
 * @returns True if the value is null, otherwise false
 */
export const isNull = (value: unknown): value is null => value === null;

/**
 * Check if a value is undefined
 * @param value The value to check
 * @returns True if a value is undefined, otherwise false
 */
export const isUndefined = (value: unknown): value is undefined => value === undefined;

/**
 * Check if a value is null or undefined
 * @param value The value to checked
 * @returns True if a value is undefined or null, otherwise false
 */
export const isNullOrUndefined = (value: unknown): value is undefined | null => isNull(value) || isUndefined(value);

/**
 * Check if a value is *not* null or undefined
 * @param value The value to check
 * @returns True if a value is not null or undefined, otherwise false
 */
export const isNotNullOrUndefined = (value: unknown): value is unknown => !isNullOrUndefined(value);
