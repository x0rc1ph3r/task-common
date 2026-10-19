// Builds a search input and any number of select filters from configuration.
import { controlStyle } from '../../config/theme';

function FilterBar({ search, onSearchChange, filters = [] }) {
  return <div className="row g-3 mb-4"><div className="col"><input className="form-control" style={controlStyle} value={search} onChange={(event) => onSearchChange(event.target.value)} placeholder="Search by name..." /></div>{filters.map((filter) => <div className="col-auto" key={filter.key}><select className="form-select" style={{ ...controlStyle, minWidth: 160 }} value={filter.value} onChange={(event) => filter.onChange(event.target.value)}><option value="">{filter.placeholder}</option>{filter.options.map((option) => <option key={option}>{option}</option>)}</select></div>)}</div>;
}

export default FilterBar;
