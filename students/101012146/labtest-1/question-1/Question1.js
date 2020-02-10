const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

const lowerCaseWords  = arr => {
    return new Promise((resolve, reject) => {
        let wordArray = []
        for(var i = 0; i < arr.length; i++){
            if(typeof arr[i] === 'string'){
                wordArray.push(arr[i]);
            }

        }
        if (wordArray.length != 0){
            for(var i = 0; i < wordArray.length; i++){
                wordArray[i] = wordArray[i].toLowerCase();
            }
            resolve(wordArray);
        }else{
            reject('No words in the array');
        }
    });
  };
  
  lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  