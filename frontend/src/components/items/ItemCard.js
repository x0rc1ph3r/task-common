// Composes common badges and progress into a reusable mobile-friendly item card.
import Badge from '../common/Badge';
import ProgressBar from '../common/ProgressBar';
import { colors, surfaceStyle } from '../../config/theme';

function ItemCard({ item, onEdit, onDelete }) {
  return <article style={{ ...surfaceStyle, padding: 20, marginBottom: 16 }}><div className="d-flex justify-content-between"><div><h3 className="fs-6 mb-1">{item.name}</h3><p className="small mb-3" style={{ color: colors.muted }}>{item.description}</p></div><div className="dropdown"><button className="btn border-0" data-bs-toggle="dropdown" aria-label={`Actions for ${item.name}`}><i className="bi bi-three-dots-vertical" /></button><ul className="dropdown-menu dropdown-menu-end"><li><button className="dropdown-item" onClick={() => onEdit(item)}>Edit</button></li><li><button className="dropdown-item text-danger" onClick={() => onDelete(item)}>Delete</button></li></ul></div></div><div className="row align-items-center"><div className="col"><Badge value={item.priority} /></div><div className="col"><Badge value={item.status} /></div><div className="col-5"><ProgressBar value={item.progress} /></div></div></article>;
}

export default ItemCard;
