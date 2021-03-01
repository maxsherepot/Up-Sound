const { Schema, model } = require("mongoose");


const schema = new Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: String, required: true },
})


module.exports = model("Album", schema);