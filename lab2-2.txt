
const arrayOfNames = ['jaxx', 'tiny', 'clay']
const mixedArray = ['anarchy',99,true]

let makeUpperCase = (anArray) => {
   return new Promise((resolve, reject) => {
 
  for (var index in anArray)
  {
    if (!isNaN(anArray[index])) reject(result=`Error: Not all items in the array are strings!`);
    anArray[index] = anArray[index].toUpperCase();
  }
  resolve(result=anArray);
})};

let sortWords = (result) => {
   return result.sort();
}

makeUpperCase(arrayOfNames)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch(error => console.log(error))

makeUpperCase(mixedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch(error => console.log(error))

/*Expected output is:

[ 'CLAY', 'JAXX', 'TINY' ]
Error: Not all items in the array are strings!

*/