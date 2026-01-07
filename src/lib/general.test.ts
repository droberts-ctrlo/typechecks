import { describe, it, expect } from '@jest/globals';
import { isNotNullOrUndefined, isNull, isNullOrUndefined, isUndefined } from './general';

describe('General type checks', () => {
    it.each([
        [isNull, null, true],
        [isNull, undefined, false],
        [isNull, '', false],
        [isNull, 'string', false],
        [isNull, 0, false],
        [isNull, 10, false],
        [isNull, -10, false],
        [isNull, [], false],
        [isNull, [null], false],
        [isNull, {}, false],
        [isUndefined, null, false],
        [isUndefined, undefined, true],
        [isUndefined, '', false],
        [isUndefined, 'string', false],
        [isUndefined, 0, false],
        [isUndefined, 10, false],
        [isUndefined, -10, false],
        [isUndefined, [], false],
        [isUndefined, [null], false],
        [isUndefined, {}, false],
        [isNullOrUndefined, null, true],
        [isNullOrUndefined, undefined, true],
        [isNullOrUndefined, '', false],
        [isNullOrUndefined, 'string', false],
        [isNullOrUndefined, 0, false],
        [isNullOrUndefined, 10, false],
        [isNullOrUndefined, -10, false],
        [isNullOrUndefined, [], false],
        [isNullOrUndefined, [null], false],
        [isNullOrUndefined, {}, false],
        [isNotNullOrUndefined, null, false],
        [isNotNullOrUndefined, undefined, false],
        [isNotNullOrUndefined, '', true],
        [isNotNullOrUndefined, 'string', true],
        [isNotNullOrUndefined, 0, true],
        [isNotNullOrUndefined, 10, true],
        [isNotNullOrUndefined, -10, true],
        [isNotNullOrUndefined, [], true],
        [isNotNullOrUndefined, [null], true],
        [isNotNullOrUndefined, {}, true],
    ])('%s check: %s should be %s', (fn, input, expected) => {
        expect(fn(input)).toBe(expected);
    });
});
