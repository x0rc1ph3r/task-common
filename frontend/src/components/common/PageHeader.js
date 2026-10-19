// Standardizes page titles, helper text, and optional primary actions.
import { colors } from '../../config/theme';

function PageHeader({ title, subtitle, action }) {
  return <div className="d-flex justify-content-between align-items-start mb-4"><div><h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 5 }}>{title}</h1>{subtitle && <p style={{ color: colors.muted, fontSize: 13, margin: 0 }}>{subtitle}</p>}</div>{action}</div>;
}

export default PageHeader;
