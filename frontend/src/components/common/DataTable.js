// Renders records from configurable column definitions and optional row actions.
import EmptyState from './EmptyState';

function DataTable({ columns, records, rowKey = '_id', actions }) {
  if (!records.length) return <EmptyState title="No records found" />;
  return <div className="table-responsive"><table className="table align-middle"><thead><tr>{columns.map((column) => <th key={column.key}>{column.label}</th>)}{actions && <th>Actions</th>}</tr></thead><tbody>{records.map((record) => <tr key={record[rowKey]}>{columns.map((column) => <td key={column.key}>{column.render ? column.render(record[column.key], record) : record[column.key]}</td>)}{actions && <td>{actions(record)}</td>}</tr>)}</tbody></table></div>;
}

export default DataTable;
