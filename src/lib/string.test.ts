import { describe, it, expect } from '@jest/globals';
import { isString, isEmptyString, isNotEmptyString, isEmptyOrWhitespace, isNotEmptyOrWhitespace } from './string';

describe('String checks', () => {
    it.each(
        [
            [isString, '', true],
            [isString, 'Hello', true],
            [isString, '0', true],
            [isString, 0, false],
            [isEmptyString, '', true],
            [isEmptyString, (Array.from({ length: 10 }, () => ' ')).join(''), false],
            [isEmptyString, 'hello', false],
            [isEmptyString, '0', false],
            [isEmptyString, 0, false],
            [isNotEmptyString, '', false],
            [isNotEmptyString, ' ', true],
            [isNotEmptyString, '\t', true],
            [isNotEmptyString, (Array.from({ length: 10 }, () => ' ')).join(''), true],
            [isNotEmptyString, 'hello', true],
            [isNotEmptyString, '0', true],
            [isNotEmptyString, 0, false],
            [isEmptyOrWhitespace, '', true],
            [isEmptyOrWhitespace, ' ', true],
            [isEmptyOrWhitespace, (Array.from({ length: 10 }, () => ' ')).join(''), true],
            [isEmptyOrWhitespace, '\t', true],
            [isEmptyOrWhitespace, 'hello', false],
            [isEmptyOrWhitespace, '0', false],
            [isEmptyOrWhitespace, 0, false],
            [isNotEmptyOrWhitespace, '', false],
            [isNotEmptyOrWhitespace, ' ', false],
            [isNotEmptyOrWhitespace, (Array.from({ length: 10 }, () => ' ')).join(''), false],
            [isNotEmptyOrWhitespace, '\t', false],
            [isNotEmptyOrWhitespace, 'hello', true],
            [isNotEmptyOrWhitespace, '0', true],
            [isNotEmptyOrWhitespace, 0, false],
        ])('Check %s: %s is %s', (fn, value, expected) => {
        expect(fn(value)).toBe(expected);
    });
});
