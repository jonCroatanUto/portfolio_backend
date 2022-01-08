const mongoose = require("mongoose");
const { Schema } = mongoose;

const skill = new Schema(
  {
    skill: {
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

const skillModel = mongoose.model("skills", skill);
module.exports = skillModel;
