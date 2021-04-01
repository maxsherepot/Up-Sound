const { Router } = require("express");
const objectId = require("mongodb").ObjectID;
const router = Router();
const Album = require("../models/Album");
const express = require('express');
const jsonParser = express.json();



router.get('/favorites/:email', async (req, res) => {
    const collection = req.app.locals.favoritesCollection;
    const email = req.params.email;
    collection.find({ email }).toArray(function (err, favorites) {
        if (err) {
            res.status(500).json({ message: 'Something went wrong, please try again' })
        }
        res.send(favorites);
    });
});


router.post('/favorites', jsonParser, async (req, res) => {
    const collection = req.app.locals.favoritesCollection;

    try {
        const { title, year, author, image, email, duration, tracks, youTubeMusic_link, spotify_link } = req.body;
        const candidate = await collection.findOne({ email, title, author });
        if (candidate) {
            return res.status(400).json({ message: 'Already in favorites' })
        }
        const album = new Album({ title, year, author, image, email, duration, tracks, youTubeMusic_link, spotify_link });
        await collection.insertOne(album);
        res.status(201).json({ message: 'album added' });
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong, please try again' })
    };
});


router.delete('/favorites/:id', jsonParser, async (req, res) => {
    const collection = req.app.locals.favoritesCollection;
    const id = new objectId(req.params.id);

    try {
        const existing = await collection.findOne({ _id: id });
        if (!existing) {
            return res.status(400).json({ message: 'no such album' })
        }
        await collection.deleteOne({ _id: id });
        res.json({ message: 'album deleted' });
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong, please try again' })
    };
});


router.get('', async (req, res) => {
    const collection = req.app.locals.albumsCollection;
    collection.find({}).toArray(function (err, albums) {
        if (err) {
            res.status(500).json({ message: 'Something went wrong, please try again' })
        }
        res.send(albums);
    });
});


router.get('/:id', async (req, res) => {
    const id = new objectId(req.params.id);
    const collection = req.app.locals.albumsCollection;
    collection.findOne({ _id: id }, function (err, album) {
        if (err) {
            res.status(500).json({ message: 'Something went wrong, please try again' });
        }
        res.send(album);
    });
});


router.get('/favorites/favoriteAlbum/:id', async (req, res) => {
    const id = new objectId(req.params.id);
    const collection = req.app.locals.favoritesCollection;
    collection.findOne({ _id: id }, function (err, album) {
        if (err) {
            res.status(500).json({ message: 'Something went wrong, please try again' });
        }
        res.send(album);
    });
});



module.exports = router;