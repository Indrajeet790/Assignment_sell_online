const express = require("express");
const router = express.Router();
// const auth = require("../middleware/auth");
const createCategoryCtrl = require("../controller/categoryCtrl");

//category routes
router.post("/create", createCategoryCtrl.createCategory);

module.exports = router;
