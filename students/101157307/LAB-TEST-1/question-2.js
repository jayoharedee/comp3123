const resolvedPromise = () => {
    let answer = new Promise((resolve,reject)=> {
        let success = {'message': 'delayed success'};
        setTimeout(()=> {
            resolve(success)
        }, 500)
        
    });
    
    return answer;
}

const rejectedPromise = () => {
    let answer = new Promise((resolve,reject)=> {
        setTimeout(()=> {
            try {
                reject("error: delayed exception!")
            }
            catch (e){
                console.log(e);

            }
            
            
        }, 500)
        
    });

    return answer;
}

resolvedPromise().then((message)=>{
    console.log(message)
})
rejectedPromise().then((message)=>{
    console.log(message)
}).catch((error) => {
    console.log(error)
})
