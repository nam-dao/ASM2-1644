var express = require("express");
var router = express.Router();

const {
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
} = require("../controllers/AdminController.js");

router.get("/create", viewCreate);

router.get("/createAd", viewCreateAdmin);

router.get("/signin", signin);

router.get("/", gets);

router.post("/create", create);

router.post("/createAd", CreateAdmin);

router.get("/update/:id", viewUpdate);

router.post("/update/:id", update);

router.get("/delete/:id", del);

router.post("/login", login);

router.get("/show", show);

module.exports = router;
