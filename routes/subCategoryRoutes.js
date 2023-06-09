const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const subcategoryctrl = require("../controller/subCategoryCtrl");

//category routes
router.post("/create", auth, subcategoryctrl.createSubCategory);

module.exports = router;
