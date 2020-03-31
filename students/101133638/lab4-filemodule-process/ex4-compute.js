
/*
Exercise 4:
Given the following ​compute.js​ file, 
create a script that will use the ​child process module​ and fork a child process​
that will execute the compute script and do the following:
- send a message to the child process to start the calculation
- create an event listener to receive the message sent from child process and log result 

output
Long computation result: 499999999999067109000
*/

// child module

console.log('child initialize...');

const longComp = () => {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum += i;

    };
    return sum;
};

// on message from parent, start Long calc 
// send message back to parent when completed
process.on('message', message => {
    const result = longComp();
    process.send(result);
});
