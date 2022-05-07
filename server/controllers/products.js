// const { unlink } = require("fs/promises");
// const path = require("path");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const { NotFound, BadRequest } = require("../errors");
const asyncWrapper = require("../middlewares/asyncWrapper");
const Product = require("../models/Product");

const matchFunction = (match, field, pipeLine) => {
  if (match)
    pipeLine.unshift({
      $match: { [field]: match },
    });
};

const createProduct = asyncWrapper(async (req, res) => {
  const product = await Product.create({ ...req.body });
  res.status(201).json(product);
});

const searchProducts = asyncWrapper(async (req, res) => {
  const { keyword } = req.params;
  const products = await Product.aggregate([
    {
      $search: {
        autocomplete: {
          query: keyword,
          path: "title",
        },
      },
    },
    {
      $project: {
        _id: 1,
        title: 1,
        image: "$images.mainImage",
      },
    },
  ]);
  res.status(200).json(products);
});

const getProducts = asyncWrapper(async (req, res) => {
  const { category, isFeatured, title, price, limit, page, id } = req.query;
  const pipeLine = [
    {
      $lookup: {
        from: "categories",
        localField: "category",
        foreignField: "_id",
        as: "category",
      },
    },
    { $unwind: "$category" },
    {
      $lookup: {
        from: "users",
        localField: "reviews.user",
        foreignField: "_id",
        as: "reviewsDocuments",
        pipeline: [{ $project: { name: 1, email: 1, avatar: 1 } }],
      },
    },
    {
      $addFields: {
        reviews: {
          $map: {
            input: "$reviews",
            in: {
              $mergeObjects: [
                "$$this",
                {
                  $arrayElemAt: [
                    "$reviewsDocuments",
                    {
                      $indexOfArray: ["$reviewsDocuments._id", "$$this.user"],
                    },
                  ],
                },
              ],
            },
          },
        },
      },
    },
    {
      $project: {
        _id: 1,
        title: 1,
        description: 1,
        richDescription: 1,
        images: 1,
        brand: 1,
        price: 1,
        category: "$category.name",
        onSalePrice: 1,
        isFeatured: 1,
        onSale: 1,
        stock: 1,
        rating: 1,
        reviews: 1,
        createdAt: 1,
      },
    },
    { $skip: +limit * +(page || 0) || 0 },
    { $limit: +limit || 20 },
    { $sort: { createdAt: -1 } },
  ];
  matchFunction(isFeatured === "true", "isFeatured", pipeLine);
  matchFunction(title, "title", pipeLine);
  // matchFunction(ObjectId(id), "_id", pipeLine);
  if (price) {
    const data = price.split(",").map((i) => +i);
    matchFunction({ $gt: data[0], $lt: data[1] }, "price", pipeLine);
  }
  if (category) {
    const data = category.split(",").map((i) => ObjectId(i));
    matchFunction({ $in: data }, "category", pipeLine);
  }
  const products = await Product.aggregate(pipeLine);
  res.status(200).json(products);
});

const deleteProduct = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  console.log(req.params.id);
  const product = await Product.findByIdAndDelete(id);
  if (!product) throw new NotFound("Product Not Found!");
  // const imagePath = path.join(process.cwd(), "public", product.image);
  // unlink(imagePath);
  res.status(201).json(product);
});

const updateProduct = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const product = await Product.findByIdAndUpdate(
    id,
    { ...req.body },
    { new: true }
  );
  if (!product) throw new NotFound("Product Not Found!");
  res.status(201).json(product);
});

const getSingleProduct = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const product = await Product.findOne({ _id: id })
    .populate("category", "name")
    .populate("reviews", "rating");
  if (!product) throw new NotFound("Product Not Found!");
  res.status(201).json(product);
});

const getCategoryProducts = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const products = await Product.find({ subCategory: id }).sort({
    createdAt: -1,
  });
  res.status(200).json(products);
});

const createReview = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const { message, rating } = req.body;
  const { _id } = req.payload;
  const review = { user: _id, rating, message };
  const product = await Product.findById(id);
  if (product.reviews.find((item) => item.user?.toString() === _id.toString()))
    throw new BadRequest("You have already reviewed this Product!");
  product.reviews.unshift(review);
  product.getRating();
  await product.save();
  await product.populate("reviews.user", "name email avatar -_id");
  res.status(201).json(product);
});

const deleteReview = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const { email } = req.payload;
  const product = await Product.findById(id);
  product.reviews = product.reviews.filter((item) => item.email !== email);
  product.getRating();
  await product.save();
  res.status(200).json(product);
});

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getProducts,
  getSingleProduct,
  getCategoryProducts,
  createReview,
  deleteReview,
  searchProducts,
};
