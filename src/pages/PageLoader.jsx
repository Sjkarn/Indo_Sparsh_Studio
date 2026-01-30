import "./PageLoader.css";

export default function PageLoader({ show }) {
  if (!show) return null;

  return (
    <div className="page-loader">
      <div className="loader-core">
        <span className="ring r1"></span>
        <span className="ring r2"></span>
        <span className="ring r3"></span>
        <div className="center-dot"></div>
      </div>

      <p className="loader-text">Initializing Experience</p>
    </div>
  );
}
