var promise1 = 101
var promise2 = "follow the white"
var promise3 = new Promise(function(resolve, reject){
  resolve("rabbit.. neo");
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});  

// expected output: 
//[ 101, 'follow the white', 'rabbit.. neo' ]
