import { describe, it, expect } from '@jest/globals';
import { isNumber, isFinite } from './number';

describe('Number checks', () => {
    it.each([
        [isNumber, null, false],
        [isNumber, undefined, false],
        [isNumber, '', false],
        [isNumber, 'string', false],
        [isNumber, 0, true],
        [isNumber, 10, true],
        [isNumber, -10, true],
        [isNumber, Math.PI, true],
        [isNumber, 3.2, true],
        [isNumber, [], false],
        [isNumber, [0], false],
        [isNumber, {}, false],
        [isFinite, null, false],
        [isFinite, undefined, false],
        [isFinite, '', false],
        [isFinite, 'string', false],
        [isFinite, 0, true],
        [isFinite, 10, true],
        [isFinite, -10, true],
        [isFinite, Math.PI, true],
        [isFinite, 3.2, true],
        [isFinite, [], false],
        [isFinite, [0], false],
        [isFinite, {}, false],
        [isFinite, Number.POSITIVE_INFINITY, false],
        [isFinite, Number.NEGATIVE_INFINITY, false],
    ])('%s check: %s is %s', (fn, value, expected) => {
        expect(fn(value)).toBe(expected);
    });
});
