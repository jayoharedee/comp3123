
const delayedSuccess = () => {
    const p = new Promise(function (resolve, reject) {
        setTimeout(() => {
            let success ={'message':'delayed success!'}
            console.log("success")
            resolve(success);
        }, 500)
    })
    return p;
}

const delayedException = async () => {
    const p = await new Promise(function (resolve, reject) {
        setTimeout(() => {
            try{
                throw new Error('error: delayed exception!');
                reject(Error);
            }catch(e){
                console.error(e)
            }
        }, 500)
    })
    return p;
}


delayedSuccess()
   .then((result) => console.log(result))

delayedException()
   .then((result) => console.log(result))

