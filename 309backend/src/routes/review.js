const express = require("express");
const utils = require("./../utils/utils");
const { body } = require("express-validator");

const { Review } = require("./../models/Review");
const { Business } = require("./../models/Business");
const { Student } = require("./../models/Student");

const router = express.Router();

// Post a review to a business
router.post(
    "/:id",
    utils.checkDbConnection,
    utils.authenticateToken,
    body("content").isString(),
    body("rating").isInt({ min: 1, max: 5 }),
    utils.validationHandler,
    async function (req, res) {
        try {
            // Ensure that this request is sent by a student
            if (req.user.type !== "student") return res.status(403).send("Not a student");

            // Create a new announcement
            const review = new Review({
                content: req.body.content,
                created: Date(),
                rating: req.body.rating,
                business: req.params.id,
                poster: req.user.id,
            });

            // Add this announcement to the logged in business'
            // announcement array
            const business = await Business.findById(req.params.id);
            if (!business) return res.status(404).send("Business not found");
            business.reviews.push(review.id);

            const student = await Student.findById(req.user.id);
            if (!student) return res.status(404).send("Student not found");

            // Ensure that this business has not already been reviewed
            // by this student.
            if (student.reviewed_businesses.includes(req.params.id)) return res.status(400).send("Business already reviewed");

            student.reviews.push(review.id);
            student.reviewed_businesses.push(req.params.id);

            // Save the changes
            await business.save();
            await student.save();
            await review.save();

            return res.send(await review.populate({
                path: "poster",
                model: "Student",
                select: {username: 1, profileImageURL: 1, _id: 0}
            }));
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal server error");
        }
    }
);

// Get all reviews posted by a student
router.get("/student/:id", utils.checkDbConnection, async function (req, res) {
    try {
        const student = await Student.findById(req.params.id).populate({
            path: "reviews",
            populate: {
                path: "business",
                model: "Business",
                select: { name: 1 },
            },
        });
        if (!student) return res.status(404).send("Student not found");
        return res.send(student.reviews);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server error");
    }
});

// Get all reviews belonging to a business
router.get("/business/:id", utils.checkDbConnection, async function (req, res) {
    try {
        const business = await Business.findById(req.params.id).populate({
            path: "reviews",
            populate: {
                path: "poster",
                model: "Student",
                select: { email: 1, username: 1, _id: 0, profileImageURL: 1 },
            },
        });
        if (!business) return res.status(404).send("Business not found");
        return res.send(business.reviews);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server error");
    }
});

module.exports = router;
