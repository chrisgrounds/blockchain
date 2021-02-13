const Block = require("./Block");

class BlockChain {
  constructor(genesisBlock = new Block("", "", 0, new Date())) {
    this.blockChain = [genesisBlock];
  }

  getLatestBlock() {
    return this.blockChain[this.blockChain.length - 1];
  }

  add(data) {
    const previousBlock = this.getLatestBlock();

    this.blockChain.push(new Block(data, previousBlock.hash, previousBlock.index + 1, new Date()));
  }

  show() {
    console.log(this.blockChain);
  }
}

module.exports = BlockChain;
