let mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

let lowerCaseWords = function(mixedArray) {
    return new Promise(function(resolve, reject) {
    
    // if(typeof mixedArray != 'array'){
    //     reject("You must provide an array!")
    // }

    let result = []
    
    mixedArray.forEach(element => {
        if(typeof element === 'string' || element instanceof String){
            result.push(element.toLocaleLowerCase('en-US'))
        }
    });
    
    resolve(result)

  }) 
}

lowerCaseWords(mixedArray).then(function (resolve) { 
    console.log(resolve); 
}).catch(function (reject) { 
    console.log(reject); 
})