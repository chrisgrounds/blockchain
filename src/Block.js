const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(data, previousHash, index, timestamp) {
    this.data = data;
    this.previousHash = previousHash;
    this.index = index;
    this.timestamp = timestamp;
    this.hash = this.createHash();
  }

  createHash() {
    return SHA256(JSON.stringify(this.data) + this.previousHash + this.index + this.timestamp).toString();
  }
}

module.exports = Block;
