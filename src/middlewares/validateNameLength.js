const HTTP_ERROR_422 = 422;

const validateNameLength = (request, response, next) => {
  const { name } = request.body;
  if (name.length < 5) {
    return response.status(HTTP_ERROR_422)
      .json({ message: '"name" length must be at least 5 characters long' });
  }
 next();
};

module.exports = validateNameLength;