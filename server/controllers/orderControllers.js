const Order = require("../models/Order");
const Cart = require("../models/Cart");
const User = require("../models/User");
require("dotenv");
const stripe = require("stripe");

//get order of a user

const getOrder = async (req, res) => {
  const userId = req.params.id;
  const order = await Order.find({ userId })
    .sort({ date: -1 })
    .then((orders) => res.json(orders));
};

//checkout

const checkout = async (req, res) => {
  try {
    const userId = req.params.id;
    const { source } = req.body;
    let cart = await Cart.findOne({ userId });
    let user = await User.findOne({ _id: userId });
    const email = user.email;
    if (cart) {
      const charge = await stripe.charges.create({
        amount: cart.bill,
        currency: "Usd",
        source: source,
        receipt_email: email,
      });
      if (!charge) throw Error("Payment failed");
      if (charge) {
        const order = await Order.create({
          userId,
          items: cart.items,
          bill: cart.bill,
        });
        const data = await Cart.findByIdAndDelete({ _id: cart.id });
        return res.status(201).send(order);
      }
    } else {
      res.status(500).send("You do not have items in cart");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

module.exports = {
  getOrder,
  checkout,
};
