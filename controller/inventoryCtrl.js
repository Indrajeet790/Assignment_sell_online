const Inventory = require("../models/inventoryModel");
const Category = require("../models/categoryModel");
const SubCategory = require("../models/subCategoryModel");

const createInventory = async (req, res) => {
  try {
    const category = await Category.findOne({ name: req.body.category });
    const subCategory = await SubCategory.findOne({
      name: req.body.sub_category,
    });
    let existingCategory;
    let existingSubCategory;
    if (category) {
      existingCategory = category.name;
    } else {
      res.json({ message: "No Category Exist By This Name" });
    }
    if (subCategory) {
      existingSubCategory = subCategory.name;
    } else {
      res.json({ message: "No SubCategory Exist By This Name" });
    }
    const data = {
      category: existingCategory,
      sub_category: existingSubCategory,
      product: req.body.product,
      mrp: req.body.mrp,
      sp: req.body.sp,
      qty: req.body.qty,
    };
    const inventory = await Inventory.create(data);
    res.status(201).json(inventory);
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = {
  createInventory,
};
