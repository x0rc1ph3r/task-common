// Presents a reusable dashboard metric card with a colored accent.
import { colors, surfaceStyle } from '../../config/theme';

function StatCard({ label, value, helper, accent = colors.primary }) {
  return <div style={{ ...surfaceStyle, padding: 24, borderLeft: `3px solid ${accent}` }}><div style={{ color: colors.muted, fontSize: 13 }}>{label}</div><div style={{ color: accent, fontSize: 32, fontWeight: 700 }}>{value}</div>{helper && <div style={{ color: colors.muted, fontSize: 12 }}>{helper}</div>}</div>;
}

export default StatCard;
