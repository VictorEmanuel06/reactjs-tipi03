const { text } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemoriaSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    text: {
        type: String,
        require: true,
    },
    src: {
        type: String,
        require: true,
    },
    favorite: {
        type: Boolean,
    },
},
{ timestamps: true }
);

module.exports = mongoose.model("Memoria", MemoriaSchema);