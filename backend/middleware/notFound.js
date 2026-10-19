// Produces a JSON 404 response for routes that are not defined.
const notFound = (req, res) => res.status(404).json({ message: `Route not found: ${req.method} ${req.originalUrl}` });
module.exports = notFound;
