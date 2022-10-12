const connection = require('./connection');

const getAllList = async () => {
  const [products] = await connection.execute('SELECT * FROM StoreManager.products');
  return products;
}; 

const getFromID = async (id) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [Number(id)],
  );
  return product;
};

module.exports = {
  getAllList,
  getFromID,
};