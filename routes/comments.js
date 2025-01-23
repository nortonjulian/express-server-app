const express = require('express')
const router = express.Router()
const { comments } = require("../data/db")

//All comments
router.get("/", (req, res) => {
    res.json(comments)
})

//Add a comment
router.post("/", (req, res) => {
    const { postId, comment } = req.body;
    const newComment = { id: comments.length + 1, postId, comment }
    users.push(newComment)
    res.status(201).json(newComment)
})

//Patch or Update a comment
router.patch('/:id', (req, res) => {
    const commentId = parseInt(req.params.id);
    const comment = comments.find(c => c.id === commentId)
    if (comment) {
        comment.content = req.body.content || comment.content;
        res.json(comment)
    } else {
        res.status(404).send("Comment not found")
    }
})

//Delete a comment
router.delete('/:id', (req, res) => {
    const commentId = parseInt(req.params.id);
    const commentIdx = comments.findIndex(c => c.id === commentId)
    if (commentIdx !== -1) {
        comments.splice(commentIdx, 1);
        res.status(204).send();
    } else {
        res.status(404).send("Comment not found");
    }
})


module.exports = router;