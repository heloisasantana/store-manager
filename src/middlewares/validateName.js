const HTTP_ERROR_400 = 400;

const validateName = (request, response, next) => {
  const { name } = request.body;
  if (!name) { return response.status(HTTP_ERROR_400).json({ message: '"name" is required' }); }
  next();
};

module.exports = validateName;