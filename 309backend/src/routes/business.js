const express = require("express");
const { Business } = require("./../models/Business");
const { Comment } = require("./../models/Comment");
const { Announcement } = require("./../models/Announcement");

const { body } = require("express-validator");
const utils = require(".././utils/utils");
const cloudinary = require(".././utils/uploader");
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

const router = express.Router();

// get all businesses
router.get("/all", utils.checkDbConnection, async function (req, res) {
    try {
        const businesses = await Business.find({}).populate("announcements");
        return res.send(businesses);
    } catch (error) {
        return res.status(500).send("Internal server error");
    }
});

router.get(
    "/allannouncements",
    utils.checkDbConnection,
    async function (req, res) {
        try {
            const announcements = await Announcement.find({});
            return res.send(announcements);
        } catch (error) {
            return res.status(500).send("Internal server error");
        }
    }
);

// delete a business
router.delete(
    "/deletebusiness/:id",
    utils.checkDbConnection,
    utils.authenticateToken,
    async function (req, res) {
        const id = req.params.id;
        // Validate id
        try {
            if (req.user.type !== "admin") return res.status(403).send("Not an admin user");

            const business = await Business.findByIdAndRemove(id);
            if (!business) {
                res.status(404).send();
            } else {
                return res.send(business);
            }
        } catch (error) {
            console.log(error);
            res.status(500).send(); // server error, could not delete.
        }
    }
);

// delete postings from announcements folder
router.delete(
    "/delete/:pid",
    utils.checkDbConnection,
    utils.authenticateToken,
    async function (req, res) {
        const pid = req.params.pid;
        try {
            if (req.user.type !== "admin") return res.status(403).send("Not an admin user");
            const post = await Announcement.findByIdAndRemove(pid);
            if (!post) {
                res.status(404).send("Resource not found");
            }
            return res.send(post);
        } catch (error) {
            console.log(error);
            res.status(500).send(); // server error, could not delete.
        }
    }
);

// remove a posting from a business and the announcement folder
router.delete(
    "/delete/:bid/:pid",
    utils.checkDbConnection,
    utils.authenticateToken,
    async function (req, res) {
        const pid = req.params.pid;
        const bid = req.params.bid;
        try {
            if (req.user.type !== "admin") return res.status(403).send("Not an admin user");
            const post = await Announcement.findByIdAndRemove(pid);
            const business = await Business.findById(bid);
            if (!post || !business) {
                res.status(404).send("resource not found");
            }
            await business.announcements.pull(pid);
            await business.save();
            return res.send(business);
        } catch (error) {
            console.log(error);
            res.status(500).send(); // server error, could not delete.
        }
    }
);

// Get information from a single business depending on their ID
router.get("/:id", utils.checkDbConnection, async function (req, res) {
    try {
        const business = await Business.findById(req.params.id).select({
            name: 1,
            description: 1,
            publicImageURL: 1,
        });
        if (!business) return res.status(404).send("Business not found");
        return res.send(business);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server error");
    }
});

router.patch(
    "/",
    utils.checkDbConnection,
    utils.authenticateToken,
    body("content").isString(),
    utils.validationHandler,
    async function (req, res) {
        try {
            // Change the description of the business
            const business = await Business.findOneAndUpdate({_id: req.user.id}, {description: req.body.content} )
            await business.save();

            return res.json({businessUpdated: true});
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal server error");
        }
    }
);

// stores image url to cloudinary server
router.post("/image/:userid", multipartMiddleware, async function (req, res) {
    try {
        const business = await Business.findById(req.params.userid)
        if (!business) return res.status(404).send("Unable to find business");
        cloudinary.uploader.upload(
            req.files.image.path,
            async function (result) {
                business.publicImageURL = result.url
                await business.save()
                return res.json({url: business.publicImageURL})
            });
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server error");
    }
});

router.post(
    "/reply",
    utils.checkDbConnection,
    body("content").isString(),
    utils.validationHandler,
    async function (req, res) {
        try {
            // Reply to the user's comment
            const comment = await Comment.findById(req.body.commentid)
            if (!comment) {return res.status(404).send("Comment not found")}

            comment.replies.push(req.body.content)
            comment.save()
            return res.json({replied: true});
        } catch (error) {
            console.log(error);
            return res.status(500).send("Internal server error");
        }
    }
);

module.exports = router;
