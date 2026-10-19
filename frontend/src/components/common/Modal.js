// Supplies a reusable accessible modal shell for forms and confirmations.
import { colors } from '../../config/theme';

function Modal({ title, children, footer, onClose }) {
  return <div className="modal d-block" role="dialog" aria-modal="true" style={{ background: 'rgba(17,24,39,.45)' }}><div className="modal-dialog modal-dialog-centered"><div className="modal-content border-0" style={{ borderRadius: 12 }}><div className="modal-header" style={{ borderColor: colors.border }}><h2 className="modal-title fs-5">{title}</h2><button className="btn-close" onClick={onClose} aria-label="Close" /></div><div className="modal-body p-4">{children}</div>{footer && <div className="modal-footer" style={{ borderColor: colors.border }}>{footer}</div>}</div></div></div>;
}

export default Modal;
