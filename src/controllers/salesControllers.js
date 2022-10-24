const services = require('../services');

const HTTP_OK_STATUS = 200;
const HTTP_ERROR_404 = 404;

const getAllSales = async (_request, response) => {
  const sales = await services.salesServices.getAllSales();
  return response.status(HTTP_OK_STATUS).json(sales);
};

const getSaleFromID = async (request, response) => {
  const { id } = request.params;
  const sale = await services.salesServices.getSaleFromID(Number(id));
  if (sale.length === 0) {
    return response.status(HTTP_ERROR_404).json({ message: 'Sale not found' });
  }
  return response.status(HTTP_OK_STATUS).json(sale);
};

module.exports = {
  getAllSales,
  getSaleFromID,
};
