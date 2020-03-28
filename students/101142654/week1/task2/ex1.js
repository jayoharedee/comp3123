const capitalize = (sentence) => {
    sentence = sentence.split(" ");
    result = "";
    for (const [first,...rest] of sentence){
        result += first.toUpperCase() + rest.join("") + " ";
    }
    return result;

}

console.log(capitalize('the quick brown fox jumped'));