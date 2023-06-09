const mongoose = require("mongoose");

// schema for sub_category
const subCategorySchema = new mongoose.Schema(
  {
    category_id: {
      type: String,
      required: true,
    },
    sub_category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const SubCategory = mongoose.model("SubCategory", storeSchema);

module.exports = SubCategory;
