const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

router.get('/', controllers.salesControllers.getAllSales);

router.get('/:id', controllers.salesControllers.getSaleFromID); 

module.exports = router;