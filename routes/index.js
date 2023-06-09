const express = require("express");
const router = express.Router();

// all routes are requires into a index.js file

// seller routes
router.use("/seller", require("./sellerRoutes"));
//storeRoutes
router.use("/store", require("./storeRoutes"));
//subcategory routes
router.use("/sub_category", require("./subCategoryRoutes"));
// category routes
router.use("/category", require("./categoryRoutes"));
// Inventory routes
// router.use("/inventory", require("./inventoryRoutes"));

module.exports = router;
