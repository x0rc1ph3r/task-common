// Provides a reusable application header with menu, search, and user slots.
import { appConfig, colors } from '../../config/theme';

function Topbar({ searchPlaceholder = 'Search...' }) {
  return (
    <header style={{ height: 72, padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: colors.surface, borderBottom: `1px solid ${colors.border}` }}>
      <div className="d-flex align-items-center gap-4"><i className="bi bi-list fs-4" /><div className="position-relative"><i className="bi bi-search position-absolute" style={{ top: 9, left: 12, color: colors.muted }} /><input className="form-control border-0" style={{ width: 300, paddingLeft: 36 }} placeholder={searchPlaceholder} aria-label="Global search" /></div></div>
      <span>{appConfig.userName} <i className="bi bi-chevron-down ms-1 small" /></span>
    </header>
  );
}

export default Topbar;
