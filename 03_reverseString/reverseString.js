const reverseString = function(input) {
    let output = '';
    for (let i = 0; i < input.length; i++){
        output += input.at(-1-i);
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
