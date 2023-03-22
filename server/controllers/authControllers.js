const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

//signup

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({ msg: "Please enter all fields" });
  }
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    const newUser = new User({ name, email, password });

    //creating a salt and a hash

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        try {
          const user = await newUser.save();
          const token = jwt.sign({ id: user._id }, process.env.JWT_SEC, {
            expiresIn: 3600,
          });
          res.json({
            token,
            user: {
              id: user._id,
              name: user.name,
              email: user.email,
            },
          });
        } catch (error) {
          console.log(error.message);
        }
      });
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
};

//login

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ msg: "Please enter all fields" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }

    //validate password

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SEC, {
      expiresIn: 3600,
    });
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

//get user

const getUser = async (req, res) => {
  try {
    const findUser = await User.findById(req.user.id).select("-password");
    res.json(findUser);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  signup,
  login,
  getUser,
};
