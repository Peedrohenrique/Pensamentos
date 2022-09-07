const express = require("express");
const router = express.Router();
const ToughController = require("../controllers/ToughtController");

// helpers
const checkAuth = require("../helpers/auth").checkAuth;

router.get("/dashboard", checkAuth, ToughController.dashboard);
router.get("/", ToughController.showToughts);

module.exports = router;
