const mongoose = require("mongoose");
const { Schema } = mongoose;

const skill = new Schema(
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

const skillModel = mongoose.model("skill", skill);
module.exports = skillModel;
