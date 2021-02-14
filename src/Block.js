const Hash = require("./Hash");

class Block {
  constructor(data, previousHash, timestamp) {
    this.data = data;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.hash = this.createHash();
    this.nonce = 0;
  }

  createHash() {
    return new Hash(JSON.stringify(this.data) + this.previousHash + this.timestamp + this.nonce).build();
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
