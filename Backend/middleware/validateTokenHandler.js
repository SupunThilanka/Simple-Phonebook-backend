const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    const authHeader = req.headers.authorization || req.headers.Authorization;
    
    if (authHeader && authHeader.startsWith('Bearer')) {
        token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.status(401);
                throw new Error('User is not authorized, token failed');
            }
            req.user = decoded.user;  // Attach decoded information to request object
            next();  // Call next() to pass control to the next middleware
        });
    } else {
        res.status(401);
        throw new Error('No token provided, authorization denied');
    }
});

module.exports = validateToken;       // Export the validateToken function must need {}
