const router = require('express').Router();
const itemController = require('../controllers/itemControllers');

router.get('/', itemController.getItems);
router.post('/',itemController.postItem);
router.put('/:id',itemController.updateItem);
router.delete('/:id',itemController.deleteItem);

module.exports = router;
