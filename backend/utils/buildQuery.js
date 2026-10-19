// Converts common list query parameters into a safe Mongoose filter object.
const escapeRegex = (value = '') => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const buildQuery = ({ priority, status, search } = {}) => {
  const query = {};
  if (priority) query.priority = priority;
  if (status) query.status = status;
  if (search) {
    const matcher = new RegExp(escapeRegex(search), 'i');
    query.$or = [{ name: matcher }, { description: matcher }];
  }
  return query;
};

module.exports = { buildQuery, escapeRegex };
