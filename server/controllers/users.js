const asyncWrapper = require("../middlewares/asyncwrapper");
const User = require("../models/User");

const getUsers = asyncWrapper(async (req, res) => {
  const users = await User.aggregate([
    {
      $project: {
        password: 0,
      },
    },
    { $sort: { createdAt: -1 } },
  ]);
  res.status(200).json(users);
});

module.exports = { getUsers };
