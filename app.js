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


const express = require('express');
const config = require('./config/default.json');
const mongoose = require("mongoose");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const jsonParser = express.json();
const objectId = require("mongodb").ObjectID;

const mongoClient = new MongoClient(config.mongoUri, { useUnifiedTopology: true });

const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("./models/User");
const router = Router();




let dbClient;

app.use(express.static(__dirname + "/public"));


mongoClient.connect(function (err, client) {
    if (err) return console.log(err);
    dbClient = client;
    app.locals.albumsCollection = client.db("fullstack").collection("albums");
    app.locals.usersCollection = client.db("fullstack").collection("users");
    app.listen(5000, function () {
        console.log("Сервер ожидает подключения...");
    });
});

app.get("/api/albums", function (req, res) {
    const collection = req.app.locals.albumsCollection;
    collection.find({}).toArray(function (err, albums) {

        if (err) return res.json({ message: 'albums error' })
        res.send(albums)
    });
});

app.get("/api/albums/:id", function (req, res) {
    const id = new objectId(req.params.id);
    const collection = req.app.locals.albumsCollection;
    collection.findOne({ _id: id }, function (err, user) {

        if (err) return res.json({ message: 'album id error' })
        res.send(user);
    });
});


app.get("/api/users", function (req, res) {
    const collection = req.app.locals.usersCollection;
    collection.find({}).toArray(function (err, users) {

        if (err) return res.json({ message: 'albums error' })
        res.send(users)
    });
});



// /api/auth/login
app.post('/api/auth/login', jsonParser,
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ],
    async (req, res) => {
        const collection = req.app.locals.usersCollection;

        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректныe данные при входе в систему'
                })
            }

            const { email, password } = req.body
            const user = await collection.findOne({ email })
            if (!user) {
                return res.status(400).json({ message: 'Пользователь не найден' })
            }

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' })
            }

            const token = jwt.sign(
                { userId: user.id },
                config.jwtSecret,
                { expiresIn: '1h' }
            )

            res.json({ token, userId: user.id })
        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    })

// /api/auth/register
app.post('/api/auth/register', jsonParser,
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 })
    ],
    async (req, res) => {
        const collection = req.app.locals.usersCollection;

        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректныe данные при регистрации'
                })
            }

            const { email, password } = req.body
            const candidate = await collection.findOne({ email })
            if (candidate) {
                return res.status(400).json({ message: 'Такой пользователь уже существует' })
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({ email, password: hashedPassword })

            await collection.insertOne(user)

            res.status(201).json({ message: 'Пользователь создан' })

        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    })



