const stringLength = require('./stringLength.js');

test('The parameter is not a string', () => {
  //Arrange
  const expected = /^Alic/;

  //Act & Assert
  expect.not.stringMatching(expected);
});

test('The string is empty.', () => {
   
  expect(stringLength('')).toBeLessThan(1);
});

test('The string is too long. (Max: 10 characters)', () => {
  const string = 'ThisIsAbigString';

  expect(stringLength(string)).toBeGreaterThan(10);
});


