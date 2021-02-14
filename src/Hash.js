const SHA256 = require("crypto-js/sha256");

class Hash {
  constructor(target) {
    this.target = target;
  }

  build() {
    return SHA256(this.target).toString();
  }
}

module.exports = Hash;
