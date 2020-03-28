const right = ([first,...rest]) => {
    return rest.slice(-3).join("") + first + rest.slice(0, -3).join("");
}

console.log(right('Python'));
console.log(right("JavaScript"));
console.log(right("Hi"));