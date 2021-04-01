const express = require('express');
const { Router } = require("express");
const bcrypt = require("bcryptjs");
const config = require("../config/default.json");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const router = Router();
const jsonParser = express.json();



router.post('/register', jsonParser,
    [
        check('email', 'Wrong email').isEmail(),
        check('password', 'Minimum password length is 6 symbols').isLength({ min: 6 })
    ],
    async (req, res) => {
        const collection = req.app.locals.usersCollection;

        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Wrong register data'
                })
            };
            const { email, password } = req.body;
            const candidate = await collection.findOne({ email });
            if (candidate) {
                return res.status(400).json({ message: 'Email already exists' })
            };
            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({ email, password: hashedPassword });
            await collection.insertOne(user);

            res.status(201).json({ message: 'User created' });
        } catch (e) {
            res.status(500).json({ message: 'Something went wrong, please try again' })
        };
    });


router.post('/login', jsonParser,
    [
        check('email', 'Enter correct email').normalizeEmail().isEmail(),
        check('password', 'Enter password').exists()
    ],
    async (req, res) => {
        const collection = req.app.locals.usersCollection;

        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Wrong data'
                })
            }
            const { email, password } = req.body;
            const user = await collection.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: 'User not found' })
            };

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Wrong password, try again' })
            };

            const token = jwt.sign(
                { userId: user.id },
                config.jwtSecret,
                { expiresIn: '1h' }
            );
            res.json({ token, userId: user.id });
        } catch (e) {
            res.status(500).json({ message: 'Something went wrong, please try again' })
        };
    });



module.exports = router;