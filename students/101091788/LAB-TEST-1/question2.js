const resolvedPromise = ()=>{

return new Promise((resolve)=>{

setTimeout(()=>{

let success = {'message' : 'delayed success!'}
resolve(success);

}, 500)

})

}

const rejectedPromise = ()=>{

    return new Promise((reject)=>{
    
    setTimeout(()=>{
 
      let err  = {'error' : 'delayed exception!'}
    reject(err);
    
    }, 500)
    
    })
    
    }
    

 resolvedPromise()
.then((result)=>console.log(result))
.catch((err)=>console.log(err));


rejectedPromise()
.then((result)=>console.log(result))
.catch((err)=>console.log(err));