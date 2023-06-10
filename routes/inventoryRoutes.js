const express = require("express");
const router = express.Router();
const inventoryController = require("../controller/inventoryCtrl");


 router.post("/create", inventoryController.createInventory);

module.exports = router;
