import stringLength from './functions.js';

const string = /Hello world!/;

test('The parameter is not a string', () => {
  expect(string).stringMatching(/Hello world!/);
});

test('The string is empty.', () => {
  expect(stringLength(string)).toBeLessThan(1);
});

test('The string is too long. (Max: 10 characters)', () => {
  expect(stringLength(string)).toBeGreaterThan(10);
});
