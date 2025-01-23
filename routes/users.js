const express = require('express')
const router = express.Router()
const { users } = require("../data/db")

//All users
router.get("/", (req, res) => {
    res.json(users)
})

//Add a user
router.post("/", (req, res) => {
    const newUser = { id: users.length + 1, ...req.body }
    users.push(newUser)
    res.status(201).json(newUser)
})

module.exports = router;