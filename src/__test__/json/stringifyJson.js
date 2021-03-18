/* eslint-disable no-undefined */
import stringifyJson from '../../core/json/stringifyJson';

describe('stringifies some JSON string', () => {
    it('should stringify properly', () => {
        const arr = [1, 2, 3];
        const obj = {a: 1, b: 2, c: 3, d: '4'};

        expect(stringifyJson(arr)).toBe(JSON.stringify(arr));
        expect(stringifyJson(obj)).toBe(JSON.stringify(obj));
        expect(stringifyJson(null)).toBe('null');
        expect(stringifyJson('')).toBe('');
        expect(stringifyJson(undefined)).toBe('undefined');
    });
});
