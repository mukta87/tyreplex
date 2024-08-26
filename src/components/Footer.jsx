import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
                alt=""
              />
              <div className="social-icons">
                <Link to="#"><i className="bi bi-facebook"></i></Link>
                <Link to="#"><i className="bi bi-instagram"></i></Link>
                <Link to="#"><i className="bi bi-twitter-x"></i></Link>
              </div>
            </div>
            <div className="col-md-8 footer-links">
              <div className="row">
                <div className="col-md-4">
                  <ul>
                    <li>
                      <Link to="#">Who We Are</Link>
                    </li>
                    <li>
                      <Link to="#">Are you a Tyre Dealer?</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul>
                    <li>
                      <Link to="#">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="#">Terms of use</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul>
                    <li>
                      <Link to="#">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="#">Career</Link>
                    </li>
                    <li>
                      <Link to="#">Shipping & Return Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <p className="my-2 text-center copyright">©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.</p>
    </>
  );
}

export default Footer;
