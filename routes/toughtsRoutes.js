const express = require("express");
const router = express.Router();
const ToughController = require("../controllers/ToughtController");

router.get("/", ToughController.showToughts);

module.exports = router;
