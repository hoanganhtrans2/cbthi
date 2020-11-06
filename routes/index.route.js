var express = require("express");
var router = express.Router();
var indexController = require("../controller/index.controller");

router.get("/index", indexController.getAllSinhVien);
router.get("/index/:id", indexController.getSinhVienById);

module.exports = router;
