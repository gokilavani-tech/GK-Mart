import "../styles/Footer.css";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">

          <h2>GK Mart</h2>

          <p>
            Your trusted online shopping destination for
            Mobiles, Laptops, Smart Watches and Accessories.
          </p>

        </div>

        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/products">Products</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

          </ul>

        </div>

        <div className="footer-section">

          <h3>Contact</h3>

          <p>📧 support@gkmart.com</p>

          <p>📞 +91 98765 43210</p>

          <p>📍 Tirunelveli, Tamil Nadu</p>

        </div>

        <div className="footer-section">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="#">
              <FaInstagram className="social-icon" />
            </a>

            <a href="#">
              <FaLinkedin className="social-icon" />
            </a>

            <a href="#">
              <FaFacebook className="social-icon" />
            </a>

            <a href="#">
              <FaGithub className="social-icon" />
            </a>

          </div>

          <div className="newsletter">

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              Subscribe
            </button>

          </div>

        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 GK Mart | All Rights Reserved ❤️
      </p>

    </footer>
  );
}

export default Footer;