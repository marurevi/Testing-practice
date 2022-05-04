const Calculator = require('./calculator.js');

describe('myCalculator', () => {
  test('Adition', () => {
  const calc = new Calculator();
        
  expect(calc.add(3,5)).toEqual(8);
  expect(calc.add(3,7)).toEqual(10);
  expect(calc.add(0,6)).toEqual(6);
  expect(calc.add(8,0)).toEqual(8);
  expect(calc.add(-5,4)).toEqual(-1);
  })
        
  test('Subtract', () => {
  const calc = new Calculator();
        
  expect(calc.subtract(9,6)).toEqual(3);
  expect(calc.subtract(5,7)).toEqual(-2);
  expect(calc.subtract(9,0)).toEqual(9);
  expect(calc.subtract(0,4)).toEqual(-4);
  })
        
  test('Multiply', () => {
  const calc = new Calculator();
            
  expect(calc.multiply(9,4)).toEqual(36);
  expect(calc.multiply(-5,7)).toEqual(-35);
  expect(calc.multiply(9,0)).toEqual(0);
  expect(calc.multiply(1,4)).toEqual(4);
  })

  test('Divide', () => {
  const calc = new Calculator();
              
  expect(calc.divide(12,4)).toEqual(3);
  expect(calc.divide(-5,-1)).toEqual(5);
  expect(calc.divide(9,1)).toEqual(9);
  expect(calc.divide(1,4)).toEqual(0.25);
  expect(calc.divide(3,0)).toBeFalsy();  
  })
})
