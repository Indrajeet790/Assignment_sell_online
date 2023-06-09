const express = require("express");
const router = express.Router();
// const auth = require("../middleware/auth");
const storeCtrl = require("../controller/storeController");

//store routes
router.post("/create", storeCtrl.addStoreInfo);

module.exports = router;
