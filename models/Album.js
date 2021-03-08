const { Schema, model } = require("mongoose");


const schema = new Schema({
    author: { type: String, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    year: { type: String, required: true },
    email: { type: String, required: true },
    duration: { type: String, required: true },
    tracks: { type: String, required: true },
    youTubeMusic_link: { type: String, required: true },
    spotify_link: { type: String, required: true },
})


module.exports = model("Album", schema);