const Blockchain = require("../Modules/Blockchain");

const blockchain = new Blockchain();

const getBlockchain = (req, res) => {
  console.log("GET");
  res.status(200).json(blockchain.chain);
};

const createNewBlock = (req, res) => {
  console.log(req.body);
  const { data } = req.body;
  const addedBlock = blockchain.addBlock({ data });

  res.status(201).json({ message: "added new block", block: addedBlock });
};

module.exports = {
  getBlockchain,
  createNewBlock,
};
