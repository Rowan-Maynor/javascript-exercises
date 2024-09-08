const repeatString = function(input, repeatCount) {
    if (repeatCount < 0){
        return "ERROR";
    }
    
    let output = '';
    for (let i = 0; i < repeatCount; i++){
        output += input;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
