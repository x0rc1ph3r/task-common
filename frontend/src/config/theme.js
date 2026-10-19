// Holds application branding and inline style tokens in one replaceable module.
export const appConfig = { name: 'COMMON', userName: 'Jane Doe' };

export const colors = {
  sidebar: '#1E3A8A', active: '#2C4FC7', primary: '#2563EB', primaryHover: '#1D4ED8',
  page: '#F9FAFB', surface: '#FFFFFF', border: '#E5E7EB', text: '#111827', muted: '#6B7280',
};

export const surfaceStyle = { background: colors.surface, border: `1px solid ${colors.border}`, borderRadius: 12 };
export const controlStyle = { height: 40, borderRadius: 8, borderColor: '#D1D5DB', fontSize: 14 };
export const primaryButtonStyle = { background: colors.primary, borderColor: colors.primary, borderRadius: 8, padding: '10px 20px' };
