var PhoneModel = require("../models/PhoneModel");

var gets = async (req, res, next) => {
    var Phones = await PhoneModel.find();
    res.render("Phone/index", { Phones: Phones });
};

var get = async (req, res) => {
    var id = req.params.id;
    var Phone = await PhoneModel.findById(id);
    res.render("Phone/detail", { Phone: Phone });
};

var viewCreate = (req, res) => {
    res.render("Phone/create", { layout: false });
};

var create = async (req, res) => {
    var Phone = req.body;
    await PhoneModel.create(Phone);
    console.log("add success");
    res.redirect("/Admin");
};

var viewUpdate = async (req, res) => {
    var id = req.params.id;
    var Phone = await PhoneModel.findById(id);
    res.render("Phone/update", { Phone: Phone, layout: false });
};

var update = async (req, res) => {
    var id = req.params.id;
    var Phone = req.body;
    await PhoneModel.findByIdAndUpdate(id, Phone);
    console.log("update success");
    res.redirect("/Admin");
};

var del = async (req, res) => {
    var id = req.params.id;
    await PhoneModel.findByIdAndDelete(id);
    console.log("delete success");
    res.redirect("/Admin");
};

module.exports = {
    gets,
    get,
    viewCreate,
    create,
    viewUpdate,
    update,
    del,
};
