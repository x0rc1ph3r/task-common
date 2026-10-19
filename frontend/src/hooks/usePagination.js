// Encapsulates client-side pagination calculations and page correction.
import { useEffect, useMemo, useState } from 'react';

export default function usePagination(records = [], pageSize = 5) {
  const [page, setPage] = useState(1);
  const pageCount = Math.max(1, Math.ceil(records.length / pageSize));
  useEffect(() => { if (page > pageCount) setPage(pageCount); }, [page, pageCount]);
  const visible = useMemo(() => records.slice((page - 1) * pageSize, page * pageSize), [records, page, pageSize]);
  return { page, setPage, pageCount, visible, pageSize };
}
