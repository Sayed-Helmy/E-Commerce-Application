const asyncWrapper = require("../middlewares/asyncwrapper");
const Order = require("../models/Order");

const getOrders = asyncWrapper(async (req, res) => {
  const { _id } = req.payload;
  const orders = await Order.find({ user: _id })
    .populate("products.productId")
    .select("-user")
    .sort({ createdAt: -1 });
  res.status(200).json(orders);
});

const getAllOrders = asyncWrapper(async (req, res) => {
  const { date } = req.query;
  const pipeLine = [
    {
      $lookup: {
        from: "products",
        localField: "products.productId",
        foreignField: "_id",
        as: "productsDocuments",
      },
    },
    {
      $addFields: {
        products: {
          $map: {
            input: { $zip: { inputs: ["$products", "$productsDocuments"] } },
            in: { $mergeObjects: "$$this" },
          },
        },
      },
    },
    { $unset: "productsDocuments" },
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "user",
        pipeline: [{ $project: { name: 1, email: 1 } }],
      },
    },
    { $unwind: "$user" },
    { $sort: { createdAt: -1 } },
  ];
  if (date)
    pipeLine.unshift({
      $match: {
        createdAt: { $gte: new Date(Date.now() - 1000 * 60 * 60 * 24 * +date) },
      },
    });
  console.log(new Date(Date.now() - 1000 * 60 * 60 * 24 * +date));
  const orders = await Order.aggregate(pipeLine);
  res.status(200).json(orders);
});

module.exports = { getOrders, getAllOrders };
