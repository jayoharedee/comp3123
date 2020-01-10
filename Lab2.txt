

//Ex. 1 Lab 2
const gretter = (myArray, undefined) => {
  let str=``;
  for (var index in myArray)
  {
    str+=`Hello ${myArray[index]}\n`;
  }
  return str
}  

console.log(gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3));
// expected output: 
//Hello Randy Savage
//Hello Ric Flair
//Hello Hulk Hogan



// Ex. 2 Lab 2
const capitalize = (myString) => {
  const [ firstLetter, ...restOfTheLetters ] = myString;
  let str=``;
  for (var index in restOfTheLetters)
  {
    str+= restOfTheLetters[index].toLowerCase();
  }
 
 return firstLetter.toUpperCase()+str
}
console.log(capitalize('nodeJs')+'\n');
// expected output: Nodejs

//Ex. 3 Lab 2
const colors = ['red', 'green', 'blue']
const map2 = colors.map(x => capitalize(x)) 
console.log(map2+'\n');
// expected output: [Red,Green,Blue]

//Ex. 4 Lab 2
const values = [1,60,45,38,5];
const lessThan20 = values.filter(value => value < 20 )
console.log(lessThan20+ "\n");
// expected output: [ 1, 5 ]


//Ex. 5 Lab 2
const array = [1, 2, 3, 4];
const calculateSum = (accumulator, currentValue) => accumulator + currentValue;
console.log(array.reduce(calculateSum));

const calculateProduct = (accumulator, currentValue) => accumulator * currentValue;
console.log(array.reduce(calculateProduct)+ "\n");

// expected output: 
//10
//24


//Ex. 6 Lab 2
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model}, Year: ${this.year}`;
    }


}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    info() {
        return `Model: ${this.model}, balance: ${this.balance}`;
    }
    
}

function display(content) {
    console.log(content);
}

const car = new Car('Porsche', '1976');
const sedan = new Sedan('Volvo SD', '2017', '$30,000');
display(car.details());
display(sedan.info());

// expected output: 
//Model: Porsche, Year: 1976
//Model: Volvo SD, balance: $30,000
