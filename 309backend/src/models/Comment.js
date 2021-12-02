const mongoose = require("mongoose");

/**
 * Schema for storing student comments
 */

const commentSchema = new mongoose.Schema({
    content: { type: String, required: true },
    poster: { type: mongoose.Types.ObjectId, ref: "Student", required: true }, // Links comment back to a student it belongs to
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = { Comment };
