function resolvedPromise(){

    let resolvePromise = new Promise((resolve) =>{
        setTimeout(() => {
            resolve('success')
        }, 500)
    })

    resolvePromise.then((msg) =>{
        console.log(msg)
    })

}

function rejectedPromise(){
    let rejectPromise = new Promise((reject) =>{
        setTimeout(() => {
            try{
                throw new Error('error: failure')
            }catch(e){
                reject(e)
            }
            
        }, 500)
    })

    rejectPromise.then((msg) =>{
        console.log(msg)
    })
}

resolvedPromise()
rejectedPromise()