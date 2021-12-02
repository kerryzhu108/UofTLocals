const bcrypt = require("bcrypt");
const { mongoose } = require("./../db/mongoose");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

// Hash password using bcrypt algorithm
async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const encrypted = await bcrypt.hash(password, salt);
    return encrypted;
}

// Check hashed password against received plaintext password
async function checkPassword(password, hashed_password) {
    return await bcrypt.compare(password, hashed_password);
}

// Generate an access token containing the user id and email
function generateAccessToken(id, email) {
    const user = {
        id: id,
        email: email,
    };

    const token = jwt.sign(user, process.env.SECRET_KEY, {
        expiresIn: 1800,
    });

    return token;
}

// Router middleware to authenticate user with a given token
// Ensures that no users can forge requests since it requires
// a unique access token.
function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) return res.status(401).send("Unauthorized");

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) return res.status(403).send("Forbidden");
        req.user = user;
        next();
    });
}

// Middleware function to test whether mongoose is connected or not
function checkDbConnection(req, res, next) {
    if (mongoose.connection.readyState != 1) {
        console.log("Issue with mongoose connection!");
        return res.status(500).send("Internal server error");
    }

    next();
}

// Middleware to handle validation errors
function validationHandler(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json(errors.array());
    }

    next();
}

module.exports = {
    hashPassword: hashPassword,
    checkPassword: checkPassword,
    generateAccessToken: generateAccessToken,
    authenticateToken: authenticateToken,
    checkDbConnection: checkDbConnection,
    validationHandler: validationHandler,
};
