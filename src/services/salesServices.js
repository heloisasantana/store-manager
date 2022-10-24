const models = require('../models');

const getAllSales = async () => {
  const sales = await models.salesModels.getAllSales();
  return sales;
};

const getSaleFromID = async (id) => {
  const sale = await models.salesModels.getSaleFromID(id);
  return sale;
};

module.exports = { getAllSales, getSaleFromID };