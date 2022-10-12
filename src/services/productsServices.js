const productsModels = require('../models');

const getAllProducts = async () => {
  const products = await productsModels.getAllList();
  return products;
};

const getProductFromID = async (id) => {
  const product = await productsModels.getFromID(id);
  return product;
};

const postNewProduct = async (name) => {
  const newProduct = await productsModels.postNewProduct(name);
  return newProduct;
};

const updateProductFromID = async (name, id) => {
  const updatedProduct = await productsModels.updateProductFromID(name, id);
  return updatedProduct;
};

const deleteProductFromID = async (id) => {
  await productsModels.deleteProductFromID(id);
};

module.exports = {
  getAllProducts,
  getProductFromID,
  postNewProduct,
  updateProductFromID,
  deleteProductFromID,
};