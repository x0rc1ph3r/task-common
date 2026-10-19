// Renders a compact reusable empty-state message.
import { colors } from '../../config/theme';
function EmptyState({ title, message = 'Try changing the filters or add a new record.' }) {
  return <div className="text-center py-5"><i className="bi bi-inbox fs-2" style={{ color: colors.muted }} /><h3 className="fs-6 mt-2">{title}</h3><p className="small mb-0" style={{ color: colors.muted }}>{message}</p></div>;
}
export default EmptyState;
