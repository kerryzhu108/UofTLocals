const express = require("express");
const { Student } = require("./../models/Student");
const { mongoose } = require("./../db/mongoose");

const { body } = require("express-validator");
const utils = require(".././utils/utils");

const router = express.Router();

router.get("/:id", utils.checkDbConnection, async function (req, res) {
    try {
        const student = await Student.findById(req.params.id, {
            email: 1,
            first_name: 1,
            last_name: 1,
            comments: 1,
        }).populate("comments");
        if (!student) return res.status(404).send("Unable to find student");
        return res.send(student);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server error");
    }
});

module.exports = router;
