const express = require("express");
const router = express.Router();
//this is dummy data
const {
  getBlockchain,
  createNewBlock,
} = require("../controllers/blockchain-controller");

router.route("/").get(getBlockchain).post(createNewBlock);

module.exports = router;
