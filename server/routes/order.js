const Cart = require("../models/Cart");
const Item = require('../models/Product');

const router = require('express').Router();
const orderController = require('../controllers/orderControllers');


router.get('/:id',orderController.getOrder);
router.post('/:id',orderController.checkout);