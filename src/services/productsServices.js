const models = require('../models');

const getAllProducts = async () => {
  const products = await models.productsModels.getAllList();
  return products;
};

const getProductFromID = async (id) => {
  const product = await models.productsModels.getFromID(id);
  return product;
};

const postNewProduct = async (name) => {
  const newProduct = await models.productsModels.postNewProduct(name);
  return newProduct;
};

const updateProductFromID = async (name, id) => {
  const updatedProduct = await models.productsModels.updateProductFromID(name, id);
  return updatedProduct;
};

const deleteProductFromID = async (id) => {
  await models.productsModels.deleteProductFromID(id);
};

module.exports = {
  getAllProducts,
  getProductFromID,
  postNewProduct,
  updateProductFromID,
  deleteProductFromID,
};