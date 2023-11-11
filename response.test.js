const {response} = require('./example')

it('pass', () => {
    const result = response(2, 2);
    expect(result).toBe(4);
});

it('mult', () => {
    const result = response(3,2);
    expect(result).toBe(6);
});

it('multiple', () => {
    const res = response(3,1);
    expect(res).toBe(3)
});