var start = process.hrtime();

setInterval(() => null, 1000);

process.on('exit', () => {
    var precision = 3; // 3 decimal places
    var elapsed = process.hrtime(start)[1] / 1000000;
    console.log('\nprocess uptime on signal interupt', process.uptime());
    console.log('process uptime on exit', process.hrtime(start)[0] + " s, " + elapsed.toFixed(precision) + " ms");
});

process.on('SIGINT', () => {
    process.exit();
});