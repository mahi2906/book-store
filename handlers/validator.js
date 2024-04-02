const constants = require('../config');
const { successHandler, errorHandler } = require('../handlers');
const jwt = require("jsonwebtoken");

module.exports = {
    validateToken: (req, res, next) => {
        const authorizationHeader = req.headers ? req.headers.authorization : null;

        if (!authorizationHeader) {
            const err = {
                name: 'Unauthorized',
                message: 'Authentication error, Token required.'
            };
            return errorHandler(err, req, res, next);
        }

        const token = authorizationHeader.split(' ')[1]; // Bearer <token>
        const options = {
            expiresIn: '72h'
        };

        try {
            const result = jwt.verify(token, constants.JWT_SECRET, options);
            req.decoded = result;
            next();
        } catch (err) {
            if (err.name === 'TokenExpiredError') {
                const customErr = {
                    name: 'Unauthorized',
                    message: 'Authentication error, Token expired.'
                };
                return errorHandler(customErr, req, res, next);
            } else {
                const customErr = {
                    name: 'Unauthorized',
                    message: 'Authentication error, Invalid token.',
                    data: { isvalid: false }
                };
                return errorHandler(customErr, req, res, next);
            }
        }
    }
};

