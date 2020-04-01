process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdout.write('Input: ');

process.stdin.on('data', (chunk) => {
    process.stdout.write(`Output: ${chunk.toUpperCase()}`);
    process.stdout.write('Input: ');
});