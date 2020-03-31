
// Exercise 1: 
// Rewrite the following code block using ES6 syntax,
// ie. const, let, arrow function, template literals and for..of
console.log('Exercise 1:')
var gretter = (myArray, counter) => {
    let result = '';
    for (let index in myArray) {
        result += (`Hello ${myArray[index]}\n`);
    }
    return result;
}
console.log(gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3));



// Exercise 2: 
// Using destructuring assignment syntax and the spread operator,
// write a function will capitalize the first letter of a string.

console.log()
console.log('Exercise 2:')
var capitalize = (value) => {
    [first,...rest] = value;
    return first.charAt(0).toUpperCase() + rest.join('');
}
console.log(capitalize('fooBar')) ; 
console.log(capitalize('nodeJs')) ;

// [first,...rest] = 'lazaro';
// console.log(rest);
// console.log(first.toUpperCase() + rest);
// var capitalize = (s) => {
//     if (typeof s !== 'string') return ''
//     return s.charAt(0).toUpperCase() + s.slice(1)
// }


// Exercise 3: 
// Using array.proto.map create function to use the capitalize method in Exercise 2
// to upper case the first character of each Color in the following array..

console.log()
console.log('Exercise 3:')
const color = ['red','gree', 'blue'];
var capitalizeColors = color.map(
    index => capitalize(index)
);
console.log(capitalizeColors);



// Exercise 4: 
// Using array.proto.filter create a function that will filter out 
// all the values of the array that are less than twenty.

console.log()
console.log('Exercise 4:')
var values = [1, 60, 34, 30, 20, 5];
var filterLessThan20 = values.filter(
    values => values < 20
);
console.log(filterLessThan20);



// Exercise 5: 
// Using array.proto.reduce create calculate the sum and product of a given array.

console.log()
console.log('Exercise 5:')
var array = [1, 2, 3, 4];
var calculateSum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
var calculateProduct = array.reduce(
    (accumulator, currentValue) => accumulator * currentValue
);
console.log(calculateSum);
console.log(calculateProduct);



// Exercise 6: 
// - Using ES6 syntax for class and subclass using extends to create a Sedan subclass
//   which derives from Car Class. The parameters for the Car class is the model and year. 
//   The parameters for the subclass is the model, year and balance.
// - Use the super key word in the Sedan subclass to set the model and name in base Car constructor.

console.log()
console.log('Exercise 6:')
class Car {
    constructor(brand, year) {
        this.brand = brand;
        this.year =year;        
    }
    details(){
       return `Model: ${this.brand} Engine ${this.year}`;
    }
}
class Sedan extends Car{
    constructor(brand, year, price) {
        super(brand, year);
        this.price = price;        
    }
    info(){
       return `${this.brand} has a balance of $${this.price}`;
    }
}
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());
