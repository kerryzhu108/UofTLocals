const express = require("express");
const { Business } = require("./../models/Business");
const { Student } = require("./../models/Student");

const utils = require("./../utils/utils");
const { body, validationResult } = require("express-validator");

const router = express.Router();

// Register business account
router.post(
    "/register/business",
    utils.checkDbConnection,
    body("email").isEmail(),
    body("username").isString(),
    body("password").isString(),
    body("name").isString(),
    body("desc").isString(),
    body("type").isString(),
    utils.validationHandler,
    async function (req, res) {
        // Create encrypted password
        const password = await utils.hashPassword(req.body.password);

        try {
            // Create business using provided parameters
            const business = new Business({
                name: req.body.name,
                email: req.body.email,
                username: req.body.username,
                password: password,
                type: req.body.type,
                description: req.body.desc,
                comments: [],
                announcements: [],
                dateCreated: new Date().toLocaleString().split(",")[0],
            });

            await business.save();
            return res.send(business);
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal server error");
        }
    }
);

// Register student account
router.post(
    "/register/student",
    utils.checkDbConnection,
    body("email").isEmail(),
    body("username").isString(),
    body("password").isString(),
    body("first_name").isString(),
    body("last_name").isString(),
    utils.validationHandler,
    async function (req, res) {
        const password = await utils.hashPassword(req.body.password);

        try {
            const student = new Student({
                username: req.body.username,
                email: req.body.email,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                password: password,
                created: Date(),
            });
            await student.save();

            // TODO: Should not send hashed password back to user
            // for security reasons.
            return res.send(student);
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal server error");
        }
    }
);

// Login to business account
router.post(
    "/login/business",
    utils.checkDbConnection,
    body("username").isString(),
    body("password").isString(),
    utils.validationHandler,
    async function (req, res) {
        try {
            const business = await Business.findOne({
                username: req.body.username,
            });
            if (!business) return res.status(404).send("Business not found");

            // Compare send password with hashed password
            const password_result = await utils.checkPassword(
                req.body.password,
                business.password
            );

            if (!password_result)
                return res.status(403).send("Invalid password");

            // This user is valid, generate an access token
            const access_token = utils.generateAccessToken(
                business.id,
                business.username,
                "business"
            );

            // Set the session variable's user to access token
            req.session.user = access_token;

            const return_value = {
                id: business.id,
                username: business.username,
                tokens: {
                    access: access_token,
                },
            };

            return res.json(return_value);
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal server error");
        }
    }
);

// Login to student account
router.post(
    "/login/student",
    utils.checkDbConnection,
    body("username").isString(),
    body("password").isString(),
    utils.validationHandler,
    async function (req, res) {
        try {
            const student = await Student.findOne({
                username: req.body.username,
            });
            if (!student) return res.status(404).send("Student not found");

            // Compare send password with hashed password
            const password_result = await utils.checkPassword(
                req.body.password,
                student.password
            );

            if (!password_result)
                return res.status(403).send("Invalid password");

            // This user is valid, generate an access token
            const access_token = utils.generateAccessToken(
                student.id,
                student.username,
                student.type
            );

            // Set the session variable's user to access token
            req.session.user = access_token;

            const return_value = {
                id: student.id,
                username: student.username,
                tokens: {
                    access: access_token,
                },
            };

            return res.json(return_value);
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal server error");
        }
    }
);

// Get student profile or business profile information
router.get(
    "/profile",
    utils.checkDbConnection,
    utils.authenticateToken,
    async function (req, res) {
        try {
            // Determine this user's type
            if (req.user.type == "business") {
                const business = await Business.findById(req.user.id);
                if (!business) {return res.status(404).send("Business not found")}
                return res.json({
                    id: req.user.id,
                    type: req.user.type,
                    name: business.name,
                    email: business.email,
                });
            } else if (req.user.type == "student" || req.user.type == "admin") {
                const student = await Student.findById(req.user.id);
                if (!student) {return res.status(404).send("Business not found")}
                return res.json({
                    id: req.user.id,
                    type: req.user.type,
                    name: student.username,
                    email: student.email,
                    firstname: student.first_name,
                    lastname: student.last_name,
                    profileImageURL: student.profileImageURL,
                });
            } else {
                return res.status(400).send("Unknown user type");
            }
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal server error");
        }
    }
);

module.exports = router;
