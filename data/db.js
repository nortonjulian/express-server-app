const users = [
    {id: 1, name: "Jade", email: "Jade@perscholas.com"},
    {id: 2, name: "Ous", email: "Oussama@perscholas.com"}
]

const posts = [
    {id: 1, title: "First Post", content: "Hello, world!", userId: 1},
    {id: 2, title: "Second Post", content: "This is a test.", userId: 2},
]

const comments = [
    {id: 1, postId: 1, content: "Great post!"},
    {id: 2, postId: 2, content: "Thanks for sharing"},
]

module.exports = { users, posts, comments }