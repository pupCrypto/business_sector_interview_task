const { validationResult } = require('express-validator');


function strictValidatorMiddleware(req, res, next) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    res.json(errors.errors);
}


module.exports = strictValidatorMiddleware;
