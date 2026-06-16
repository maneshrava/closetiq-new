const mongoose = require("mongoose");

const clothSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    season: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Cloth",
  clothSchema
);
