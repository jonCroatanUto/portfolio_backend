const mongoose = require("mongoose");
const { Schema } = mongoose;

const abouteMe = new Schema(
  {
    skill: {
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

const AboutMeModel = mongoose.model("aboutMeModel", abouteMe);
module.exports = AboutMeModel;
