require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookiesParser = require("cookie-parser");
const connectDB = require("./database/connect");
const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");

const app = express();
const apiRoute = process.env.API_URL;
const port = process.env.PORT || 5000;

const authRouter = require("./routes/auth");

app.use(cors());
app.use(express.json());
app.use(cookiesParser());

app.use(`${apiRoute}/auth`, authRouter);
app.use(express.static("public"));

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
