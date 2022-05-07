require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookiesParser = require("cookie-parser");
const connectDB = require("./database/connect");
const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");
const { resolve } = require("path");

const app = express();
const apiRoute = process.env.API_URL;
const port = process.env.PORT || 5000;

const authRouter = require("./routes/auth");
const productsRouter = require("./routes/products");
const categoriesRouter = require("./routes/categories");
const checkoutRouter = require("./routes/checkout");
const couponRouter = require("./routes/coupons");
const ordersRouter = require("./routes/orders");
const usersRouter = require("./routes/users");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookiesParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(helmet());

app.use(`${apiRoute}/auth`, authRouter);
app.use(`${apiRoute}/categories`, categoriesRouter);
app.use(`${apiRoute}/products`, productsRouter);
app.use(`${apiRoute}/checkout`, checkoutRouter);
app.use(`${apiRoute}/coupons`, couponRouter);
app.use(`${apiRoute}/orders`, ordersRouter);
app.use(`${apiRoute}/users`, usersRouter);

// serve the Static Files.
app.use(errorHandler);
app.use(express.static("./public/build"));
app.get("/*", (req, res) => {
  res.sendFile(resolve(__dirname, "public", "build", "index.html"));
});
// app.use(notFound);
console.log(process.env.NODE_ENV);
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`SERVER IS UP AND RUNNING ON PORT: ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
