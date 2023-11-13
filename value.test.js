const {value} = require('./example');

    it('sum of a,b', () => {
        const result = value(2,2);
        expect(result).toBe(4);
    });

    it('sum is ', () => {
        const result = value(2,3);
        expect(result).toBe(5);
    });

    it('fail', () => {
        const result = val(2,3);
        expect(result).toBe();
    });

    
