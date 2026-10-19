// Provides a minimal placeholder page to demonstrate adding routed screens.
import PageHeader from '../components/common/PageHeader';
import { surfaceStyle } from '../config/theme';

function ProfilePage() {
  return <><PageHeader title="Profile" subtitle="Replace this placeholder with project-specific content." /><section style={{ ...surfaceStyle, padding: 24 }}><strong>Jane Doe</strong><p className="text-secondary small mb-0 mt-2">Application user</p></section></>;
}

export default ProfilePage;
