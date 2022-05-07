const express = require("express");
const { getUsers, updateUser } = require("../controllers/users");
const router = express.Router();

router.route("/").get(getUsers);
router.route("/:id").patch(updateUser);

module.exports = router;
