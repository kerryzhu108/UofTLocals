const cloudinary = require('cloudinary');
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_APIKEY,
    api_secret: process.env.CLOUNDINARY_SECRET
});

module.exports = cloudinary