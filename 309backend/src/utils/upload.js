const util = require("util");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const { mongoURI } = require("../config/db");

let storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
    return {
      bucketName: 'images',
      filename: `${Date.now()}-${file.originalname}`
    };
  }
});

let storage = multer({ storage: storage }).single("profilePhoto");
let fileUploader = util.promisify(storage);
module.exports = fileUploader;
