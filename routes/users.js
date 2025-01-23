const express = require('express')
const router = express.Router()
const { users } = require("../data/db")

//All users
router.get("/", (req, res) => {
    res.json(users)
})

//Add a user
router.post("/", (req, res) => {
    const { username, email } = req.body;
    const newUser = { id: users.length + 1, username, email }
    users.push(newUser)
    res.status(201).json(newUser)
})

//Patch or Update a user
router.patch('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId)
    if (user) {
        user.username = req.body.username || user.username;
        user.username = req.body.email || post.email;
        res.json(user)
    } else {
        res.status(404).send("User not found")
    }
})

//Delete a user
router.delete('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIdx = users.findIndex(u => u.id === userId)
    if (userIdx !== -1) {
        users.splice(userIdx, 1);
        res.status(204).send();
    } else {
        res.status(404).send("User not found");
    }
})

module.exports = router;