const delayedPromise = (num) => {
    return new Promise( (resolve,reject)=>{
        setTimeout(()=> {
            resolve(num*num);
        }, 500
        )


    });

}

async function asyncPromise(num) {
    const result = await delayedPromise(num);
    return result;
}

delayedPromise(2).then(result => console.log(result));
asyncPromise(6).then(result => console.log(result))