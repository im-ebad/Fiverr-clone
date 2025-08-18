const CustomException = (message, status) => {
  const error = new Error();
  error.message = message;
  error.status = status;
  return error;
};

module.exports = CustomException;
