const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    flag: [
      {
        type: Object,
      },
    ],

    musicLanguage: {
      type: String,
    },
    musicNotes: {
      type: String,
    },
    musicFile: [
      {
        type: String,
      },
    ],

    foodHalal: {
      type: String,
    },

    juiceHalal: {
      type: String,
    },

    foodHaram: {
      type: String,
    },

    juiceHaram: {
      type: String,
    },
    type: {
      type: String,
      default: "user"
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
