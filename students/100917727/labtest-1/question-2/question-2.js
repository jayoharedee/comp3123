const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('message: delayed success!'), 500);
    });
}

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('error: delayed exception'), 500);
    });
}

resolvedPromise().then(result => console.log(result));
rejectedPromise().catch(err => console.log(err));
