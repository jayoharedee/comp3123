
// Exercise 1: 
// Write a JavaScript program to capitalize the first letter of each word of a given string.
console.log();
console.log('Exercise 1:');
function capitalize(sentence) 
{
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}
console.log(capitalize('the quick brown fox'));



// Exercise 2: 
// Write a JavaScript program to find the largest of three given integers.
console.log();
console.log('Exercise 2:');
function largest_number(num1, num2, num3) 
{
  var result = 0;
  if (num1 > num2)
  {
    result = num1;
  } else {
    result = num2;
  }
  if (num3 > result) 
  {
    result = num3;
  }
  return result;
}
console.log(largest_number(1,0,1));
console.log(largest_number(0,-10,-20));
console.log(largest_number(1000,510,440));



// Exercise 3: 
// Write a JavaScript program to move last three character to the start of a given string.
// The string length must be greater or equal to three.
console.log();
console.log('Exercise 3:');
function move_last_three(string) {
    if (string.length > 1)
    {
        return string.slice(-3) + string.slice(0, -3);
    }
    return string;
}
console.log(move_last_three('Python'));
console.log(move_last_three('JavaScript'));
console.log(move_last_three('Hi'));



// Exercise 4: 
// Write a JavaScript program to find the types of a given angle.
console.log();
console.log('Exercise 4:');
function angle_type(angle) {
    if(angle < 90) {
      return 'Acute angle';
    }
    if(angle === 90) {
      return 'Right angle';
    }
    if(angle < 180) {
      return 'Obtuse angle';
    }
    return 'Straight angle';
}  
console.log(angle_type(47));
console.log(angle_type(90));
console.log(angle_type(145));
console.log(angle_type(180));



// Exercise 5: 
// Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers
// (numbers that follow each other in order.) of a given array of positive integers.
console.log();
console.log('Exercise 5:');

function max_sum_consecutive_nums(array_nums, k){
    let result = 0;
    for (let i = 0; i < array_nums.length; i++){
        let sum = 0;
        let consecutives = i + k;
        if(consecutives <= array_nums.length){            
            for(let j = i; j < consecutives; j++){
                sum = sum + array_nums[j];
            }            
        }
        if(result < sum){
            result = sum;
        }
    }
    debugger;
    return result;
}
console.log(max_sum_consecutive_nums([1, 2, 3, 14, 5], 2))
console.log(max_sum_consecutive_nums([2, 3, 5, 1, 6], 3))
console.log(max_sum_consecutive_nums([9, 3, 5, 1, 7], 2))

