
// exercise 1
const greeter = (myArray, counter) => {
    let greenText = 'Hello ';
    for (var arr of myArray) {
        console.log(`${greenText} ${arr}`);
    }
}

greeter(['Randy Savage','Ric Flair','Hulk Hogan'],3);

//exercise 2
const capitlize = (str) =>{
    const chars = [...str];
    chars[0]= chars[0].toUpperCase();
    return chars.join('');
}

// teachers way to do exercise 2
// const capitlize = ([first, ...rest])=>
//     first.toUpperCase()+rest.join('').toLowerCase();

console.log(capitlize('foobar'))
console.log(capitlize('nodeJs'))

//exercise 3
const colors = ['red','green','blue','emerald']
const capitalizedColours = colors.map(capitlize)
console.log(capitalizedColours)

//exercise 4
var values = [1,60,34,30,20,5]
const filterLessThan20 = numbers =>{
    return numbers.filter(word=>word<20);
}

console.log(filterLessThan20(values));

//exercise 5
var array = [1,2,3,4]
const sum = numbers =>{
    const adder=(accumulator, currentValue) => accumulator+currentValue;
    const total = numbers.reduce(adder);
    return total;
}

const product = numbers =>{
    const product2=(accumulator, currentValue) => accumulator*currentValue;
    const total = numbers.reduce(product2);
    return total;
}

console.log(sum(array));
console.log(product(array));

//exercise 6
class Car {
    constructor (model,year) {
        this.model = model;
        this.year = year;
    }

    details(){
        return 'Model: '+ this.model +' '+this.year;
    }

}

class Sedan extends Car {
    constructor(model, year,balance){
        super(model,year);
        this.balance = balance;
    }

    info(){
        return this.model +' has a balance of $'+this.balance;
    }

}

const car2 = new Car('Pontiac Firebird',1976);
console.log(car2.details());
const sedan = new Sedan('Volvo SD',2018,30000);
console.log(sedan.info())
