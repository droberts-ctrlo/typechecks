import { describe, expect, it } from '@jest/globals';
import { isObject } from './object';

describe('object tests', () => {
    it.each([
        [isObject, null, false],
        [isObject, undefined, false],
        [isObject, '', false],
        [isObject, 'string', false],
        [isObject, 0, false],
        [isObject, [], false], // We don't want Arrays to return as objects
        [isObject, {}, true],
    ])('%s tests: checks %s returns %s', (fn, value, expected) => {
        expect(fn(value)).toBe(expected);
    });
});
