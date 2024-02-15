// CommonJS way of import
const sum = require('./sum');

// test case - TDD - Test Driven Development
test('Sum of 4 and 5 is 9!', () => {
    expect(sum(4,5)).toBe(9);
});