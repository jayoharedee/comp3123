function makeUpperCase(values){
    return new Promise((resolve, reject) =>{
        for (var v of values){
            if (typeof v === 'string'){
                continue
            }
            else{
                reject (`${values} is a mixed array`)
            }
        }
        values = values.map(v=>v.toUpperCase())
        resolve(values)
    })
}

function sortWords(values){
    return new Promise((resolve, reject)=>{
        resolve(values.sort())
    })
}

normal = ['lemon', 'apple', 'lime']
mixed = ['hedej', 99, 'dsad']

makeUpperCase(normal)
    .then(sortWords)
    .then((result)=>console.log(result))
    .catch(error=>console.log(error))
