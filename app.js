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

// app.get("/api/users", function (req, res) {
//     const collection = req.app.locals.usersCollection;
//     collection.find({}).toArray(function (err, users) {

//         if (err) return res.json({ message: 'albums error' })
//         res.send(users)
//     });
// });




// const express = require('express');
// const config = require('./config/default.json');
// const mongoose = require("mongoose");
// const app = express();


// app.use(express.json({ extended: true }));
// app.use("/api/auth", require("./routes/auth.routes"));
// app.use("/api/albums", require("./routes/albums.routes"));
// const PORT = config.port || 5000;

// async function start() {
//     try {
//         await mongoose.connect(config.mongoUri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true
//         })
//         app.listen(PORT, () => console.log('We are live on ' + PORT));
//     } catch (error) {
//         console.log("Server Error", error.message)
//         process.exit(1)
//     }
// }
// start();







