const services = require('../services');

const HTTP_OK_STATUS = 200;
const HTTP_CREATE_201 = 201;
const HTTP_DELETE_204 = 204;
const HTTP_ERROR_404 = 404;

const getAllProducts = async (_request, response) => {
  const products = await services.productsServices.getAllProducts();
  return response.status(HTTP_OK_STATUS).json(products);
};

const getProductFromID = async (request, response) => {
  const { id } = request.params;
  const product = await services.productsServices.getProductFromID(Number(id));
  if (!product) {
    return response.status(HTTP_ERROR_404).json({ message: 'Product not found' });
  }
  return response.status(HTTP_OK_STATUS).json(product);
};

const postNewProduct = async (request, response) => {
  const { name } = request.body;
  const newProduct = await services.productsServices.postNewProduct(name);
  return response.status(HTTP_CREATE_201).json(newProduct);
};

const updateProductFromID = async (request, response) => {
  const { id } = request.params;
  const { name } = request.body;
  const product = await services.productsServices.getProductFromID(Number(id));
  if (!product) {
    return response.status(HTTP_ERROR_404).json({ message: 'Product not found' });
  }
  const updatedProduct = await services.productsServices.updateProductFromID(name, Number(id));
  return response.status(HTTP_OK_STATUS).json(updatedProduct);
};

const deleteProductFromID = async (request, response) => {
  const { id } = request.params;
  const product = await services.productsServices.getProductFromID(Number(id));
  if (!product) {
    return response.status(HTTP_ERROR_404).json({ message: 'Product not found' });
  }
  await services.productsServices.deleteProductFromID(Number(id));
  return response.status(HTTP_DELETE_204).end();
};

module.exports = {
  getAllProducts,
  getProductFromID,
  postNewProduct,
  updateProductFromID,
  deleteProductFromID,
};
