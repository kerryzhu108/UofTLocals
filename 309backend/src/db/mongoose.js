const mongoose = require("mongoose");

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/uoftlocals';

mongoose.connect(mongoURI,
    {useNewUrlParser: true, useUnifiedTopology: true})
    .catch((error) => {
        console.error(error);
        console.log("Error connecting to mongodb. Timeout reached.");
    });

module.exports = { mongoose }