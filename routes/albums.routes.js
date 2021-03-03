const { Router } = require("express");
const objectId = require("mongodb").ObjectID;
const router = Router();
const Album = require("../models/Album");
const jwt = require('jsonwebtoken')

const auth = require("../middleware/auth.middleware");
const config = require('../config/default.json')
const express = require('express');
const jsonParser = express.json();


router.get('/favorites', async (req, res) => {
    const collection = req.app.locals.favoritesCollection;
    collection.find({}).toArray(function (err, favorites) {

        if (err) {
            res.status(500).json({ message: 'favorites error' })
        }
        res.status(201).send(favorites)
    });
});


router.post('/favorites', jsonParser,
    async (req, res) => {
        const collection = req.app.locals.favoritesCollection;

        try {
            const { title, year, author, image } = req.body
            const candidate = await collection.findOne({ title, author })
            if (candidate) {
                return res.status(400).json({ message: 'Такой альбом уже существует' })
            }

            const album = new Album({ title, year, author, image })
            await collection.insertOne(album)

            res.status(201).json({ message: 'album added' })
            // await collection.update({ email: "maxsherepot@gmail.com" }, { $push: { favorites: { favAlbum } } })
        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    })


// router.get('/favorites', async (req, res) => {
//     const collection = req.app.locals.usersCollection;

//     try {
//         const data = await collection.find()
//         //const fav = data.find({ "type": "album" })
//         const fav = data.distinct("favorites.type");
//         //res.json({ message: `data ${data} fav ${fav}` })
//         res.json({ message: fav })
//         // const albums = await req.app.locals.usersCollection.Album
//         //const albums = Album
//         // const albums = await req.app.locals.usersCollection.Album.find({ owner: req.user }) || null
//         //const albums = await Album.find({ owner: req.user.userId })
//         //res.json({ message: 'пщщв' })
//     } catch (e) {
//         res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
//     }
// })


// router.post('/favorites', async (req, res) => {
//     //const token = req.headers.authorization
//     const collection = req.app.locals.usersCollection;

//     // if (!token) {
//     //     return res.status(401).json({ "req.headers.authorization": req.headers.authorization })
//     //     //return res.status(401).json({ message: 'Нет авторизации' })
//     // }
//     // const decoded = jwt.verify(token, config.jwtSecret)
//     // req.user = decoded

//     // console.log("req.user.userId:", req.user.userId)
//     //res.json(req.user.userId)

//     try {
//         //res.json({ message: req.user.userId })
//         const favAlbum = new Album({
//             title: "title 2", year: "2222", type: "album"
//         })
//         await collection.update({ email: "maxsherepot@gmail.com" }, { $push: { favorites: { favAlbum } } })
//         //res.json(req.app.locals.usersCollection)
//         //await req.app.locals.usersCollection.favorites.insertOne(favAlbum)
//         res.status(201).json({ message: '!!!' })

//     } catch (e) {
//         res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
//     }
// })



router.get('', async (req, res) => {
    const collection = req.app.locals.albumsCollection;
    collection.find({}).toArray(function (err, albums) {

        if (err) {
            res.status(500).json({ message: 'albums error' })
        }
        res.status(201).send(albums)
    });
});


router.get('/:id', async (req, res) => {
    const id = new objectId(req.params.id);
    const collection = req.app.locals.albumsCollection;
    collection.findOne({ _id: id }, function (err, album) {

        if (err) {
            res.status(500).json({ message: 'album id error' })
        }
        res.status(201).send(album)
    });
});



module.exports = router