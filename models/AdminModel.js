const mongoose = require("mongoose");
const adminSchema = mongoose.Schema({
    name: {
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
    },
});

const Admin = mongoose.model("Admin", adminSchema, "Admin");
module.exports = Admin;
