const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(data, previousHash, index, timestamp) {
    this.data = data;
    this.previousHash = previousHash;
    this.index = index;
    this.timestamp = timestamp;
    this.hash = this.createHash();
    this.nonce = 0;
  }

  createHash() {
    return SHA256(JSON.stringify(this.data) + this.previousHash + this.index + this.timestamp + this.nonce).toString();
  }

  mine(difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
      this.nonce++;
      this.hash = this.createHash();
    }
    console.log("block mined", this.hash);
  }
}

module.exports = Block;
