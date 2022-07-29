const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    role: {
      type: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true, //registrar fechas de creaccion y actualizacion
    versionKey: false,
  }
);
module.exports = mongoose.model("user", UserSchema)