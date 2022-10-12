const productsModels = require('../models');

const getAllProducts = async () => {
  const products = await productsModels.getAllList();
  return products;
};

const getProductFromID = async (id) => {
  const product = await productsModels.getFromID(id);
  return product;
};

module.exports = {
  getAllProducts,
  getProductFromID,
};