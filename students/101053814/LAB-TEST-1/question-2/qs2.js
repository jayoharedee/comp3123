const resolvedPromise = () => {
  const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
      let success={'message': "Delayed success!"};
      resolve(success );
    }, 500)
})
  return p;
}
const rejectedPromise = () => {
  const q = new Promise(function (resolve, reject) {
    setTimeout(() => {
      try{
        let fail={'error':'delayed exception!'};
        reject(fail);
      }catch(e){
        console.error(e);
      }
    }, 500)
})
  return q;
}

resolvedPromise()
.then(result=>console.log(result))

rejectedPromise()
.then(result=>console.log(result))
.catch((error) => console.log(error));