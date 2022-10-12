const productsServices = require('../services');

const HTTP_OK_STATUS = 200;
const HTTP_CREATE_201 = 201;
const HTTP_DELETE_204 = 204;
const HTTP_ERROR_404 = 404;

const getAllProducts = async (_request, response) => {
  const products = await productsServices.getAllProducts();
  return response.status(HTTP_OK_STATUS).json(products);
};

const getProductFromID = async (request, response) => {
  const { id } = request.params;
  const product = await productsServices.getProductFromID(Number(id));
  if (!product) {
    return response.status(HTTP_ERROR_404).json({ message: 'Product not found' });
  }
  return response.status(HTTP_OK_STATUS).json(product);
};

const postNewProduct = async (request, response) => {
  const { name } = request.body;
  const newProduct = await productsServices.postNewProduct(name);
  return response.status(HTTP_CREATE_201).json(newProduct);
};

const updateProductFromID = async (request, response) => {
  const { id } = request.params;
  const { name } = request.body;
  const product = await productsServices.getProductFromID(Number(id));
  if (!product) {
    return response.status(HTTP_ERROR_404).json({ message: 'Product not found' });
  }
  const updatedProduct = await productsServices.updateProductFromID(name, Number(id));
  return response.status(HTTP_OK_STATUS).json(updatedProduct);
};

const deleteProductFromID = async (request, response) => {
  const { id } = request.params;
  const product = await productsServices.getProductFromID(Number(id));
  if (!product) {
    return response.status(HTTP_ERROR_404).json({ message: 'Product not found' });
  }
  await productsServices.deleteProductFromID(Number(id));
  return response.status(HTTP_DELETE_204).end();
};

module.exports = {
  getAllProducts,
  getProductFromID,
  postNewProduct,
  updateProductFromID,
  deleteProductFromID,
};
