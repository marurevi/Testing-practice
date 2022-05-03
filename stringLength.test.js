const stringLength = require('./stringLength.js');



test('The parameter is not a string', () => {
  expect(string).stringMatching(/^Alic/);
});

test('The string is empty.', () => {
  expect(stringLength(string)).toBeLessThan(1);
});

test('The string is too long. (Max: 10 characters)', () => {
  expect(stringLength(string)).toBeGreaterThan(10);
});


