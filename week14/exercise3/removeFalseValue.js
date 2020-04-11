function removeFalseValue(objectArray){
    var outputArr = []
    for(var o in objectArray){
        if(objectArray[o].authenticated){
            outputArr.push(objectArray[o]);
        }
    }
    return outputArr
}
 module.exports = removeFalseValue;