const express = require("express");
const cors = require("cors");
const Blockchain = require("./Modules/Blockchain");

const app = express();
const blockchain = new Blockchain();

app.use(express.json());
app.use(cors());

app.get("/api/1/blockchain", (req, res) => {
  res.status(200).json(blockchain.chain);
});

app.post("/api/1/blockchain", (req, res) => {
  console.log(req.body);
  const { data } = req.body;
  const addedBlock = blockchain.addBlock({ data });

  res.status(201).json({ message: "added new block", block: addedBlock });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
