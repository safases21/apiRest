const express = require("express");
const cors = require("cors");
const dbConnect =require("./config/mongo")
require("dotenv").config()

const app = express();

app.use(cors());



app.listen(process.env.PORT || 3000, () => {
  console.log("server on port:", process.env.PORT);
});

dbConnect();