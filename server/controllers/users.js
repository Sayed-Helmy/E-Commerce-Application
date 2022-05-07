const asyncWrapper = require("../middlewares/asyncWrapper");
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

const updateUser = asyncWrapper(async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      ...req.body,
    },
    {
      new: true,
    }
  );
  res.status(200).json(user);
});

module.exports = { getUsers, updateUser };
