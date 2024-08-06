const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR'
    }
    if (num1 < 0 || num2 < 0) {
        return 'ERROR'
    }
    if (num1 > num2) {
        const temp = num2
        num2 = num1
        num1 = temp
    }
    return Math.floor((num2 * (num2 + 1)) / 2) - Math.floor((num1 * (num1 - 1)) / 2)
};

// Do not edit below this line
module.exports = sumAll;
