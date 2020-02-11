const resolvedPromise = new Promise((resolve) => {
    setTimeout( function() {
     resolve('Message: delayed success!')
   }, 500) 
 }) 
 
 resolvedPromise.then((success) => {
   
   console.log(success) 
 }); 

 const delayedException = new Promise((reject) => {
     setTimeout( function() {
         reject('Error: delayed exception!')
     }, 500)
 })

 delayedException.then((failed) => {
   
    console.log(failed) 
  }); 
