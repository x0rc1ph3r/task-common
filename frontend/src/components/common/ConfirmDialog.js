// Asks for explicit confirmation before a destructive record action.
import Modal from './Modal';

function ConfirmDialog({ title = 'Confirm action', message, onConfirm, onClose }) {
  return <Modal title={title} onClose={onClose} footer={<><button className="btn btn-light" onClick={onClose}>Cancel</button><button className="btn btn-danger" onClick={onConfirm}>Confirm</button></>}><p className="mb-0">{message}</p></Modal>;
}

export default ConfirmDialog;
