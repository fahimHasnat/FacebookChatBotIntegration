const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const responseSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    response: { type: Object }
}, { strict: false });

module.exports = mongoose.model("Response", responseSchema);