const CustomError = require("../extensions/custom-error");
const notArray = (arr) => arr.some(item => Array.isArray(item));
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
      if(notArray(arr)) {
        const newArray = arr.reduce((total, currenrValue) => total.concat(currenrValue), []);
          return depth + this.calculateDepth(newArray);
      }
    return depth;
  }
};

