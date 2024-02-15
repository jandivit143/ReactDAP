// "test" : "jest"
// "test" : "jest sum.test.js"
// "test" : "jest --coverage"

test('two plus two is four!', () => {
    expect(2+2).toBe(4);
})

// test('Object Assignment!', () => {
test.skip('Object Assignment!', () => {
    const data = {one:1};
    data['two'] = 2;
    expect(data).toEqual({one:1,two:2});
})

describe('suite1', () => {
// describe.only('suite1', () => {
    test('null test!', () => {
        const n = null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
    })
    
    test('zero test!', () => {
        const n = 0;
        expect(n).not.toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
    })
})