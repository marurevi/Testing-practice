class Calculator {
  constructor(a, b, result) {
    this.a = a;
    this.b = b;
    this.result = result
  }
  add (a, b) {
    this.result = a + b;
    return this.result;
  }

  subtract (a, b) {
    this.result = a - b;
    return this.result;
  }

  divide (a, b) {
    if (b !== 0) {
      this.result = a/b;
      return this.result;
    }
  }

  multiply (a, b) {
    this.result = a * b;
    return this.result;
  }
}

module.exports = Calculator;