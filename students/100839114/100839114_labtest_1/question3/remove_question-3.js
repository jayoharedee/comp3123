let fs = require("fs");
let P = require("path");

const { spawn } = require("child_process");
const dir = spawn("dir", ["."]);


for (var x = 0; x < 10; x++) {
  var fileName = `log${x}.txt`;
  console.log('deleted ......' +fileName);

  fs.unlink(fileName, function(err) {
    if (err) console.log(err);
    else console.log("Write operation complete.");
  });
}
dir.stdout.on("data", data => console.log(`stdout: ${data}`));
dir.stderr.on("data", data => console.log(`stderr: ${data}`));
dir.on("close", code => console.log(`child process exited with code ${code}`));
