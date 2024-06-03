const express = require('express')
const logger = require('./middlewares/logging');
const strictValidator = require('./middlewares/scrictValidator');

const middlewares = [
    express.json(),
    logger,
    strictValidator,
];


module.exports = middlewares;
