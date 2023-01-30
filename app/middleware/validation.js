const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const jsonwebtoken = require('jsonwebtoken');
const AUDIENCE = process.env.AUDIENCE;

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret-key';
const JWT_EXPIRES_IN = '2 days';

var checkJwt = function(req, res, next) {
        // next();
        if(req.headers.authorization) {
            var token = req.headers.authorization.split(' ')[1];
            if(jsonwebtoken.verify(token, JWT_SECRET)) {
                req.token = jsonwebtoken.decode(req.headers.authorization.split(' ')[1], JWT_SECRET);
                next();
                return;
            }
        };

        res.status(401).send({
            message: "Not authorized.",
        });
        
}

exports.checkJwt = checkJwt;