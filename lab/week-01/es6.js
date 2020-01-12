const checkFlag = (checkflag = true) => checkFlag ? 'The flag passed was true' : undefined

const multiply = (a, b = 10) => a * b

exports.checkFlag = checkFlag
exports.multiply = multiply

