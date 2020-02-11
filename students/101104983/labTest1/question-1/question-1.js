const lowerCaseWords = (mixedArr)=>{
    var promise = new Promise(function(resolve,reject){
        var words = mixedArr.filter(e => typeof e === 'string')
        let arr = words.map(str =>{
            return str.toLowerCase()
        })
        resolve(arr)
    })
    return promise;

}
var f = ['PIZZA',34,'Wings',true,'BoB']
console.log(lowerCaseWords(f))
