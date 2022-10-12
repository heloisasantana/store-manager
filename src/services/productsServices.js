const productsModels = require('../models');

const getAllProducts = async () => {
  const products = await productsModels.getAllList();
  return products;
};

const getProductFromID = async (id) => {
  const product = await productsModels.getFromID(id);
  return product;
};

const postNewProduct = async (dataProduct) => {
  const newProduct = await productsModels.postNewProduct(dataProduct);
  return newProduct;
};

module.exports = {
  getAllProducts,
  getProductFromID,
  postNewProduct,
};