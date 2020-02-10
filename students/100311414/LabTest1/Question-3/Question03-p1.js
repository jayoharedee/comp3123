let fs = require("fs");
let path = require("path");
let folder = process.cwd();
let data = "some text";

const createLog  = () => {
  if (!fs.existsSync(`${folder}/Logs`)) {
    fs.readdir(`${folder}/Logs`, (err, files) => {
      fs.mkdir("Logs", () => {
        process.chdir("Logs");

        let num = 0;
        while (num < 10) {
          let fn = `log${num}.txt`;
          fs.writeFileSync(fn, data);
          console.log(fn);
          num++;
        }
      });
    });
  }
};



createLog();