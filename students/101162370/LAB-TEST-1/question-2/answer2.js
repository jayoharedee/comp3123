const resolvedPromise = () => {
    const p = new Promise(function (res, rej) {
      setTimeout(() => {
        let success={'message': "Resolved Promise"};
        console.log(success);
          res();
      }, 500)
    })    
    return p;
  }

const rejectedPromise = () => {
    const q = new Promise(function (res, rej) {
      setTimeout(() => {
        try{
          rej({'error': "Rejected Promise"});
        }catch(e){
          console.error(e);
        }
      }, 500)
  })
    return q;
  }

  resolvedPromise()
  rejectedPromise().then(result=>console.log(result)).
  catch((result) => console.log(result));