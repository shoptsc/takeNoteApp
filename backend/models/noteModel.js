const mongoose = require("mongoose");
const noteSchema = mongoose.Schema({
    title: {
        type: String,
    },
    event: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("notes", noteSchema);