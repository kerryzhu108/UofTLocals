const express = require("express");
const utils = require("./../utils/utils");
const { body } = require("express-validator");

const { Announcement } = require("./../models/Announcement");
const { Business } = require("./../models/Business");

const router = express.Router();

router.post(
    "/",
    utils.checkDbConnection,
    utils.authenticateToken,
    body("content").isString(),
    utils.validationHandler,
    async function (req, res) {
        try {
            // Create a new announcement
            const announcement = new Announcement({
                content: req.body.content,
                poster: req.user.id,
                date: Date(),
            });

            // Add this announcement to the logged in business'
            // announcement array
            const business = await Business.findById(req.user.id);
            business.announcements.push(announcement.id);

            // Save the changes
            await business.save();
            await announcement.save();

            return res.send(announcement);
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal server error");
        }
    }
);

router.get("/:id", utils.checkDbConnection, async function (req, res) {
    try {
        const business = await Business.findById(req.params.id).populate({
            path: "announcements",
            populate: {
                path: "poster",
                model: "Business",
                select: { name: 1, _id: 0 },
            },
        });

        if (!business) return res.status(404).send("Unable to find business");
        return res.send(business.announcements);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server error");
    }
});

module.exports = router;
