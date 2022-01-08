const mongoose = require("mongoose");
const { Schema } = mongoose;

const webs = new Schema(
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

const webModel = mongoose.model("webs", webs);
module.exports = webModel;
