const { Router } = require("express");
const bcrypt = require("bcryptjs");
const express = require('express');


const config = require("../config/default.json");

const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const router = Router();

const ObjectID = require('mongodb').ObjectID;
const Album = require("../models/Album");
const app = express();


router.post(
    '/albums', async (req, res) => {
        // const id = req.params.id;
        // const details = { '_id': new ObjectID(id) };

        try {
            const album = new Album({ title: "12", author: "13" })
            await album.save()

            res.status(201).json({ message: 'Пользователь создан' })

        } catch (e) {
            res.status(500).json({ message: 'HZ' })
        }
    })


router.get(
    '/albums/:id', async (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };

        try {
            const shit = await Album.findOne({ _id: details })

            if (!shit) {
                return res.status(400).json({ message: 'shit не найден' })
            }
            res.send({ shit })

        } catch (e) {
            res.status(500).json({ message: 'HZ' })
        }
    })


router.get('/albums', async (req, res) => {

    const collection = db.collection;

    try {
        console.log("COLLECTION:", collection)
        res.send({ collection })

    } catch (e) {
        console.log("COLLECTION:", collection)
        res.status(500).json({ message: 'HZ' })
    }

});














module.exports = router