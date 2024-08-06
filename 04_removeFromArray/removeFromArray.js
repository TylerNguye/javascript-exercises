const removeFromArray = function(arr, ...removeElems) {
    for (let i = 0; i < arr.length; i++) {
        for (const arg of removeElems) {
            if (arg === arr[i]) {
                arr.splice(i, 1)
                i--
            }
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
