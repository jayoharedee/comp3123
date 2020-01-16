
let delayedPromise = (num) => {
  return new Promise((resolve,reject) =>{
    setTimeout(() => {
    resolve(result = num * num);
    }, 500);
  })};

delayedPromise(5)
  .then(result => console.log(result))

// expected output: 25


function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};


const asyncPromise = async (num) => {
      let result = await resolveAfter2Seconds();
    return num * num
    };

asyncPromise(6)
  .then(result => console.log(result))

// expected output: 36
