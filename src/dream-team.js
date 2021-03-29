const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = [];
  let str = '';

  if(members == null || members.constructor !== Array) return false;
  else {
    for(let i = 0; i < members.length; i++) {
      if(typeof members[i] === 'string') {
        str += members[i].trim().charAt();
      }
    }
    arr = str.toUpperCase().split('');
    return arr.sort().join('');
  }
};
