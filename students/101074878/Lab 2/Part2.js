let words = ['apple','horse','cart','zebra','tree'];

function makeUpperCase(words) {
    var newarray1 = [];

    for(var i = 0; x < words.length; x++){ 
        var array1 = words[i].split('')
        for(var x = 0; x < array1.length; x++){
            newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
        }
    }
    return newarray1.join('');
}

console.log(makeUpperCase(words));