const express = require("express");
const { Business } = require("./../models/Business");
const { Student } = require("./../models/Student");
const { Announcement } = require("./../models/Announcement");
const { mongoose } = require("./../db/mongoose");

const { body, validationResult } = require("express-validator");
const utils = require(".././utils/utils");

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

router.delete("/delete/:id", utils.checkDbConnection, async function (req, res) {
    const id = req.params.id
	// Validate id
    try {
		const business = await Business.findByIdAndRemove(id)
		if (!business) {
			res.status(404).send()
		} else {   
			return res.send(business)
		}
	} catch(error) {
		log(error)
		res.status(500).send() // server error, could not delete.
	}
})

router.get("/allannouncements", utils.checkDbConnection, async function (req, res) {
	try {
        const announcements = await Announcement.find({});
        return res.send(announcements);
    } catch (error) {
        return res.status(500).send("Internal server error");
    }
})


// remove a posting WORKS
router.delete("/delete/:bid/:pid", utils.checkDbConnection, async function (req, res) {
    const pid = req.params.pid
    const bid = req.params.bid
    try {
		const post = await Announcement.findByIdAndRemove(pid)
		const business = await Business.findById(bid)
		if (!post) {
			res.status(404).send('resource not found')
		} 
		const ind = business.announcements.indexOf(pid)
		await business.announcements.splice(ind, 1)
		await business.updateOne()
        res.send(business)
	} catch(error) {
		console.log(error)
		res.status(500).send() // server error, could not delete.
	}
})

// router.post("/addpost/:bid", async function (req, res) {
//     const bid = req.params.bid
//     try {
// 		const business = await Business.findById(bid)
// 		if (!business) {
// 			res.status(404).send('resource not found')
// 		} 
//         const post = req.body.announcement
//         business.announcements.push(post)
//         await business.save()
//         res.send({"business": business, "post": post})
// 	} catch(error) {
// 		log(error)
// 		res.status(500).send() // server error, could not delete.
// 	}
// })
module.exports = router;
