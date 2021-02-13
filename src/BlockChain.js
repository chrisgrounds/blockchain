const Block = require("./Block");

class BlockChain {
  constructor(difficulty, genesisBlock = new Block("", "", 0, new Date())) {
    this.blockChain = [genesisBlock];
    this.difficulty = difficulty;
  }

  getLatestBlock() {
    return this.blockChain[this.blockChain.length - 1];
  }

  add(data) {
    const previousBlock = this.getLatestBlock();

    const block = new Block(data, previousBlock.hash, previousBlock.index + 1, new Date());

    block.mine(this.difficulty);

    this.blockChain.push(block);
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
