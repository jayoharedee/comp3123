const mixedArray = ['PIZZA',10,true,25,false,'Wings'];

const lowerCaseWords = (array) => {
    p = new Promise((resolve,reject) =>{
        array = array.filter(function(e){
            return typeof e === 'string';
        })
        let final = array.map(str =>{
            return str.toLowerCase();
        })
        resolve(final)
    })
    return p;

}

lowerCaseWords(mixedArray).then(result => console.log(result))