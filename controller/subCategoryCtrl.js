const SubCategory = require("../models/subCategoryModel");
const jwt = require("jsonwebtoken");
let secretKey = "Secret";

const createSubCategory = async (req, res) => {
  try {
    let token;
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      token = bearer[1];
    }
    jwt.verify(token, secretKey, async (err, authData) => {
      if (err) {
        res.send({ message: "Invalid seller" });
      } else {
        // find sub_category
        const subcategory = await SubCategory.findOne({ name: req.body.name });
        if (!subcategory) {
          // create sub_category
          const data = await SubCategory.create(req.body);
          res.status(201).json(data);
        } else {
          res.send({ message: "subCategory By Same Name Already Exist" });
        }
      }
    });
  } catch (error) {
    res.send({ error: error.message });
  }
};

module.exports = {
  createSubCategory,
};
