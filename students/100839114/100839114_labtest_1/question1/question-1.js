const mixedArray = ['Pizza',10,true,25,false,'Wings']
const returnWords = [];
const lowerCase = (array) => {
    return new Promise((resolve, reject) => {
      
     let lowerArray = array.map(word => {
      
       if(typeof word === 'string'){
            returnWords.push(word.toLowerCase())
       }else{
           
       }
     })
     resolve(returnWords)
   })
 }
 
 lowerCase(mixedArray).then((result) => console.log(result))
   
