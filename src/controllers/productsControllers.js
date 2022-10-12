const productsServices = require('../services');

const HTTP_OK_STATUS = 200;
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

module.exports = {
  getAllProducts,
  getProductFromID,
};
