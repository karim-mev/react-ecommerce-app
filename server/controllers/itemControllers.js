const Item = require("../models/Product");

//get all items

const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

//post an item

const postItem = async (req, res) => {
  const newItem = new Item(req.body);
  try {
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json(error);
  }
};

//update an item

const updateItem = async (req, res) => {
  const editItem = await Item.findByIdAndUpdate(
    { _id: req.params.id },
    req.body
  );
  res.json(editItem);
};

//delete an item

const deleteItem = async (req, res) => {
  const removeItem = await Item.findByIdAndDelete({ _id: req.params.id });
  res.json({ success: true });
};

module.exports = {
  getItems,
  postItem,
  updateItem,
  deleteItem,
};
