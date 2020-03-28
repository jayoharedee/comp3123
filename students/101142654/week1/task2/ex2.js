const max = (num1, num2, num3) => {
    let largest = (num1 > num2 && num1 > num3) ? num1 :
        (num2 > num3 && num2 > num1) ? num2 :
        num3;
    return largest;
}

console.log(max (1, 0, 1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));