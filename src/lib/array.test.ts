import { describe, it, expect } from '@jest/globals';
import { isArray, isNumberArray, isObjectArray, isStringArray } from './array';

describe('Array tests', () => {
    it.each([
        [isArray, [], true],
        [isArray, [1, 2, 3], true],
        [isArray, ['one', '2', 'three'], true],
        [isArray, ['one', 2, false], true],
        [isArray, [{ foo: 'bar' }], true],
        [isArray, '', false],
        [isArray, '1', false],
        [isArray, 'hello', false],
        [isArray, 'Anyone who wants to argue that a string is a character array can kiss my booty', false],
        [isNumberArray, [], false],
        [isNumberArray, [1, 2, 3], true],
        [isNumberArray, ['one', '2', 'three'], false],
        [isNumberArray, ['one', 2, false], false],
        [isNumberArray, [{ foo: 'bar' }], false],
        [isNumberArray, '', false],
        [isNumberArray, '1', false],
        [isNumberArray, 'hello', false],
        [isNumberArray, 'Anyone who wants to argue that a string is a character array can kiss my booty', false],
        [isObjectArray, [], false],
        [isObjectArray, [1, 2, 3], false],
        [isObjectArray, ['one', '2', 'three'], false],
        [isObjectArray, ['one', 2, false], false],
        [isObjectArray, [{ foo: 'bar' }], true],
        [isObjectArray, '', false],
        [isObjectArray, '1', false],
        [isObjectArray, 'hello', false],
        [isObjectArray, 'Anyone who wants to argue that a string is a character array can kiss my booty', false],
        [isStringArray, [], false],
        [isStringArray, [1, 2, 3], false],
        [isStringArray, ['one', '2', 'three'], true],
        [isStringArray, ['one', 2, false], false],
        [isStringArray, [{ foo: 'bar' }], false],
        [isStringArray, '', false],
        [isStringArray, '1', false],
        [isStringArray, 'hello', false],
        [isStringArray, 'Anyone who wants to argue that a string is a character array can kiss my booty', false],
    ])('Check %s: %s should return %s', (fn, value, expected) => {
        expect(fn(value)).toBe(expected);
    });
});
