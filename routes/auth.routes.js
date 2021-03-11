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
            res.status(500).json({ message: 'Something went wrong, please try again' })
        }
    })


router.post('/login', jsonParser,
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
            res.status(500).json({ message: 'Something went wrong, please try again' })
        }
    })


module.exports = router