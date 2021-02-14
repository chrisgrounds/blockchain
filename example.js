const BlockChain = require("./index");
const Key = require("./src/Key");

const bc = new BlockChain(4);

const key = new Key().gen();

bc.add({ from: "jake", to: "chris", amount: 100 }, key);
bc.minePendingData();
bc.add({ from: "chris", to: "michelle", amount: 50 }, key);
bc.minePendingData();
bc.show({ format: "json" });
