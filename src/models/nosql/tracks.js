const mongoose = require("mongoose");

const TracksSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    album: {
      type: String,
    },
    cover: {
      type: String,
      validate: {
        validator: (req) => {
          return true;
        },
      },
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
module.exports = mongoose.model("tracks", TracksSchema);
