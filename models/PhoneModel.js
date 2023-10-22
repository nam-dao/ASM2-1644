const mongoose = require("mongoose");
//tạo collection trong mongodb
const PhoneSchema = mongoose.Schema({
    name: {
        type: String,
    },
    origin: {
        type: String,
    },
    price: {
        type: String,
    },
    oldPrice: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
});

const Phone = mongoose.model("Phone", PhoneSchema, "Phone");
module.exports = Phone;
