const Order = require("../models/order");
const Cart = require("../models/Cart");
const User = require("../models/User");
require("dotenv");
const stripe = require("stripe");

const getOrder = async (req, res) => {
  const userId = req.params.id;
  const order = await Order.find({ userId })
    .sort({ date: -1 })
    .then((orders) => res.json(orders));
};
