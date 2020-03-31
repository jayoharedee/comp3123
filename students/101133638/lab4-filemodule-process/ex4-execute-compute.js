
/*
Exercise 4:
Given the following ​compute.js​ file, 
create a script that will use the ​child process module​ and fork a child process​
that will execute the compute script and do the following:
- send a message to the child process to start the calculation
- create an event listener to receive the message sent from child process and log result 

output
Long computation result: 499999999067109000
*/

// parent module

var child_process = require('child_process');
var child = child_process.fork(__dirname + '/ex4-compute');

console.log('parent initalize...');

child.on('message', message => { 
    console.log('Long computation result: ', message); 
    process.exit();
});

// child send a messages to the parent
child.send('compute'); 


