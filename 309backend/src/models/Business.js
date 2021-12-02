const mongoose = require("mongoose");

/**
 * Schema for storing business type users.
 */

const businessSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    comments: { type: [mongoose.Types.ObjectId], ref: "Comment" }, // List of student comments on this business
    announcements: { type: [mongoose.Types.ObjectId], ref: "Announcement" }, // List of announcements by this business
});

const Business = mongoose.model("Business", businessSchema);

module.exports = { Business };
