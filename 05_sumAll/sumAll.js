const sumAll = function(startInt, endInt) {
    if (startInt < 0 || endInt < 0 ||
        typeof(startInt) !== "number" || typeof(endInt) !== "number" ||
        startInt % 1 !== 0 || endInt % 1 !== 0
        ){
        return "ERROR";
    }
    
    let output = 0;
    if(startInt <= endInt){
        for(let i = startInt; i <= endInt; i++){
        output += i;
        }
    } else {
        for(let i = endInt; i <= startInt; i++){
            output += i;
            }
    }
    
    return output;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
