const PCModel = require("../models/PCModel");
const PhoneModel = require("../models/PhoneModel");
const AdminModel = require("../models/AdminModel");

var gets = async (req, res) => {
    var PCs = await PCModel.find();
    var Phones = await PhoneModel.find();
    var Accs = await AdminModel.find();
    res.render("admin/manager", {
        PCs: PCs,
        Phones: Phones,
        Accs: Accs,
        layout: false,
    });
};

var viewCreate = (req, res) => {
    res.render("customer/signup", { layout: false });
};

var signin = (req, res) => {
    res.render("customer/signin", { layout: false });
};

var create = async (req, res) => {
    var Acc = req.body;
    await AdminModel.create(Acc);
    console.log("create successful");
    res.render("customer/signin", { layout: false });
};

var viewUpdate = async (req, res) => {
    var id = req.params.id;
    var Acc = await AdminModel.findById(id);
    res.render("admin/update", { Acc: Acc, layout: false });
};

var update = async (req, res) => {
    var id = req.params.id;
    var Acc = req.body;
    await AdminModel.findByIdAndUpdate(id, Acc);
    console.log("update success");
    res.redirect("/Admin");
};

var del = async (req, res) => {
    var id = req.params.id;
    await AdminModel.findByIdAndDelete(id);
    console.log("delete success");
    res.redirect("/Admin");
};

var viewCreateAdmin = (req, res) => {
    res.render("Admin/create", { layout: false });
};

var CreateAdmin = async (req, res) => {
    var Acc = req.body;
    await AdminModel.create(Acc);
    console.log("create successful");
    res.redirect("/Admin");
};

var login = async (req, res) => {
    var login = await AdminModel.findOne({
        name: req.body.name,
        password: req.body.password,
        role: "admin",
    });
    if (login) res.redirect("/Admin");
    else res.redirect("/Admin/show");
};

var show = async (req, res) => {
    var PCs = await PCModel.find();
    var Phones = await PhoneModel.find();
    res.render("admin/listproduct", { PCs: PCs, Phones: Phones });
};

module.exports = {
    viewCreateAdmin,
    CreateAdmin,
    gets,
    signin,
    viewCreate,
    create,
    viewUpdate,
    update,
    del,
    login,
    show,
};
