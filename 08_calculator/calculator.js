const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
  let sum = 0
	for (const arg of arr) {
    sum += arg
  }
  return sum
};

const multiply = function(arr) {
  product = 1
  for (const arg of arr) {
    product *= arg
  }
  return product
};

const power = function(a, b) {
  return a**b
};

const factorial = function(a) {
  let factorial = 1
	for (let i = a; i > 0; i--) {
    factorial *= i
  }
  return factorial
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
