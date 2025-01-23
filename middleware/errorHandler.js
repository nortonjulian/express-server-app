function errorHandler(err, req, res, next) {
    console.log(err.stack)
    res.statues(500).send("Something went wrong")
}

module.exports = errorHandler;