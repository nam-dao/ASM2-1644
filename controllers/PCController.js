var PCModel = require("../models/PCModel");
var PhoneModel = require("../models/PhoneModel");

var gets = async (req, res, next) => {
    var PCs = await PCModel.find();
    res.render("PC/index", { PCs: PCs });
};

var get = async (req, res) => {
    var id = req.params.id;
    var PC = await PCModel.findById(id);
    res.render("PC/detail", { PC: PC });
};

var viewCreate = (req, res) => {
    res.render("PC/create", { layout: false });
};

var create = async (req, res) => {
    var PC = req.body;
    await PCModel.create(PC);
    console.log("add success");
    res.redirect("/Admin");
};

var viewUpdate = async (req, res) => {
    var id = req.params.id;
    var PC = await PCModel.findById(id);
    res.render("PC/update", { PC: PC, layout: false });
};

var update = async (req, res) => {
    var id = req.params.id;
    var PC = req.body;
    await PCModel.findByIdAndUpdate(id, PC);
    console.log("update success");
    res.redirect("/Admin");
};

var del = async (req, res) => {
    var id = req.params.id;
    await PCModel.findByIdAndDelete(id);
    console.log("delete success");
    res.redirect("/Admin");
};

var search = async (req, res) => {
    var keyword = req.body.name;
    var PCs = await PCModel.find({ name: new RegExp(keyword, "i") });
    var Phones = await PhoneModel.find({ name: new RegExp(keyword, "i") });
    res.render("admin/listproduct", { PCs: PCs, Phones: Phones });
};

module.exports = {
    gets,
    get,
    viewCreate,
    create,
    viewUpdate,
    update,
    del,
    search,
};
