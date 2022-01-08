const mongoose = require("mongoose");
const { Schema } = mongoose;

const videos = new Schema(
  {
    keyword: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
    votes: {
      type: Number,
      default: 0,
    },

    comments: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const videosModel = mongoose.model("webModel", videos);
module.exports = videosModel;
