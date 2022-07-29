const mongoose = require("mongoose");

const dbConnect = () => {
  const DB_URI = process.env.DB_URI;
  mongoose.connect(DB_URI, (err, res) => {
    if (!err) {
      console.log("Coneccion a la db");
    } else {
      console.log("error de coneccion");
    }
  });
};

module.exports = dbConnect;
