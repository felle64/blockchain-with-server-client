const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const blocks = require("./routes/blockchain-routes");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/1/blockchain", blocks);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
