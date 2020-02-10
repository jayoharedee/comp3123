function lowerCaseWords(arr){
    let promise1 = new Promise((resolve, reject) =>{
        var newArr = []
        for (var x = 0; x < arr.length; x++)
        {
            if(typeof(arr[x]) == 'string'){
                arr[x] = arr[x].toLowerCase();
                newArr.push(arr[x])
            }
        }
        if (newArr.length > 0){
            resolve(console.log(newArr));
        }
        else{
            reject(console.log('array invalid'))
        }
        })
}


const mixedArray = ['PIZZA', 10, true, 25, false, 'WINGS']
lowerCaseWords(mixedArray)