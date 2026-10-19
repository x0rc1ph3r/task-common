// Formats API date values consistently without local timezone drift.
export const formatDate = (value) => new Date(value).toLocaleDateString('en-GB', {
  day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC',
});
