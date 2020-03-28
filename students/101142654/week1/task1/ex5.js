const array = [1, 2, 3, 4];

const calculateSum = array.reduce(reducer = (accumulator, currentValue) => accumulator + currentValue);
const calculateProduct = array.reduce(reducer = (accumulator, currentValue) => accumulator * currentValue);

console.log(calculateSum);
console.log(calculateProduct);