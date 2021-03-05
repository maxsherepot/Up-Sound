const { Router } = require("express");
const objectId = require("mongodb").ObjectID;
const router = Router();
const Album = require("../models/Album");
const express = require('express');
const jsonParser = express.json();


router.get('/favorites/:email', async (req, res) => {
    const collection = req.app.locals.favoritesCollection;
    const email = req.params.email
    collection.find({ email }).toArray(function (err, favorites) {

        if (err) {
            res.status(500).json({ message: 'favorites error' })
        }
        res.send(favorites)
    });
});


router.post('/favorites', jsonParser, async (req, res) => {
    const collection = req.app.locals.favoritesCollection;

    try {
        const { title, year, author, image, email } = req.body
        const candidate = await collection.findOne({ email, title, author })
        if (candidate) {
            return res.status(400).json({ message: 'Такой альбом уже существует' })
        }
        const album = new Album({ title, year, author, image, email })
        await collection.insertOne(album)

        res.status(201).json({ message: 'album added' })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})


router.get('', async (req, res) => {
    const collection = req.app.locals.albumsCollection;
    collection.find({}).toArray(function (err, albums) {

        if (err) {
            res.status(500).json({ message: 'albums error' })
        }
        res.send(albums)
    });
});


router.get('/:id', async (req, res) => {
    const id = new objectId(req.params.id);
    const collection = req.app.locals.albumsCollection;
    collection.findOne({ _id: id }, function (err, album) {

        if (err) {
            res.status(500).json({ message: 'album id error' })
        }
        res.send(album)
    });
});

router.get('/favorites/favoriteAlbum/:id', async (req, res) => {
    const id = new objectId(req.params.id);

    const collection = req.app.locals.favoritesCollection;
    collection.findOne({ _id: id }, function (err, album) {

        if (err) {
            res.status(500).json({ message: 'favorite album id error' })
        }
        res.send(album)
    });
});



module.exports = router;