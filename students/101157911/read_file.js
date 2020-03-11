const csv = require('csv-parser');
const fs = require('fs');
fs.createReadStream('file.csv')
    .pipe(csv())
    .on('data', (row) => {
      console.log(row)
    }
    )