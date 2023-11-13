const {value} = require('./example');
const request = require('supertest');



    it('sum of a,b', () => {
        const result = value(2,2);
        expect(result).toBe(4);
    });

    it('sum is ', () => {
        const result = value(2,3);
        expect(result).toBe();
    });

    it('fail', () => {
        const result = val(2,3);
        expect(result).toBe();
    });
