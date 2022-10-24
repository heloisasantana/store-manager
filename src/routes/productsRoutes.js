const express = require('express');
const controllers = require('../controllers');
const validateName = require('../middlewares/validateName');
const validateNameLength = require('../middlewares/validateNameLength');

const router = express.Router();

router.get('/', controllers.productsControllers.getAllProducts);

router.get('/:id', controllers.productsControllers.getProductFromID); 

router.post('/', validateName, validateNameLength, controllers.productsControllers.postNewProduct);

router.put('/:id', validateName, validateNameLength,
  controllers.productsControllers.updateProductFromID);

router.delete('/:id', controllers.productsControllers.deleteProductFromID);

module.exports = router;