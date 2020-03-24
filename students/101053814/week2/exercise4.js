function delayedPromise(num){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('done!')
            resolve(num*num)
        },500)
    })
}

// delayedPromise(5)
//     .then(result=>console.log(result))

async function asyncPromise(num){
    const result = await delayedPromise(num)
    return result
}

asyncPromise(6)
    .then(result=>console.log(result))

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // expected output: 'resolved'
//   }