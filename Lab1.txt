//Ex. 1 Lab 1
const capitalize2 = (myString) => {
result = myString.split(" ")  
const map = result.map(x => capitalize(x))
return `${map[0]} ${map[1]} ${map[2]} ${map[3]}`
}

console.log(capitalize2('the quick brown fox')+'\n');
/* expected output: 
The Quick Brown Fox
*/


//Ex. 2 Lab 1
const max = (my1, my2, my3) => {
return Math.max(my1, my2, my3)
}

console.log(max (1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));
console.log()
/* expected output: 
1
0
1000
*/


//Ex. 3 Lab 1
const right = (str) => {
 if (str.length > 1)
       {
         return str.slice(-3) + str.slice(0, -3);
       }
  return str;
}
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));
/* expected output: 
honPyt
iptJavaScr
Hi
*/


//Ex. 4 Lab 1
const angle_Type = (angle) => {
  return angle == 180? "Straight angle" : angle > 90? "Obtuse angle" : angle == 90? "Right angle" : "Acute angle"
}

console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))
console.log()
/* expected output: 
Acute angle
Right angle
Obtuse angle
Straight angle
*/


//Ex. 5 Lab 1
const array_max_sum = (arr, size) =>
{ 
    var maxNow = -10000 
    var j = 1;
  while (j < arr.length) 
  {
    var maxWas = 0; 
    j--
    for (var i = 0; i < size; i++) 
    { 
        maxWas = maxWas + arr[j]; 
        if (maxNow < maxWas) 
            maxNow = maxWas; 
        if (maxWas < 0) 
            maxWas = 0; 
      j++;
    }
  }   
    return maxNow; 
} 

console.log(array_max_sum([1, 2, 3, 14, 5], 2))
console.log(array_max_sum([2, 3, 5, 1, 6], 3))
console.log(array_max_sum([9, 3, 5, 1, 7], 2))
/* expected output: 
19
12
12
*/
