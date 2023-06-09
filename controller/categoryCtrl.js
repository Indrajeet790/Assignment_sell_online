const Category = require("../models/categoryModel");
const jwt = require("jsonwebtoken");
let secretKey = "Secret";

// create a category
const createCategory = async (req, res) => {
  try {
    //
    let token;
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      token = bearer[1];
    }
    jwt.verify(token, secretKey, async (err, authData) => {
      if (err) {
        res.send({ message: "Invalid Seller" });
      } else {
        // find category name
        const category = await Category.findOne({ name: req.body.name });
        if (!category) {
          // create category
          const data = await Category.create(req.body);
          res.status(201).json(data);
        } else {
          res.send({ message: "Category By Same Name Already Exist" });
        }
      }
    });
  } catch (error) {
    res.send({ error: error.message });
  }
};

module.exports = {
  createCategory,
};
