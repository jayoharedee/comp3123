const mixedArray = ["PIZAA",10,true,25,false,"Wings"];



let lowerCaseWords =  function(arr){
    let output =[];
    if( arr.length > 1){
        for(var i =0; i <arr.length ; i++){
            if(typeof arr[i] == "string"){
                output.push(arr[i].toLowerCase());
            }
        }
        return Promise.resolve(output);
    }else{
        var error  = new Error("Error: Array elements issue!");
        return Promise.reject(error);
    }
}

lowerCaseWords(mixedArray)
.then(function(result){
    console.log(result);
})
.catch(function(error){
    console.log(error.message);
})

