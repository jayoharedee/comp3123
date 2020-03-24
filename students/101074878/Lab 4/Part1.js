var fs = require('fs');
var path = require('path');

var filterDir = function(dirPath, extension, cb) {
  fs.readdir(dirPath, function(err, list) {
    if (err) return cb(err);

    var filtered = list.map(function(fileName) {
      return path.join(dirPath, fileName);
    }).filter(function(filePath) {
      return path.extname(filePath) === extension;
    })

    cb(null, filtered);
  })
}

module.exports = filterDir;