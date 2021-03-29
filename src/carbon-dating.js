const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  let year = 0;
  let element = 0;

  if(typeof sampleActivity !== 'string') return false;
  else {
    if(isNaN(sampleActivity) || Number(sampleActivity) == 0) return false;
    if(Number(sampleActivity) > 15 || Number(sampleActivity) < 0) return false;
  }
  element = Math.log(MODERN_ACTIVITY/Number(sampleActivity));
  year = Math.ceil(element / (0.693/HALF_LIFE_PERIOD));
  return year;
};
