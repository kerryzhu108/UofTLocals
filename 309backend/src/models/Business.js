const mongoose = require("mongoose");

/**
 * Schema for storing business type users.
 */

const businessSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    type: { type: String, required: true },
    email: { type: String, required: false, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    comments: { type: [mongoose.Types.ObjectId], ref: "Comment" }, // List of student comments on this business
    announcements: { type: [mongoose.Types.ObjectId], ref: "Announcement" }, // List of announcements by this business
    reviews: { type: [mongoose.Types.ObjectId], ref: "Review" },
    dateCreated: { type: String, required: true }, // Format "Month Day Year"
});

const Business = mongoose.model("Business", businessSchema);

module.exports = { Business };
