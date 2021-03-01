const { Router } = require("express");
const objectId = require("mongodb").ObjectID;
const router = Router();
const Album = require("../models/Album");


router.get('', async (req, res) => {
    const collection = req.app.locals.albumsCollection;

    collection.find({}).toArray(function (err, albums) {

        if (err) return res.json({ message: 'albums error' })
        res.send(albums)
    });
});


router.get('/:id', async (req, res) => {
    const id = new objectId(req.params.id);
    const collection = req.app.locals.albumsCollection;

    collection.findOne({ _id: id }, function (err, album) {

        if (err) return res.json({ message: 'album id error' })
        res.send(album);
    });
});


// router.post(
//     '/albums', async (req, res) => {
//         // const id = req.params.id;
//         // const details = { '_id': new ObjectID(id) };
//         try {
//             const album = new Album({ title: "12", author: "13" })
//             await album.save()

//             res.status(201).json({ message: 'Пользователь создан' })
//         } catch (e) {
//             res.status(500).json({ message: 'HZ' })
//         }
//     })


// router.get(
//     '/albums/:id', async (req, res) => {
//         const id = req.params.id;
//         const details = { '_id': new ObjectID(id) };
//         try {
//             const shit = await Album.findOne({ _id: details })
//             if (!shit) {
//                 return res.status(400).json({ message: 'shit не найден' })
//             }
//             res.send({ shit })

//         } catch (e) {
//             res.status(500).json({ message: 'HZ' })
//         }
//     })


module.exports = router