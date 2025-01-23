const express = require('express')
const router = express.Router()
const { comments } = require("../data/db")

//All users
router.get("/", (req, res) => {
    res.json(comments)
})

//Add a user
router.post("/", (req, res) => {
    const newComment = { id: comments.length + 1, ...req.body }
    users.push(newComment)
    res.status(201).json(newComment)
})

module.exports = router;