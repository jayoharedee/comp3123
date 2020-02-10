const resolvedPromise = async () => {
    p = await new Promise(function(resolve,reject){
        setTimeout(() => {
            let success = {'message':'delayed success!'}
            resolve(success);
            console.log(success);
        },500)
    })
    return p;
}

const rejectedPromise = async () => {
    p = await new Promise(function(resolve,reject){
        setTimeout(() => reject(new Error("error: delayed exception!")), 500)
    }).catch(err => {
        console.log(err)

})
    return p;
}

Promise.all([resolvedPromise(),rejectedPromise()]).then(result => console.log(result))