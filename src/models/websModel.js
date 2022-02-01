const mongoose = require("mongoose");
const { Schema } = mongoose;

const webs = new Schema(
  {
    projectNames: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
    imageUrl: {
      type: String,
      default: "",
    },
    description: {
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
