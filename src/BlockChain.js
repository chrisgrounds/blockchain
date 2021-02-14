const Block = require("./Block");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");
const SHA256 = require("crypto-js/sha256");

class BlockChain {
  constructor(difficulty, genesisBlock = new Block("", "", Date.now())) {
    this.blockChain = [genesisBlock];
    this.difficulty = difficulty;
    this.pendingData = [];
  }

  getLatestBlock() {
    return this.blockChain[this.blockChain.length - 1];
  }

  add(data, key) {
    const sign = key.sign(data);

    // verify sign
    const publicKey = ec.keyFromPublic(key.publicKey, "hex");
    const verification = publicKey.verify(SHA256(data).toString(), sign);

    if (verification) this.pendingData.push({ ...data, sign });
  }

  minePendingData() {
    const block = new Block(this.pendingData, this.getLatestBlock().hash, Date.now());
    block.mine(this.difficulty);

    this.blockChain.push(block);
    this.pendingData = [];
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
