const connection = require('./connection');

const getAllSales = async () => {
  const [sales] = await connection.execute(`
    SELECT id saleId, date, product_id productId, quantity
    FROM StoreManager.sales INNER JOIN StoreManager.sales_products
    ON StoreManager.sales.id = StoreManager.sales_products.sale_id
  `);
  return sales;
}; 

const getSaleFromID = async (id) => {
  const [sale] = await connection.execute(`
    SELECT date, product_id productId, quantity
    FROM StoreManager.sales INNER JOIN StoreManager.sales_products
    ON StoreManager.sales.id = StoreManager.sales_products.sale_id
    WHERE StoreManager.sales.id = ?`, [Number(id)]);
  return sale;
};

module.exports = {
  getAllSales,
  getSaleFromID,
};