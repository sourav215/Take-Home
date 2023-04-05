// External Imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Internal Exports
const connectDatabase = require("./config/db");


const app = express();

app.use(express.json());

// allowing all origins
app.use(cors());

// server
app.listen(process.env.PORT, () => {
  try {
    connectDatabase();
    console.log(`Server is listening on ${process.env.PORT} ...`);
  } catch (err) {
    console.log(err);
  }
});
