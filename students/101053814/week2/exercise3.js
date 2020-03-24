var promise1 = 101
var promise2 = "follow the white"
var promise3 = new Promise((resolve,reject)=>{
    resolve("rabbit.. neo")
})

Promise.all([promise1, promise2, promise3])
    .then(values=>{
        console.log(values)
    })