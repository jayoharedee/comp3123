// Exercise 3:
// Using following setInterval code to run an infinite loop on 
// the process that runs it. Add event listeners on the 
// process exit and signal interrupt events and log the process running uptime.
// Use Ctrl+X Ctrl+C to kill the current process and trigger the events.


setInterval(() => null, 1000);

process.on('SIGINT', () => {
   console.log(`process uptime on signal interrupt: ${process.uptime()}`)
   process.on('exit', () => {
      console.log(`process uptime on exit: ${process.uptime()}`)
   });
   process.exit();
});

