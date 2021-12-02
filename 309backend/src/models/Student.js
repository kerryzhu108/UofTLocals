const mongoose = require("mongoose");

/**
 * Schema for storing student type users.
 */

const studentSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

module.exports = studentSchema;