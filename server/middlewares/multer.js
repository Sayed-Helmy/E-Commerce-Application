const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination:
    process.env.NODE_ENV === "dev"
      ? "./public/uploads"
      : "./public/build/uploads",
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
      if (req.files.length === 1) {
        req.body[req.files[0].fieldname] = req.files[0].path
          .replace(/\\/g, "/")
          .substring("public".length);
      }
      if (req.files.length > 1) {
        req.body.images = {};
        req.files.forEach((image) => {
          req.body.images[image.fieldname] = image.path
            .replace(/\\/g, "/")
            .substring("public".length);
        });
      }
      next();
    }
  });
};

module.exports = multerUploader;
