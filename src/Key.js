const SHA256 = require("crypto-js/sha256");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

class Key {
  constructor() {
    this.keyPair = null;
    this.publicKey = null;
    this.privateKey = null;
  }

  gen() {
    const key = ec.genKeyPair();
    this.keyPair = key;
    this.publicKey = key.getPublic("hex");
    this.privateKey = key.getPrivate("hex");

    return this;
  }

  sign(data) {
    const hashedData = SHA256(data).toString();
    return this.keyPair.sign(hashedData, "base64").toDER("hex");
  }
}

module.exports = Key;
