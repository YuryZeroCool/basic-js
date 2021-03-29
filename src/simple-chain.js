const CustomError = require("../extensions/custom-error");
let chain = [];
  const chainMaker = {
    chain: chain,
  
    getLength() {
      this.chain.length;
      return this;
    },
    addLink(value) {
      this.chain = chain.push('( ' + value + ' )');
      return this;
    },
    removeLink(position) {
      if(!isNaN(position) && position >= 0){
        this.chain = chain.splice(position-1, 1);
        return this;
      } else{
        chain = [];
        throw new Error;
      }
    },
    reverseChain() {
      this.chain = chain.reverse();
      return this;
    },
    finishChain() {
      this.chain = chain.join('~~');
      chain = []; 
      return this.chain;
    }
  };

module.exports = chainMaker;