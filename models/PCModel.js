const mongoose = require("mongoose");
//tạo collection trong mongodb
const PCSchema = mongoose.Schema({
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

const PC = mongoose.model("PC", PCSchema, "PC");
module.exports = PC;
