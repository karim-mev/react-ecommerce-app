const Cart = require("../models/Cart");
const Item = require('../models/Item');

const router = require('express').Router();
const orderController = require('../controllers/orderControllers');


router.get('/order/:id',orderController.getOrders);
router.post('/order/:id',orderController.checkout);