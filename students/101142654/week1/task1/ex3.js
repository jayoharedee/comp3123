const colors = ['red', 'green', 'blue'];

const capitalize = ([first,...rest]) => {
    return first.toUpperCase() + rest.join('').toLowerCase();
}

const capitalizedColors = colors.map(capitalize);

console.log(capitalizedColors);
