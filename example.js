const BlockChain = require("./index");

const bc = new BlockChain(4);

bc.add({ from: "jake", to: "chris", amount: 100 });
bc.add({ from: "chris", to: "michelle", amount: 50 });
bc.minePendingData();
bc.show({ format: "json" });
