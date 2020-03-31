// declare const Buffer;
// Exercise 1: 
// Write node script file that use the above two buffers and does the following:
// - convert buffer_string to a string and output
// - convert buffer_string to hex and output
// - convert buffer_string to utf-8 and read from 0 to 10
// - join the buffer_array and buffer_string and output
// - convert the joined_buffer to JSON and output (using Buffer.concat)

const buffer_array = Buffer.from([8, 6, 7, 5, 3, 0, 9]);
const buffer_string = Buffer.from("I'm a string!", "utf-8");

console.log('> convert buffer_string to a string and output');
console.log(`  ${buffer_string.toString()}\n`);

console.log('> convert buffer_string to hex and output');
console.log(`  ${buffer_string.toString('hex')}\n`);

console.log('> convert buffer_string to utf-8 and read from 0 to 10');
console.log(`  ${buffer_string.toString('utf-8', 0,10)}\n`);

console.log('> join the buffer_array and buffer_string and output');
console.log(  Buffer.concat([buffer_array,buffer_string]) );
console.log()

console.log('> convert the joined_buffer to JSON and output (using Buffer.concat)');
console.log(`  ${JSON.stringify(Buffer.concat([buffer_array,buffer_string]))}`);


// var buffer = new Buffer([1,2,3])
// var arr = Array.prototype.slice.call(buffer, 0)
// console.log(arr)