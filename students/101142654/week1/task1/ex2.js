const capitalize = ([first,...rest]) => {
    return first.toUpperCase() + rest.join('').toLowerCase();
}

console.log(capitalize('foobar'));
console.log(capitalize('nodeJs'));