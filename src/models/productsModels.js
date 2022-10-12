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

const postNewProduct = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES(?)', [name],
  );
  const newProduct = { id: insertId, name };
  return newProduct;
};

const updateProductFromID = async (name, id) => {
  await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?', [name, Number(id)],
  );
  const updatedProduct = { id, name };
  return updatedProduct;
};

const deleteProductFromID = async (id) => {
  await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?', [Number(id)],
  );
};

module.exports = {
  getAllList,
  getFromID,
  postNewProduct,
  updateProductFromID,
  deleteProductFromID,
};