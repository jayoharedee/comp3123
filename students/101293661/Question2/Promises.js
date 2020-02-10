const resolvedPromise = (message) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(message);
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise(reject => {
        setTimeout(() => {
            reject(new Error("'delayed exception!'"));
        }, 500);
    });
};


resolvedPromise("message: 'delayed success!'")
    .then(result => console.log(result))
    .then(rejectedPromise)
    .then(result => console.log(result))
    .catch(error => console.log(error));