const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options) {
let result = str;
  let separatorString = '';
  let repeatStr = options.repeatTimes;
 
  if(options.hasOwnProperty('separator')) {
    separatorString = options.separator;
  } else separatorString = '+';
  if(options.hasOwnProperty('addition')) {
    let addStr = options.addition;
    for(let i = 1; i < repeatStr; i++) {
      result = result + addStr + separatorString + str;
    }
    return result + addStr;
  }

  for(let i = 1; i < repeatStr; i++) {
    result = result + separatorString + str;
  }
  return result;
};
  