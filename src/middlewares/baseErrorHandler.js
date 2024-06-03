function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
    return;
}

module.exports = errorHandler;
