const Blockchain = require("../blockchain/Blockchain");

const blockchain = new Blockchain();

const getBlockchain = (req, res) => {
  //console.log("GET");
  res.status(200).json(blockchain.chain);
};

const createNewBlock = (req, res) => {
  //console.log(req.body);
  const { data } = req.body;
  if (data === undefined || data === null || data === "") {
    //console.log("Block not added. Must have data!");
    res.status(400).send("Block not added. Must have data!");
    return;
  }
  const addedBlock = blockchain.addBlock({ data });

  res.status(201).json({ message: "added new block", block: addedBlock });
};

module.exports = {
  getBlockchain,
  createNewBlock,
};
