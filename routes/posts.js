const express = require('express')
const router = express.Router()
const { posts } = require("../data/db")

//All posts
// router.get("/", (req, res) => {
//     res.json(posts)
// })

router.get("/", (req, res) => {
    const { userId } = req.query;

    if (userId) {
        const filteredPosts = posts.filter(post => post.userId = userId)
        return res.json(filteredPosts)
    }
    res.json(posts)
})

//Add a post
router.post("/", (req, res) => {
    const { title, content } = req.body;
    const newPost = { id: posts.length + 1, title, content }
    posts.push(newPost)
    res.status(201).json(newPost)
})

//Patch or Update a post
router.patch('/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId)
    if (post) {
        post.title = req.body.title || post.title;
        post.content = req.body.content || post.content;
        res.json(post)
    } else {
        res.status(404).send("Post not found")
    }
})

//Delete a post
router.delete('/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const postIdx = posts.findIndex(p => p.id === postId)
    if (postIdx !== -1) {
        posts.splice(postIdx, 1);
        res.status(204).send();
    } else {
        res.status(404).send("Post not found");
    }
})


module.exports = router;