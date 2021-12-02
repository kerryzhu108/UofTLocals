const express = require("express");
const { Business } = require("./../models/Business");
const { Student } = require("./../models/Student");
const { mongoose } = require("./../db/mongoose");

const { body, validationResult } = require("express-validator");
const utils = require(".././utils/utils");

const router = express.Router();

router.get("/all", utils.checkDbConnection, async function (req, res) {
    try {
        const businesses = await Business.find({}, { name: 1, email: 1 });
        return res.send(businesses);
    } catch (error) {
        return res.status(500).send("Internal server error");
    }
});

module.exports = router;
