function lowerCaseWords(arr){

    return promise = new Promise((resolve, reject) =>{

        var newArr = [];
        var j = 0;

        for (var i=0; i < arr.length; i++){
            if(typeof arr[i] == 'string'){
                newArr[j] = arr[i].toLowerCase();
                j++;
            }
        }
        resolve(newArr);
        reject('Something went wrong');
    })
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(err => console.log(err));
