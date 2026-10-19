// Demonstrates reusable metric cards, table columns, states, and pagination.
import { useMemo } from 'react';
import { useItemContext } from '../context/ItemContext';
import usePagination from '../hooks/usePagination';
import PageHeader from '../components/common/PageHeader';
import StatCard from '../components/common/StatCard';
import DataTable from '../components/common/DataTable';
import Pagination from '../components/common/Pagination';
import Badge from '../components/common/Badge';
import LoadingState from '../components/common/LoadingState';
import ErrorAlert from '../components/common/ErrorAlert';
import { surfaceStyle } from '../config/theme';
import { formatDate } from '../utils/date';

function DashboardPage() {
  const { items, loading, error, refresh } = useItemContext();
  const { page, setPage, pageCount, visible, pageSize } = usePagination(items);
  const done = items.filter((item) => item.status === 'Done').length;
  const active = items.filter((item) => item.status === 'In Progress').length;
  const columns = useMemo(() => [
    { key: 'name', label: 'Name' },
    { key: 'priority', label: 'Priority', render: (value) => <Badge value={value} /> },
    { key: 'status', label: 'Status', render: (value) => <Badge value={value} /> },
    { key: 'dueDate', label: 'Due date', render: formatDate },
  ], []);

  return <><PageHeader title="Dashboard" subtitle="Reusable components driven by live API data." /><ErrorAlert message={error} onRetry={refresh} /><div className="row g-4 mb-4"><div className="col"><StatCard label="Total" value={items.length} helper="All records" /></div><div className="col"><StatCard label="In Progress" value={active} helper="Active records" accent="#D97706" /></div><div className="col"><StatCard label="Done" value={done} helper="Completed records" accent="#16A34A" /></div></div><section style={{ ...surfaceStyle, padding: 24 }}><h2 className="fs-5 mb-4">Recent Items</h2>{loading ? <LoadingState /> : <DataTable columns={columns} records={visible} />}<Pagination page={page} pageCount={pageCount} total={items.length} pageSize={pageSize} onChange={setPage} /></section></>;
}

export default DashboardPage;
