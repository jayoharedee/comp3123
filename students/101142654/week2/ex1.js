const compareNumToTen = num => {
  p = new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(num + " is greater than 10, success!");
    } else {
      reject(num + " is less than 10, error!");
    }
  });
  return p;
};

compareNumToTen(15)
  .then(result => console.log(result))
  .catch(result => console.log(error));
