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

const postNewProduct = async (dataProduct) => {
  const { name } = dataProduct;
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products(name) VALUES(?)', [name],
  );
  const newProduct = { id: insertId, ...dataProduct };
  return newProduct;
};

module.exports = {
  getAllList,
  getFromID,
  postNewProduct,
};