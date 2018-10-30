const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parkSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true }
});

const Park = mongoose.model("Park", parkSchema);

module.exports = Park;