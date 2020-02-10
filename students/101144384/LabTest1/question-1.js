const lowerCaseWords = (arr) =>{
  return new Promise((resolve, reject) =>{
      const filtered = [];
      for (let i = 0; i < arr.length; i++){
          if (typeof arr[i] === "string"){
              filtered.push(arr[i].toLowerCase());
          }
      }
      resolve(filtered);
  });
};

const mixedArray = ['Pizza', 10, true, 25, false, "WINGS"];

lowerCaseWords(mixedArray).then((arr) => console.log(arr));
