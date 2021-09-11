import "../css/AppNavbar.css";

export function AppNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarNavAltMarkup"
        style={{ justifyContent: "center" }}
      >
        <div className="navbar-nav">
          <a href="#" className="button button-font">
            Products & Merchandise
          </a>
          <a href="#journey" className="button button-font">
            Custom Services
          </a>
        </div>
      </div>
    </nav>
  );
}
