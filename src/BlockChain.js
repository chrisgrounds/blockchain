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

  show({ format }) {
    if (format === "json") {
      console.log(JSON.stringify(this.blockChain));
    } else {
      console.log(this.blockChain);
    }
  }

  isValid() {
    for (let i = 1; i < this.blockChain.length; i++) {
      const currentBlock = this.blockChain[i];

      if (currentBlock.hash !== currentBlock.createHash()) return false
      if (this.blockChain[i - 1].hash !== currentBlock.previousHash) return false
    }

    return true;
  }
}

module.exports = BlockChain;
