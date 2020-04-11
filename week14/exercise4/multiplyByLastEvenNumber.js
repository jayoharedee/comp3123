function multiplyByLastEvenNumber(input){
    var output = []
    var lastEven
    for(var x in input){
        if(input[x]%2!=0){
            input[x]= lastEven * input[x]
            output.push(input[x])
        } else{
            lastEven=input[x]
        }
    }
    return output;
}

module.exports = multiplyByLastEvenNumber