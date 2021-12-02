const express = require("express");
const { mongoose } = require("../db/mongoose");

const { Student } = require("./../models/Student");
const { Comment } = require("./../models/Comment");
const utils = require("./../utils/utils");
const { body } = require("express-validator");

const router = express.Router();

router.post(
    "/",
    utils.checkDbConnection,
    body("content").isString(),
    utils.authenticateToken,
    utils.validationHandler,
    async function (req, res) {
        try {
            const comment = new Comment({
                content: req.body.content,
                poster: req.user.id,
            });

            // Push this comment to the student's local array
            const student = await Student.findById(req.user.id);
            await student.comments.push(comment.id);

            // Save changes to db
            await comment.save();
            await student.save();

            return res.send(comment);
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal server error");
        }
    }
);

// Get all comments belonging to a certain user
router.get("/:id", utils.checkDbConnection, async function (req, res) {
    try {
        const student = await Student.findById(req.params.id)
            .populate("comments")
            .select("content");
        if (!student) return res.status(404).send("User not found");
        return res.send(student.comments);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server error");
    }
});

module.exports = router;
