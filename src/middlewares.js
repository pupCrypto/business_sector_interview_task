const express = require('express')
const errorHandler = require('./middlewares/baseErrorHandler');
const logger = require('./middlewares/logging');

const middlewares = [
    express.json(),
    logger,
];


module.exports = middlewares;
