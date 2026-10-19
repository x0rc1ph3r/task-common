// Renders configurable fixed navigation with automatic active-route styling.
import { NavLink } from 'react-router-dom';
import { appConfig, colors } from '../../config/theme';

const defaultLinks = [
  { to: '/dashboard', label: 'Dashboard', icon: 'bi-grid' },
  { to: '/items', label: 'Items', icon: 'bi-list-check' },
  { to: '/profile', label: 'Profile', icon: 'bi-person' },
];

function Sidebar({ links = defaultLinks }) {
  return (
    <aside style={{ position: 'fixed', inset: '0 auto 0 0', width: 240, padding: '30px 20px', color: '#fff', background: colors.sidebar }}>
      <div style={{ margin: '0 12px 28px', fontSize: 22, fontWeight: 700 }}>{appConfig.name}</div>
      <nav className="d-grid gap-2">
        {links.map((link) => <NavLink key={link.to} to={link.to} style={({ isActive }) => ({ display: 'flex', gap: 12, alignItems: 'center', padding: '12px 14px', borderRadius: 6, color: '#fff', textDecoration: 'none', background: isActive ? colors.active : 'transparent' })}><i className={`bi ${link.icon}`} />{link.label}</NavLink>)}
      </nav>
      <small style={{ position: 'absolute', bottom: 24, left: 32 }}>Reusable MERN starter</small>
    </aside>
  );
}

export default Sidebar;
