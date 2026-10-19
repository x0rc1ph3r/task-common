// Displays priority or status values with a reusable color map.
const palette = {
  High: ['#DC2626', '#FEE2E2'], Medium: ['#D97706', '#FEF3C7'], Low: ['#2563EB', '#DBEAFE'],
  'To Do': ['#D97706', '#FEF3C7'], 'In Progress': ['#2563EB', '#DBEAFE'], Review: ['#7C3AED', '#EDE9FE'], Done: ['#16A34A', '#DCFCE7'],
};

function Badge({ value }) {
  const [color, background] = palette[value] || ['#374151', '#F3F4F6'];
  return <span style={{ color, background, padding: '4px 12px', borderRadius: 9999, fontSize: 12, fontWeight: 500, whiteSpace: 'nowrap' }}>{value}</span>;
}

export default Badge;
