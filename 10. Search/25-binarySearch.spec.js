const binarySearch = require('./25-binarySearch');

test('has to be -1', () => {
    expect(binarySearch([], -1)).toBe(-1);
    expect(binarySearch([0], 1)).toBe(-1);
    expect(binarySearch([0,2], 1)).toBe(-1);
});

test('gets search value position', () => {
    expect(binarySearch([1], 1)).toBe(0);
    expect(binarySearch([1,2], 1)).toBe(0);
    expect(binarySearch([1,2], 2)).toBe(1);
    expect(binarySearch([1,2,3], 1)).toBe(0);
    expect(binarySearch([1,2,3], 2)).toBe(1);
    expect(binarySearch([1,2,3], 3)).toBe(2);
    expect(binarySearch([1,2,3,4,5,6,7,8,9,10], 1)).toBe(0);
    expect(binarySearch([1,2,3,4,5,6,7,8,9,10], 3)).toBe(2);
    expect(binarySearch([1,2,3,4,5,6,7,8,9,10], 5)).toBe(4);
    expect(binarySearch([1,2,3,4,5,6,7,8,9,10], 7)).toBe(6);
    expect(binarySearch([1,2,3,4,5,6,7,8,9,10], 10)).toBe(9);
});