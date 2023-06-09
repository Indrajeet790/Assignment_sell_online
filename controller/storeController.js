const Store = require("../models/storeModel");

const auth = require("../middleware/auth");

const addStoreInfo = async (req, res) => {
  try {
    const data = await Store.create(req.body);
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
  addStoreInfo,
};
