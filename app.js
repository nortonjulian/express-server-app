const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(path.join(__dirname, 'public'))));

// Template Engine
app.set("view engine", "ejs")

//Routes
const userRoutes = require("./routes/users")
const postRoutes = require("./routes/posts")
const commentRoutes = require("./routes/comments")

app.use("/users", userRoutes)
app.use("/posts", postRoutes)
app.use("/comments", commentRoutes)

// Error-handling middleware
const errorHandler = require("./middleware/errorHandler")
app.use(errorHandler)

app.get("/", (req, res) => {
    res.render("index")
})

//Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})


