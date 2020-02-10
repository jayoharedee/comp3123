
const lowerCaseWords = arr => {
    return new Promise((resolve, reject) => {
        let wordsArray = []
        for(let i =0; i < arr.length; i++){
            if(arr[i].typeof == 'string'){
                wordsArray.push(arr[i]);
            }
        }
      if (wordsArray.length !=0) {
        resolve(
            wordsArray.map.toLowerCase()
        );
      } else {
        reject('No words in the array!');
      }
    });
  };
  
    const mixedArray = ['PIZZA', 10, true, false, 'Wings']
  
  lowerCaseWords(mixedArray)
  .then(result => console.log(result))
  .catch(error => console.log(error));

  