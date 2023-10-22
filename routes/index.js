var express = require("express");
var router = express.Router();
const PCModel = require("../models/PCModel");
const PhoneModel = require("../models/PhoneModel");

/* GET home page. */
router.get("/", async (req, res) => {
    var PCs = await PCModel.find();
    var Phones = await PhoneModel.find();
    res.render("admin/listproduct", { PCs: PCs, Phones: Phones });
});

module.exports = router;
