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
// serve the Static Files.
app.use(express.static("public"));
app.get("/success", async (req, res) => {
  const path = resolve(__dirname + "/public" + "/success.html");
  res.sendFile(path);
});
app.get("/cancel", async (req, res) => {
  const path = resolve(__dirname + "/public" + "/cancel.html");
  res.sendFile(path);
});

app.use(errorHandler);
app.use(notFound);

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
