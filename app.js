const express = require('express');
const config = require('./config/default.json');
const app = express();
const MongoClient = require("mongodb").MongoClient;
const mongoClient = new MongoClient(config.mongoUri, { useUnifiedTopology: true });



let dbClient;
app.use(express.static(__dirname + "/public"));
const PORT = config.port || 5000;

app.use("/api/albums", require("./routes/albums.routes"));
app.use("/api/auth", require("./routes/auth.routes"));

mongoClient.connect(function (err, client) {
    if (err) return console.log(err);
    dbClient = client;
    app.locals.albumsCollection = client.db("fullstack").collection("albums");
    app.locals.usersCollection = client.db("fullstack").collection("users");
    app.locals.favoritesCollection = client.db("fullstack").collection("favorites");
    app.listen(PORT, function () {
        console.log(`Live on port ${PORT}`);
    });
});






