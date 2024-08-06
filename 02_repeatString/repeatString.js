const repeatString = function(str, n) {
    returnStr = ''
    if (n < 0) {
        return 'ERROR'
    }
    for (let i = 0; i < n; i++) {
        returnStr += str
    }
    return returnStr
};

// Do not edit below this line
module.exports = repeatString;
