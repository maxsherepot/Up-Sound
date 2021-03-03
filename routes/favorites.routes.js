const { Router } = require("express");
const objectId = require("mongodb").ObjectID;
const router = Router();
const Album = require("../models/Album");

const config = require('config')
const Link = require('../models/Link')
const auth = require('../middleware/auth.middleware')
const router = Router()


router.post('/generate', auth, async (req, res) => {
  try {
    const baseUrl = config.get('baseUrl')
    const {from} = req.body

    const code = shortid.generate()

    const existing = await Link.findOne({ from })

    if (existing) {
      return res.json({ link: existing })
    }

    const to = baseUrl + '/t/' + code

    const link = new Link({
      code, to, from, owner: req.user.userId
    })

    await link.save()

    res.status(201).json({ link })
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})


router.get('/', auth, async (req, res) => {
  try {
    const links = await Link.find({ owner: req.user.userId })
    res.json(links)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})


module.exports = router





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

