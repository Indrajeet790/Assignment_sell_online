const express = require("express");
const router = express.Router();
// const auth = require("../middleware/auth");
const subcategoryCtrl = require("../controller/subCategoryCtrl");

//category routes
router.post("/create", subcategoryCtrl.createSubCategory);

module.exports = router;
