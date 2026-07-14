import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}

        <div>

          <h2>CancerVision AI</h2>

          <p>
            AI-powered cancer risk assessment platform
            designed to help users understand potential
            health risks through intelligent analysis.
          </p>

          <div className="social-icons">

            <a href="#">🌐</a>

            <a href="#">💼</a>

            <a href="#">📘</a>

            <a href="#">📷</a>

          </div>

        </div>

        {/* Quick Links */}

        <div>

          <h3>Quick Links</h3>

          <ul>

            <li><Link to="/">Home</Link></li>

            <li><Link to="/about">About</Link></li>

            <li><Link to="/assessment">Assessment</Link></li>

            <li><Link to="/contact">Contact</Link></li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3>Contact</h3>

          <p>📧 support@cancervision.ai</p>

          <p>📞 +91 98765 43210</p>

          <p>📍 India</p>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 CancerVision AI | All Rights Reserved

      </div>

    </footer>
  );
}

export default Footer;