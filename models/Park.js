const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parkSchema = new Schema({
    name: { type: String, unique: true, required: true },
    description: { type: String, unique: true, required: true },
    url: { type: String, unique: true}, 
    weather: { type: String, unique: true},
    directions: { type: String, unique: true},
    latLong: { type: String, unique: true}
});

const Park = mongoose.model("Park", parkSchema);

module.exports = Park;