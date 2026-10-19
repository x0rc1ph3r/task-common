// Demonstrates reusable search, filters, cards, forms, confirmation, and CRUD hooks.
import { useMemo, useState } from 'react';
import { useItemContext } from '../context/ItemContext';
import usePagination from '../hooks/usePagination';
import PageHeader from '../components/common/PageHeader';
import FilterBar from '../components/common/FilterBar';
import Pagination from '../components/common/Pagination';
import LoadingState from '../components/common/LoadingState';
import ErrorAlert from '../components/common/ErrorAlert';
import EmptyState from '../components/common/EmptyState';
import ConfirmDialog from '../components/common/ConfirmDialog';
import ItemForm from '../components/items/ItemForm';
import ItemCard from '../components/items/ItemCard';
import { primaryButtonStyle } from '../config/theme';

function ItemsPage() {
  const { items, loading, error, refresh, create, update, remove } = useItemContext();
  const [search, setSearch] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const filtered = useMemo(() => items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) && (!priority || item.priority === priority) && (!status || item.status === status)), [items, search, priority, status]);
  const { page, setPage, pageCount, visible, pageSize } = usePagination(filtered);
  const save = (values) => editing === 'new' ? create(values) : update(editing._id, values);
  const confirmDelete = async () => { await remove(deleting._id); setDeleting(null); };

  const filters = [
    { key: 'priority', value: priority, onChange: setPriority, placeholder: 'All priorities', options: ['High', 'Medium', 'Low'] },
    { key: 'status', value: status, onChange: setStatus, placeholder: 'All statuses', options: ['To Do', 'In Progress', 'Review', 'Done'] },
  ];

  return <><PageHeader title="Items" subtitle="Use this page as the template for any CRUD entity." action={<button className="btn btn-primary" style={primaryButtonStyle} onClick={() => setEditing('new')}>Add Item</button>} /><ErrorAlert message={error} onRetry={refresh} /><FilterBar search={search} onSearchChange={setSearch} filters={filters} />{loading ? <LoadingState /> : visible.length ? visible.map((item) => <ItemCard key={item._id} item={item} onEdit={setEditing} onDelete={setDeleting} />) : <EmptyState title="No items found" />}<Pagination page={page} pageCount={pageCount} total={filtered.length} pageSize={pageSize} onChange={setPage} />{editing && <ItemForm initialValue={editing === 'new' ? null : editing} onSubmit={save} onClose={() => setEditing(null)} />}{deleting && <ConfirmDialog title="Delete item" message={`Delete “${deleting.name}”? This cannot be undone.`} onClose={() => setDeleting(null)} onConfirm={confirmDelete} />}</>;
}

export default ItemsPage;
