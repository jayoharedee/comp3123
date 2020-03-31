/*
  Write a script that reads input from the CLI (command line interface)
  and logs the uppercased version of the input after Enter is pressed.  
  It should continuously prompt User for an input and end on Ctrl-C + Ctrl-X. 
  Hint, use​ process stdout and stdin 
*/

process.stdin.setEncoding('utf8');

process.stdout.write('input: ');
process.stdin.on('readable', () => {
    let output;
    while ((output = process.stdin.read()) !== null) {
        process.stdout.write(`output: ${output.toUpperCase()}`);
        process.stdout.write('input: ');
    }
});

process.stdin.on('end', () => {
    process.stdout.write('end');
});