const express = require("express");
const { mongoose } = require("../db/mongoose");

const { Student } = require("./../models/Student");
const { Comment } = require("./../models/Comment");
const { Business } = require("./../models/Business");
const utils = require("./../utils/utils");
const { body } = require("express-validator");

const router = express.Router();

// Have a student post a comment to a business. Student must be logged in with the appropriate
// access token. The ID in the URL must point to an actual business.
router.post(
    "/:id",
    utils.checkDbConnection,
    body("content").isString(),
    utils.authenticateToken,
    utils.validationHandler,
    async function (req, res) {
        try {
            const comment = new Comment({
                content: req.body.content,
                poster: req.user.id,
                created: Date(),
            });

            // Push this comment to the student's local array
            const student = await Student.findById(req.user.id);
            await student.comments.push(comment.id);

            // Push a reference of this comment to the business' local array
            const business = await Business.findById(req.params.id);
            if (!business) return res.status(404).send("Business not found");
            business.comments.push(comment.id);

            // Save changes to db
            await comment.save();
            await student.save();
            await business.save();

            return res.send(comment);
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal server error");
        }
    }
);

// Get all comments belonging to a certain user
router.get("/student/:id", utils.checkDbConnection, async function (req, res) {
    try {
        const student = await Student.findById(req.params.id).populate(
            "comments"
        );
        if (!student) return res.status(404).send("User not found");
        return res.send(student.comments);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server error");
    }
});

// Get all comments that a business has
router.get("/business/:id", utils.checkDbConnection, async function (req, res) {
    try {
        const business = await Business.findById(req.params.id).populate(
            "comments"
        );
        if (!business) return res.status(404).send("Business not found");
        return res.send(business.comments);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server error");
    }
});

module.exports = router;
