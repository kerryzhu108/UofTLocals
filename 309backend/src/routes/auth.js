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
    body("password").isString(),
    body("name").isString(),
    // body("type").isString(),
    body("desc").isString(),
    utils.validationHandler,
    async function (req, res) {
        // Create encrypted password
        const password = await utils.hashPassword(req.body.password);

        try {
            // Create business using provided parameters
            const business = new Business({
                name: req.body.name,
                email: req.body.email,
                password: password,
                type: "Business", //placeholder, use req.body.type later 
                description: req.body.desc,
                comments: [],
                announcements: [],
                dateCreated: new Date().toLocaleString().split(',')[0]
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
    body("password").isString(),
    body("first_name").isString(),
    body("last_name").isString(),
    utils.validationHandler,
    async function (req, res) {
        const password = await utils.hashPassword(req.body.password);

        try {
            const student = new Student({
                email: req.body.email,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                password: password,
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
    body("email").isEmail(),
    body("password").isString(),
    utils.validationHandler,
    async function (req, res) {
        try {
            const business = await Business.findOne({ email: req.body.email });
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
                business.email
            );

            const return_value = {
                id: business.id,
                email: business.email,
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
    body("email").isEmail(),
    body("password").isString(),
    utils.validationHandler,
    async function (req, res) {
        try {
            const student = await Student.findOne({ email: req.body.email });
            if (!student) return res.status(404).send("Business not found");

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
                student.email
            );

            const return_value = {
                id: student.id,
                email: student.email,
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

module.exports = router;
