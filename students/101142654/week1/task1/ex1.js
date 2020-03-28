function greeter_old (myArray, counter){
    var greetText = 'Hello ';
    for (var index = 0; index < myArray.length; index++){
        console.log(greetText + myArray[index]);
    }
}

const greeter_new = (myArray) => {
    let greetText = 'Hello';
    for (const element of myArray){
        console.log(`${greetText}`, element);
    }
}

greeter_old(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

console.log("=======================")

greeter_new(['Randy Savage', 'Ric Flair', 'Hulk Hogan']);
