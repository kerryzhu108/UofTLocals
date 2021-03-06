const mongoose = require("mongoose");

/**
 * Schema for storing student type users.
 */

const studentSchema = new mongoose.Schema({
    email: { type: String, required: false, unique: true },
    username: { type: String, required: true, unique: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    password: { type: String, required: true },
    comments: { type: [mongoose.Types.ObjectId], ref: "Comment" }, // References of comments this student has made
    reviews: { type: [mongoose.Types.ObjectId], ref: "Review" },
    reviewed_businesses: {type: [mongoose.Types.ObjectId], ref: "Business"},
    created: { type: Date },
    type: { type: String, default: "student" },
    profileImageURL: { type: String, default: "" }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = { Student };
