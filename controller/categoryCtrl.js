const Category = require("../models/categoryModel");

const createCategory = async (req, res) => {
  try {
    const data = await Category.create(req.body);
    if (data) {
      return res.status(201).json(data);
    }

    return res.status(400).json({
      error: "Store not created",
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createCategory,
};
