// Exercise 1: Write a JavaScript program to capitalize the first letter of each word of a given string.

function firstLetterUpper(){
    let allLowerStr = "the quick brown fox";
    let allLowerArr = allLowerStr.split(" ");
    let result = "";
    for(let i=0; i < allLowerArr.length; i++){
        allLowerArr[i]= allLowerArr[i].charAt(0).toUpperCase() + allLowerArr[i].slice(1);
        result = result + allLowerArr[i] + ' ';
    }
    result.trim();
    console.log(result);
}

// Exercise 2: Write a JavaScript program to find the largest of three given integers.

function largestNum(arr){    
    let large = arr[0];    
    for(let i = 1; i < arr.length; i++){
        if (large < arr[i]){
            large = arr[i];
        }
    }
    console.log(large)
}

// Exercise 3: Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.

function lastThreePlusRest(str){
    if (str.length<3){
        console.log("Your string has less than 3 characters.");
    }
    let breakPoint = str.length -3;
    let lastThree = str.slice(breakPoint);
    let rest = str.slice(0,breakPoint);
    console.log(lastThree+rest);
}

// Exercise 4: Write a JavaScript program to find the types of a given angle.

function angleDef(value){
    let type ="";

    if (value < 90 && value > 0){
        type="Actue Angle";        
    }
    else if (value == 90){
        type="Right Angle";
    }
    else if (value > 90 && value < 180){
        type="Obtuse Angle";
    }
    else if(value == 180){
        type="Straight Angle";
    }
    else{
        type ="Not a value for angle";
    }

    console.log(type);
}

// Exercise 5: Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.) of a given array of positive integers.


function largeSum(arr,k){
    let end;
    let largeSum = 0;
    for (let i = 0; i<arr.length; i++){
        end = i + k;
        let sum = 0;
        if(end <= arr.length){            
            for(let j = i; j < end; j++){
                sum = sum + arr[j];
            }            
        }
        if(largeSum < sum){
            largeSum = sum;
        }
    }
    console.log(largeSum);
}

firstLetterUpper();
largestNum([500,60,70,800]);
lastThreePlusRest("Programming");
angleDef(180);
largeSum([1,2,3,4,5,6,7],5);