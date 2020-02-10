// Bethan Morris - 101053879

function lowerCaseWords(arrInput){

    return new Promise((resolve, reject) => {

        let strings = "";
        let outputStr = "";

        for(let x = 0; x <= arrInput.length - 1; x++){

            if(typeof arrInput[x] == "string"){                
                strings = strings + arrInput[x];
            }

            outputStr = strings.toLowerCase();
            console.log(outputStr);
            resolve('Promise resolved')
        }
        reject(new Error(
            'Error(?)'
        ))
    })
}