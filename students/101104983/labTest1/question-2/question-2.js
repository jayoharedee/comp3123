

const resolvedPromise =() => new Promise((resolve,reject) => {
    setTimeout( () => {
       resolve("Code worked")
    },500)
})

resolvedPromise

const rejectedPromise = () => new Promise((resolve,reject)=>{
    setTimeout( ()=>{
        try{
            throw new Error('error: delayed exception!')
        } catch(e){
            console.error(e)
        }
    },500)

})

resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error));

rejectedPromise()
    .then(result => console.log(result))
    .then(error => console.log(error));