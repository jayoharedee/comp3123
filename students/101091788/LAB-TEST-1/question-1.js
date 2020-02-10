import { isRegExp } from "util";

const mixedArray = ['PIZZA',10,true,25,false,'Wings']

function lowerCaseWords(arr){

    return new Promise((resolve,reject)=>{

        arr1 = arr.map(x=>{if(typeof x =="string"){ return x.toLocaleLowerCase()}})
        arr1 = arr1.filter(x=>x!=undefined);
        if(arr1.length ==0){

            reject("No string in this array");
        }
        
        resolve(arr1);



    })
  
}


lowerCaseWords(mixedArray)
.then((result)=>console.log(result))
.catch((err)=>console.log(err));



