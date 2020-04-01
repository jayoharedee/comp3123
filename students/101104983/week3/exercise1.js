// Exercise 1
const buffer_array = Buffer.from([ 8, 6, 7, 5, 3, 0 ,9]);

const buffer_string = Buffer.from("I'm a string!", "utf-8");

//#1
console.log(buffer_string.toString());
//#2
console.log(buffer_string.toString('hex'));
//#3
console.log(buffer_string.toString('utf8', 0,10));
//#4
let joined_array = [buffer_array, buffer_string];
let joined_buffer = Buffer.concat(joined_array)
console.log(joined_buffer);
//#5
const json = JSON.stringify(joined_buffer);
console.log(json);