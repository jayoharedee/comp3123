const mixedWords = ['PIZZA', 10, true, 25, false,'Wings']

const lowerCaseWords = (array) => {
    return new Promise(function(res, rej){
        if (array) {
            res(wordArray = array.filter(n => typeof n === 'string').map(f => f.toLowerCase()));
        }
        else {
                rej("No String")
        }
        });
    }
    
lowerCaseWords(mixedWords).then((result) => console.log(result)).catch(error => console.log(error))