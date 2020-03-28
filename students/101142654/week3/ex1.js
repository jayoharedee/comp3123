const buffer_string = Buffer.from("normal text expression", "utf-8");

console.log("String output: ", buffer_string.toString());
console.log("Hex output: ", buffer_string.toString('hex'));
console.log("utf-8 output: ", buffer_string.toString('utf8', 0, 10));

const total_lentgh = buffer_array.length + buffer_string.length;
const joined_buffer = Buffer.concat([buffer_array, buffer_string], total_lentgh);

console.log("Concatenated output: ", joined_buffer);

console.log("JSON: ", joined_buffer.toJSON())
