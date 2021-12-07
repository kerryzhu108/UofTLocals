const express = require("express");
const { mongoose } = require("../db/mongoose");

const { Business } = require("./../models/Business");

const router = express.Router();

router.get("/", async function (req, res) {
    return res.send("UofT Locals REST API");
});

module.exports = router;
