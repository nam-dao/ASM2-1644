const express = require("express");
const router = express.Router();

const {
    gets,
    get,
    viewCreate,
    create,
    viewUpdate,
    update,
    del,
    search,
} = require("../controllers/PCController.js");

router.get("/create", viewCreate);

router.get("/", gets);

router.get("/:id", get);

router.post("/create", create);

router.get("/update/:id", viewUpdate);

router.post("/update/:id", update);

router.get("/delete/:id", del);

router.post("/search", search);

module.exports = router;
