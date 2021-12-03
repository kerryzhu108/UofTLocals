const express = require("express");
const { Business } = require("./../models/Business");
const { Student } = require("./../models/Student");
const { mongoose } = require("./../db/mongoose");

const { body, validationResult } = require("express-validator");
const utils = require(".././utils/utils");

const router = express.Router();

router.get("/all", utils.checkDbConnection, async function (req, res) {
    try {
        const businesses = await Business.find({});
        return res.send(businesses);
    } catch (error) {
        return res.status(500).send("Internal server error");
    }
});

router.delete("/delete/:id", async function (req, res) {
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

module.exports = router;
