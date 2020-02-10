function lowerCaseWords(mixedArray) {
    result = new Promise ((resolve,reject) => {
        answerArray  = mixedArray.filter( element => typeof element == "string");
        answerArray = answerArray.map( element => element.toLowerCase());
        resolve(answerArray);
    });
    return result;
}

console.log(lowerCaseWords(["ADaaa",2,3,"dfsdfAA"]))
lowerCaseWords(["ADaaa",2,3,"dfsdfAA"]).then((val) => console.log(val));