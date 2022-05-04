const Calculator = require('./calculator.js');


test('Adition', () => {
const calc = new Calculator();

expect(calc.add(3,5)).toEqual(8);
expect(calc.add(3,7)).toEqual(10);
})