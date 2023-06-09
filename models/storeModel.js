// storeModel.js
const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
    },
    gst: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    storeTimings: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
