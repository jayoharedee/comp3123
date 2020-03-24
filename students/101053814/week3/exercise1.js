const buffer_array = Buffer.from([8,6,7,5,3,0,9]);

const buffer_string = Buffer.from("I'm a string!","utf-8");

//conversion 1
console.log(buffer_string.toString())

//conversion 2
console.log(buffer_string.toString('hex'))

//conversion 3
const bs = buffer_string.toString();
var s = ""
for(var i=0;i<10;i++){
    s+=bs[i];
}
console.log(s);

//conversion 4
var arr = [buffer_array, buffer_string];
var joined  = Buffer.concat(arr);
console.log(joined);

//conversion 5
var j = joined.toJSON();
console.log(j);