const palindromes = function (phrase) {
    const str = phrase.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    reverseStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str.charAt(i)
    }
    for (let i = 0; i < str.length - 1; i++) {
        if (str.charAt(i) !== reverseStr.charAt(i)) {
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
