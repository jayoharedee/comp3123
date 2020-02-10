const resolvedPromise = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            let success = {'message': 'delayed success!'};
            resolve(success);
        }, 500)
    })
};

const delayedException = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            reject(new Error('error: delayed exception!'));
        }, 500);
    });
};

resolvedPromise().then(val => console.log(val));
delayedException().catch(val => console.error(val));
