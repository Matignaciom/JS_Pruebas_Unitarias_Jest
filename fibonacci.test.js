const fibonacci = require('./app');

test('Fibonacci de 1 debería ser [0]', () => {
    expect(fibonacci(1)).toEqual([0]);
});

test('Fibonacci de 2 debería ser [0, 1]', () => {
    expect(fibonacci(2)).toEqual([0, 1]);
});

test('Fibonacci de 5 debería ser [0, 1, 1, 2, 3]', () => {
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
});

test('Fibonacci de 10 debería ser [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]', () => {
    expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test('Fibonacci de 0 debería ser un mensaje de error', () => {
    expect(fibonacci(0)).toBe('Invalid input');
});
