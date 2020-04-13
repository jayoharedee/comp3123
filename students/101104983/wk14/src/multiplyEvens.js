function multiplyEvens(arr) {
    var prevEven = 1
    var newArr = []
    for (x in arr) {
        if (arr[x] % 2 == 0) {
            prevEven = arr[x]
        } else {
            newArr.push(arr[x] * prevEven)
        }
    }
    return newArr
}

module.exports = multiplyEvens