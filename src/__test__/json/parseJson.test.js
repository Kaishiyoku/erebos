/* eslint-disable no-undefined */
import parseJson from '../../core/json/parseJson';

describe('parses some JSON string', () => {
    it('should parse a valid JSON string', () => {
        const arr = [1, 2, 3];
        const obj = {a: 1, b: 2, c: 3, d: '4'};

        expect(parseJson(JSON.stringify(arr))).toEqual(arr);
        expect(parseJson(JSON.stringify(obj))).toEqual(obj);
        expect(parseJson('null')).toBeNull();
        expect(parseJson('')).toBeNull();
        expect(parseJson(undefined)).toBeNull();
    });

    it('should return NULL for an invalid JSON string', () => {
        expect(parseJson('---')).toBeNull();
    });
});
