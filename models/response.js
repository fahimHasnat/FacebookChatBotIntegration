const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const responseSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: {type: String, required: true},
    response: [{
        key: {type: String, required: true},
        value: {type: String, required: true}
    }]
});

module.exports = mongoose.model("Response", responseSchema);