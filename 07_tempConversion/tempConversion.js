const convertToCelsius = function(temperature) {
  let output = (temperature - 32) * (5/9);
  if(output % 1 !== 0) {
    output = output.toFixed(1);
  }
  return +output;
};

const convertToFahrenheit = function(temperature) {
  let output = (temperature * (9/5)) +32;
  if(output % 1 !== 0) {
    output = output.toFixed(1);
  }
  return +output;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
