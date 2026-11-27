module.exports = (err, req, res, next) => {
  const status = err.statusCode || 500;
  const response = {
    success: false,
    data: null,
    message: err.message || 'Internal Server Error',
    errors: err.errors || null,
  };
  // Log error details
  console.error(err);
  res.status(status).json(response);
};

