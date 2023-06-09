const express = require("express");
const router = express.Router();
const sellerController = require("../controller/sellerController");

router.post("/signup", sellerController.signUp);
router.post("/signin", sellerController.signIn);

module.exports = router;
