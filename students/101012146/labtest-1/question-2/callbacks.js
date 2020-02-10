const delayedSuccess = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({'message': 'delayed success!'});
    }, 500);
  }); 

  const delayedException = (um) => new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({'error': 'delayed exception!'})
    }, 500);
  }); 

delayedSuccess()
    .then(result => console.log(result))
delayedException()
    .catch(error => console.log(error));