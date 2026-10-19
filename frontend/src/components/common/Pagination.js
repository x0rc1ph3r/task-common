// Provides reusable previous, numbered, and next page controls.
import { colors } from '../../config/theme';

function Pagination({ page, pageCount, total, pageSize, onChange }) {
  const start = total ? (page - 1) * pageSize + 1 : 0;
  const end = Math.min(page * pageSize, total);
  return <div className="d-flex justify-content-between align-items-center mt-3"><small style={{ color: colors.muted }}>Showing {start} to {end} of {total}</small><div className="d-flex gap-1"><button className="btn btn-sm" disabled={page === 1} onClick={() => onChange(page - 1)}>Previous</button>{Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => <button key={number} className={`btn btn-sm ${number === page ? 'btn-primary' : 'btn-light'}`} onClick={() => onChange(number)}>{number}</button>)}<button className="btn btn-sm" disabled={page === pageCount} onClick={() => onChange(page + 1)}>Next</button></div></div>;
}

export default Pagination;
