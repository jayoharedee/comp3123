let fs = require("fs");
let path = require("path");
let folder = process.cwd();
console.log(`${folder}/Logs`)

const removeLog = () => {
    if (fs.existsSync(`${folder}/Logs`)) {
        process.chdir("Logs");

        fs.readdir(`${folder}/Logs`, (err, files) => {
            if (err) throw err;
          
            for (const file of files) {
              console.log(`deleted files... ${file}`);
              fs.unlink(path.join(`${folder}/Logs`, file), err => {
                if (err) throw err;
              });
            }
          });

   
//    process.chdir(`${folder}`);
//    const pathToDir = path.join(`${folder}`, "Logs")
//    fs.rmdir(pathToDir, function(err) {
//     if (err) {
//       throw err
//     } else {
//       console.log("Successfully removed the empty directory!")
//     }
//   })
    }
  };

  removeLog()