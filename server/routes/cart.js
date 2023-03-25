const router = require("express").Router();
const cartController = require('../controllers/cartControllers');


router.get('/:id',cartController.getCart);
router.post('/:id',cartController.addCart);
router.delete('/:userId/:itemId',cartController.deleteCart);