// task1
const delayedPromise = time => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('done!');
            resolve(time * time);
        }, time);
    });
}
delayedPromise(5).then(result => console.log(result)).catch(error => console.log(error))

// task2

async function asyncPromise(time) {
    var result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time * time);
        }, time);
    });
    return result
}
asyncPromise(6).then(result => console.log(result)).catch(error => console.log(error))