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
            username: 1,
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

router.patch("/", 
    utils.checkDbConnection, 
    utils.authenticateToken,
    utils.validationHandler,
    async function (req, res) {
        try {
            // update the student's profile information
            const student = await Student.findOneAndUpdate({ _id: req.user.id }, 
            { 
                email: req.body.email,
                first_name: req.body.first_name,
                last_name: req.body.last_name
            })
            await student.save();
            return res.json();
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal server error");
        }
    }
)

module.exports = router;

