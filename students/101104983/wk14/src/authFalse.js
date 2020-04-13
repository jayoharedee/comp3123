function authFalse(arr) {
    return arr.filter(function(obj) {
        return obj.authenticated == true
    })
}

module.exports = authFalse