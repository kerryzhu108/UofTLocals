const mongoose = require("mongoose");

/**
 * Schema for storing business type users.
 */

const businessSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    email: {type: String, required: true, unique: true},
    password: {type: String}
});

module.exports = businessSchema;