const express = require("express");

const router = express.Router();

router.get("/", async function(req, res) {
    return res.send("Receiving data from the server!");
});

module.exports = router;