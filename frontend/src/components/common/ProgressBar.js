// Renders a labelled progress indicator with clamped percentage values.
import { colors } from '../../config/theme';

function ProgressBar({ value = 0, showLabel = true }) {
  const safeValue = Math.min(100, Math.max(0, Number(value) || 0));
  return <div className="d-flex align-items-center gap-2"><div className="progress flex-grow-1" style={{ height: 8, background: colors.border, borderRadius: 9999 }}><div className="progress-bar" style={{ width: `${safeValue}%`, background: colors.primary, borderRadius: 9999 }} /></div>{showLabel && <small>{safeValue}%</small>}</div>;
}

export default ProgressBar;
