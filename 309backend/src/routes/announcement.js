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
                date: Date(),
            });

            // Add this announcement to the logged in business'
            // announcement array
            const business = await Business.findById(req.user.id);
            business.announcements.push(announcement.id);

            // Save the changes
            await business.save();
            await announcement.save();
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal server error");
        }
    }
);

module.exports = router;
