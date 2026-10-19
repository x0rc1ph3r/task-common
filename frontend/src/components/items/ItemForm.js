// Implements a reusable controlled create/edit form for the starter entity.
import { useEffect, useState } from 'react';
import Modal from '../common/Modal';
import { controlStyle, primaryButtonStyle } from '../../config/theme';

const emptyItem = { name: '', description: '', priority: 'Medium', status: 'To Do', dueDate: '', progress: 0 };

function ItemForm({ initialValue, onSubmit, onClose }) {
  const [values, setValues] = useState(emptyItem);
  const [saving, setSaving] = useState(false);
  useEffect(() => setValues(initialValue ? { ...initialValue, dueDate: initialValue.dueDate.slice(0, 10) } : emptyItem), [initialValue]);
  const change = ({ target }) => setValues((current) => ({ ...current, [target.name]: target.name === 'progress' ? Number(target.value) : target.value }));
  const submit = async (event) => { event.preventDefault(); setSaving(true); try { await onSubmit(values); onClose(); } finally { setSaving(false); } };

  return <Modal title={initialValue ? 'Edit Item' : 'Add Item'} onClose={onClose} footer={<><button type="button" className="btn btn-light" onClick={onClose}>Cancel</button><button type="submit" form="item-form" className="btn btn-primary" style={primaryButtonStyle} disabled={saving}>{saving ? 'Saving...' : 'Save'}</button></>}><form id="item-form" onSubmit={submit}><label className="form-label">Name</label><input className="form-control mb-3" style={controlStyle} name="name" value={values.name} onChange={change} required /><label className="form-label">Description</label><input className="form-control mb-3" style={controlStyle} name="description" value={values.description} onChange={change} /><div className="row g-3 mb-3"><div className="col"><label className="form-label">Priority</label><select className="form-select" style={controlStyle} name="priority" value={values.priority} onChange={change}><option>High</option><option>Medium</option><option>Low</option></select></div><div className="col"><label className="form-label">Status</label><select className="form-select" style={controlStyle} name="status" value={values.status} onChange={change}><option>To Do</option><option>In Progress</option><option>Review</option><option>Done</option></select></div></div><div className="row g-3"><div className="col"><label className="form-label">Due date</label><input type="date" className="form-control" style={controlStyle} name="dueDate" value={values.dueDate} onChange={change} required /></div><div className="col"><label className="form-label">Progress</label><input type="number" min="0" max="100" className="form-control" style={controlStyle} name="progress" value={values.progress} onChange={change} /></div></div></form></Modal>;
}

export default ItemForm;
