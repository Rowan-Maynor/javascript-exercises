const removeFromArray = function(input, ...filterValues) {
    const output = [];
    
    filter: for(let i = 0; i < input.length; i++) {
        for (const value of filterValues){
            if (input[i] === value){
                continue filter;
            }
        }
        output.push(input[i]);  
    }
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
