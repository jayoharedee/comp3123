
var compareNumToTen = function(number) {
  return new Promise(function(resolve, reject) {
    
    if ( number>10 ) {
      resolve(console.log(`${number} is greater than 10, success!`))
    } ;
    if ( number<10 )
    {
      reject(console.log(`${number} is less than 10, error!`));
    }
  });
}


console.log(compareNumToTen(15).then(function(uid) {
  
}))
//Expected output: > "15 is greater than 10, success!"


//************* two other versions promise +callback 


var request = require('request');
let url = "https://api.chucknorris.io/";

// A function that returns a promise to resolve into the data //fetched from the API or an error
let compareNumToTen = (num) => {
  return new Promise(
    (resolve, reject) => {
      request.get(url, function(error, response, data){
        if (error) reject(error);
          
        let fact = "";
        if (num >= 10) fact=`${num} is greater or equals 10, success!`
        else fact=`${num} is less than 10, error!`;
        resolve(fact);
      })
   }
 );
};

compareNumToTen(8)
  .then(fact => console.log(fact) // actually outputs a string
)
  .catch(error => console.log(error));


let compareNumToTen2 = (num) => {
  return new Promise((resolve, reject) => {
    if (num>=10) {
        let fact =`${num} is greater or equals 10, succes!`;
        resolve(console.log(fact));
    }
    reject(new Error(`${num} is less than 10, error!`));
})};

// The promise has two params as we know, `resolve` and `reject`
// below I am creating functions for the callbacks needed to resolve or reject the orinuse
const onResolved = (resolvedValue) => console.log(resolvedValue);
const onRejected = (rejectedValue) => console.log(rejectedValue);

// below i have passed both functions as callbacks to our promise
// notice the `.then` on our promise? This contains the callbacks
// to fire whether our promise resolves or rejects. we have one
// callback for each case scenario

//compareNumToTen2(10).then(onResolved, onRejected);

// then can be called multiple times depending on how the promise is designed
// we can also write our promise differently using anonymous functions. 
// here is what that would look like some say the below is a more declaritive
// or obvious way to create the promise.
// take note: the first example I used named functions, the one below is used
// with anonymous functions. You decide whats best for you but either way will work
compareNumToTen2(10).then((resolvedValue) => {
  console.log(resolvedValue);
}, (rejectedValue) => {
  console.log(rejectedValue);
}); 
