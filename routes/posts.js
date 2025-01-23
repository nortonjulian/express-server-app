const express = require('express')
const router = express.Router()
const { posts } = require("../data/db")

//All posts
router.get("/", (req, res) => {
    res.json(posts)
})

//Add a post
router.post("/", (req, res) => {
    const newPost = { id: posts.length + 1, ...req.body }
    users.push(newPost)
    res.status(201).json(newPost)
})

router.get("/", (req, res) => {
    const { userId } = req.query;

    if (userId) {
        const filteredPosts = posts.filter(post => post.userId = userId)
        return res.json(filteredPosts)
    }
})

module.exports = router;