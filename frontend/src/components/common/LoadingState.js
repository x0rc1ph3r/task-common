// Shows a consistent loading indicator while remote data is pending.
function LoadingState({ label = 'Loading...' }) {
  return <div className="d-flex justify-content-center align-items-center gap-2 py-5"><span className="spinner-border spinner-border-sm" aria-hidden="true" /><span>{label}</span></div>;
}
export default LoadingState;
