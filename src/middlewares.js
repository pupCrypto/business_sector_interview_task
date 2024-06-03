const logger = require('./middlewares/logging');

const middlewares = [
    logger,
];


module.exports = middlewares;
