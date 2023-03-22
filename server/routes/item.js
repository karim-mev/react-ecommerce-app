const router = require('express').Router();
const itemController = require('../controllers/itemControllers');

router.get('/items', itemController.getItems);
router.post('/items',itemController.postItem);
router.put('/items/:id',itemController.updateItem);
router.delete('/items/:id',itemController.deleteItem);

module.exports = router;
