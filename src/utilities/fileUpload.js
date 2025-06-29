const multer = require("multer");

const fileStorageEngine = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, "medicare+-upload-" + Date.now() + "__" + file.originalname);
  },
});

module.exports.upload = multer({ storage: fileStorageEngine });
