const mongoose = require("mongoose");

/**
 * Schema for storing student reviews
 */

const reviewSchema = new mongoose.Schema({
    content: { type: String, required: true },
    poster: { type: mongoose.Types.ObjectId, ref: "Student", required: true },
    business: {
        type: mongoose.Types.ObjectId,
        ref: "Business",
        required: true,
    },
    rating: { type: Number, required: true },
    created: { type: Date, required: true },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = { Review };
