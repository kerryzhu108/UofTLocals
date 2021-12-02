const mongoose = require("mongoose");

/**
 * Schema for storing business announcements
 */

const announcementSchema = new mongoose.Schema({
    content: { type: String, required: true },
    poster: { type: mongoose.Types.ObjectId, ref: "Business", required: true },
});

const Announcement = mongoose.model("Announcement", announcementSchema);

module.exports = { Announcement };
