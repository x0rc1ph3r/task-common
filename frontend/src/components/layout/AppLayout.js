// Combines the reusable navigation shell with nested React Router pages.
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { colors } from '../../config/theme';

function AppLayout() {
  return <div style={{ minHeight: '100vh', background: colors.page, color: colors.text, fontFamily: 'Inter, system-ui, sans-serif' }}><Sidebar /><div style={{ marginLeft: 240 }}><Topbar /><main style={{ padding: 32 }}><Outlet /></main></div></div>;
}

export default AppLayout;
