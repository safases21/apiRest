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
        message: "ERROR_URL",
      },
    },
    artist: {
      name: {
        type: String,
      },
      nickname: {
        type: String,
      },
      nationality: {
        type: String,
      },
    },
    duration: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
    },
    mediaId: {
        type: mongoose.Types.ObjectId,
    }
  },
  {
    timestamps: true, //registrar fechas de creaccion y actualizacion
    versionKey: false,
  }
);
module.exports = mongoose.model("tracks", TracksSchema);
