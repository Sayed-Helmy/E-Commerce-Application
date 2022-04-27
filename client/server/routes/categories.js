const express = require("express");
const {
  getAllCategories,
  createCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categories");
const auth = require("../middlewares/authentication");
const multerUploader = require("../middlewares/multer");
const rolesChecker = require("../middlewares/rolesChecker");
const router = express.Router();

router
  .route("/")
  .get(getAllCategories)
  .post(auth, multerUploader, createCategory);

router
  .route("/:id")
  .get(getSingleCategory)
  .put(auth, rolesChecker(["ADMIN"]), multerUploader, updateCategory)
  .delete(auth, rolesChecker(["ADMIN"]), deleteCategory);

module.exports = router;
