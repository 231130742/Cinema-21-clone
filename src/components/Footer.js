import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="/profile">Profile</a>
          <span>|</span>
          <Link to="/terms">Terms of Use</Link>
          <span>|</span>
          <a href="/advertising">Advertising</a>
        </div>
        <div className="social-media">
          <a href="https://instagram.com/cinema.21" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://facebook.com/cinema21" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com/cinema21" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://youtube.com" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        <div className="copyright">
          <p>
            © 1999-2024 21Cineplex.com. All materials and contents (texts, graphics, and every attribute) are copyrights
            and trademarks of PT Nusantara Sejahtera Raya. Any commercial usage of the materials and contents is
            forbidden without prior permission from PT Nusantara Sejahtera Raya. There is no other institution/agency
            outside PT Nusantara Sejahtera Raya allowed to use www.21Cineplex.com (21Cineplex website) without prior
            permission from PT Nusantara Sejahtera Raya.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
