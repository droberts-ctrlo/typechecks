import { describe, it, expect } from '@jest/globals';
import { isBoolean } from './boolean';

describe('Boolean checks', () => {
    it.each([
        [true, true],
        [false, true],
        ['', false],
        [0, false],
        ['false', false],
        ['true', false],
    ])('When given input is %s the result is %s', (value, expected) => {
        expect(isBoolean(value)).toBe(expected);
    });
});
