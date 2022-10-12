const express = require('express');
const productsControllers = require('../controllers');
const validateName = require('../middlewares/validateName');
const validateNameLength = require('../middlewares/validateNameLength');

const router = express.Router();

router.get('/', productsControllers.getAllProducts);

router.get('/:id', productsControllers.getProductFromID); 

router.post('/', validateName, validateNameLength, productsControllers.postNewProduct);

module.exports = router;