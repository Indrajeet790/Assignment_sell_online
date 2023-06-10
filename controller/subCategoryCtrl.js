const SubCategory = require("../models/subCategoryModel");

const createSubCategory = async (req, res) => {
  try {
    const subcategory = await SubCategory.findOne({ name: req.body.name });
    if (!subcategory) {
      // create sub_category
      const data = await SubCategory.create(req.body);
      res.status(201).json(data);
    } else {
      res.send({ message: "subCategory By Same Name Already Exist" });
    }
  } catch (error) {
    throw error;
  }
};
module.exports = {
  createSubCategory,
};
