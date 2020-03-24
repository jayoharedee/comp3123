//exercise 1
function capitalize_first(str){
    str = str.split(" ");
    var x  = str.length;
    for (var i=0; i<x;i++){
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}

console.log(capitalize_first("the quick brown fox"));

//exercise 2
function max1(x,y,z){
    max = 0
    if(x>y){
        max = x;
    } else{
        max = y;
    }
    if(z>max){
        max = z;
    }
    return max;
}

console.log(max1(1,0,1));
console.log(max1(0,-10,-20));
console.log(max1(1000,510,440));

//exercise 3
function right(s){
    if(s.length>1){
        return s.slice(-3)+s.slice(0,-3);
    }
    return s;
}

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));

//exercise 4
function angle_Type(angle){
    if(angle<90){
        return "Acute angle.";
    }
    if(angle==90){
        return "Right angle.";
    }
    if(angle<180){
        return "Obtuse angle.";
    }
    return "Straight angle.";
}

console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))

//exercise 5
function array_max_sum(nums, k){
    let result = 0;
    let temp_sum = 0;
    for(var i=0; i<k-1;i++){
        temp_sum+=nums[i];
    }

    for(var i=k-1; i<nums.length;i++){
        temp_sum+=nums[i];
        if(temp_sum>result){
            result=temp_sum;
        }
        temp_sum-=nums[i-k+1];
    }
    return result;
}

console.log(array_max_sum([1, 2, 3, 14, 5], 2))
console.log(array_max_sum([2, 3, 5, 1, 6], 3))
console.log(array_max_sum([9, 3, 5, 1, 7], 2))