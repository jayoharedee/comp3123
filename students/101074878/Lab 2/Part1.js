function compareNumToTen(num) {
    var compareNumToTen = new Promise(function (resolve) {
        if (num < 10) {
            var numresult = new Error (num + ' is less than 10');
            reject(numresult); // Reject
        };

    }); // fulfilled
    if (num >= 10) {
        var numresult = new Error (num + ' is greater than 10')
        resolve(numresult); // Resolve
    }
    ;
}

function reject(numresult){
    console.log(numresult);
}

function resolve(numresult){
   console.log(numresult);
}

compareNumToTen(13);
compareNumToTen(9);