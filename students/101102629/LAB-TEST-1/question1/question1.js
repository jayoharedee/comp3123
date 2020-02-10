function lowerCaseWords(arr){
    const promise = new Promise((resolve, reject) => {let output = [];
    for (let i of arr){
        if(typeof i === 'string' || i instanceof String){
        output.push(i.toLowerCase())
        }
    }
    resolve(output);
    reject(new Error('There is no output...'));
});
return promise;
}