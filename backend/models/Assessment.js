const mongoose = require("mongoose");

const assessmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    },

    smoking: {
      type: String,
      required: true,
    },

    alcohol: {
      type: String,
      required: true,
    },

    familyHistory: {
      type: String,
      required: true,
    },

    risk: {
      type: String,
      required: true,
    },

    score: {
      type: String,
      required: true,
    },

    recommendation: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Assessment", assessmentSchema);