

function checkString(myVar) {
    return (typeof myVar === 'string' || myVar instanceof String)
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

function makeLowerCase(array) {
    return new Promise((resolve, reject) => {
        // if the array contains anything but a String, return false and skip this if statement
        if (array.every(checkString)) {
            array = array.map(x => x.toLowerCase());
            resolve(array);
        }
        reject('Error! Not all items in the array are strings!');
    })
}

makeLowerCase(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));