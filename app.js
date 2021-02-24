const express = require('express');
const config = require('./config/default.json');
const mongoose = require("mongoose");
const app = express();


app.use(express.json({ extended: true }));

app.use("/api/auth", require("./routes/auth.routes"));

const PORT = config.port || 5000;

async function start() {
    try {
        await mongoose.connect(config.mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log('We are live on ' + PORT));
    } catch (error) {
        console.log("Server Error", error.message)
        process.exit(1)
    }
}
start();



    // app.use(bodyParser.urlencoded({ extended: true }));

// MongoClient.connect(db.url, (err, client) => {
//     let database = client.db('notes');

//     if (err) return console.log("ERROR" + err)
//     require('./app/routes')(app, database); 
//     app.listen(port, () => {
//         console.log('We are live on ' + port);
//     });
// })
