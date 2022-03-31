const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const checkFileType = (file, cb) => {
  const filetype = /\.?[jpe?g|png|gif]/;
  const extname = filetype.test(path.extname(file.originalname).toLowerCase());
  const mimType = filetype.test(file.memetype);
  if (mimType && extname) {
    return cb(null, true);
  } else {
    cb("Error only images you can upload..");
  }
};

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
}).any();

const multerUploader = async (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      res.json({ msg: err });
    } else {
      if (req.files.length > 0) {
        req.body.image = req.files[0].path
          .replace(/\\/g, "/")
          .substring("public".length);
        return next();
      }
      next();
    }
  });
};

module.exports = multerUploader;
