const fibonacci = function(position) {
    position = Number(position)
    if (position < 0) {
        return "OOPS"
    }
    if (position === 0) {
        return 0
    }
    sequence = [1, 1]
    for (let i = 2; i < position; i++) {
        sequence.push(sequence[i-1] + sequence[i-2])
    }
    return sequence[sequence.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
