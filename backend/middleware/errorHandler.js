// Converts application and Mongoose errors into consistent JSON responses.
const errorHandler = (error, req, res, next) => {
  if (res.headersSent) return next(error);
  const status = error.name === 'ValidationError' ? 400 : error.status || 500;
  return res.status(status).json({ message: error.message || 'Internal server error' });
};
module.exports = errorHandler;
