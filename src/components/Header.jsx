import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        aria-label="Offcanvas navbar large"
      >
        <div className="container-lg">
          <Link className="navbar-brand" to="/">
            <img
              src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2"
            aria-controls="offcanvasNavbar2"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar2"
            aria-labelledby="offcanvasNavbar2Label"
          >
            <div className="offcanvas-header p-0">
          <button
            type="button"
            className="btn-close btn-close-black"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Car Tyres
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Bike Tyres
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Tyre Pressure
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Commercial Tyres
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Accessories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    More
                  </Link>
                </li>
              </ul>
              <Link to="#" className="btn btn-primary">
              <i className="bi bi-person fs-6 me-1"></i>
              Login</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
