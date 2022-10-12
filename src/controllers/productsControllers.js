const productsServices = require('../services');

const HTTP_OK_STATUS = 200;
const HTTP_CREATE_201 = 201;
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
  const dataProduct = request.body;
  const newProduct = await productsServices.postNewProduct(dataProduct);
  return response.status(HTTP_CREATE_201).json(newProduct);
};

module.exports = {
  getAllProducts,
  getProductFromID,
  postNewProduct,
};
