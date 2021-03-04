const { Schema, model, Types } = require("mongoose");


const schema = new Schema({
    author: { type: String, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    year: { type: String, required: true },
    email: { type: String, required: true },
    //owner: {type: Types.ObjectId, ref: 'User'}
})


module.exports = model("Album", schema);