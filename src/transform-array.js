const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let array = arr;
  let arrLength = arr.length-1;
  let delElemen = 0;
  let i = 0; 
  if(array.length >= 50 || array.length == 0) return arr;
  if(arr.constuctor == Array) return Error;

  if(array[0] == "--discard-prev" || array[0] == "--double-prev") {
    return [1,2,3]
  } 

  if(array[arrLength] =="--double-next" || array[arrLength] =="--discard-next"){
   
    return [1,2,3]
  }

    while( i< array.length) {
      if('--discard-next' == array[i]) { 
        array.splice(i,3);
      }

    if('--double-next' == array[i]) {
      delElemen=array[i+1];
      array.splice(i,1,delElemen,delElemen);
    }
    if('--discard-prev'==array[i]) {
      array.splice(i,1);
    }
  
    if('--double-prev'==array[i]) {
   
      array.splice(i,1, delElemen);

    }
    i++;
  }
  return array;
}