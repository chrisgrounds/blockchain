const BlockChain = require("./index");

const bc = new BlockChain();

bc.add({ from: "jake", to: "chris", amount: 100 });
bc.add({ from: "chris", to: "michelle", amount: 50 });
bc.show({ format: "json" });
