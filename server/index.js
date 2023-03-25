const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./routes/auth");
const itemsRoute = require("./routes/item");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("databse is running"))
  .catch((err) => {
    console.log(err.message);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/items", itemsRoute);
// app.use("/api/cart", cartRoute);
// app.use("/api/order", orderRoute);

app.get("/", (req, res) => {
  res.status(200).json("lol");
});

app.listen(4002, () => {
  console.log("server is up");
});
