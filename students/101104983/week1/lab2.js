//Exercise 1: Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literals and for..of

const greeter = (myArray) => {
    for (name of myArray) {
        console.log('Hello ' + name);
    }
}

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'])
console.log('');

//Exercise 2: Using destructuring assignment syntax and the spread operator, write a function will capitalize the first letter of a string.

const capitalize = (input) => {
    let [first, ...rest] = input;
    return first.toUpperCase() + rest.join('').toLowerCase();
}

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));
console.log('');

//Exercise 3: Using array.proto.map create function to use the capitalize method in Exercise 2 to upper case the first character of each Color in the following array..

const colors = ['red', 'green', 'blue'];
const capitalizeColors = colors.map(capitalize);

console.log(capitalizeColors);
console.log('');

//Exercise 4: Using array.proto.filter create a function that will filter out all the values of the array that are less than twenty.

var values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = values.filter(num => num < 20);

console.log(filterLessThan20);
console.log('');

//Exercise 5: Using array.proto.reduce create calculate the sum and product of a given array.

var array = [1, 2, 3, 4]
const calculateSum = array.reduce((a, b) => a + b);
const calculateProduct = array.reduce((a, b) => a * b);

console.log(calculateSum);
console.log(calculateProduct);
console.log('');

//Exercise 6: Using ES6 syntax for class and subclass using extends to create a Sedan subclass which derives from Car Class. The parameters for the Car class is the model and year. The parameters for the subclass is the model, year and balance.
// Use the super key word in the Sedan subclass to set the model and name in base Car constructor.

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return 'Model: ' + this.model + ' ' + this.year
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    info() {
        return this.model + ' has a balance of $' + this.balance;
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());
