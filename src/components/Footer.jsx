import { useNavigate } from "react-router-dom";
import logo from "../assets/Codeneeti_logo-removebg.png";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const navigate = useNavigate();
  const go = (to) => { navigate(to); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand animate-footer-fade" style={{ animationDelay: "0.1s" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
              <div className="nav-logo-box"><img src={logo} alt="CodeNeeti Logo" height={35} /></div>
              <span style={{ fontFamily: "var(--font-head)", fontSize: "1.2rem", fontWeight: 700 }}>
                Code<span style={{ color: "var(--accent)" }}>Neeti</span>
              </span>
            </div>
            <p>
              Empowering businesses with cutting-edge Web & App Development solutions,
              and nurturing the next generation of tech talent through quality training programs.
            </p> <br />
            <h4>Follow Us</h4>
      <p style={{ display: "flex", gap: "3rem", marginTop: "0.5rem" }}>
      <a
        href="YOUR_FACEBOOK_URL"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "blue", textDecoration: "none", alignItems: "center", gap: "8px" }}
      >
        <FaFacebook size={20} color="#1877F2" />
      </a>
      
      <a
        href="https://www.instagram.com/codeneeti1"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "inherit", textDecoration: "none", alignItems: "center", gap: "8px" }}
      >
        <FaInstagram size={20} color="#E1306C" />
      </a></p>
          </div>

          {/* Quick Links */}
          <div className="footer-col animate-footer-fade" style={{ animationDelay: "0.2s" }}>
            <h4>Quick Links</h4>
            <ul>
              {[["Home","/"],["About Us","/about"],["Why Choose Us","/why"],["Our Team","/team"],["Blog","/blog"],["Contact Us","/contact"]].map(([label, to], idx) => (
                <li key={to} className="footer-link-item" style={{ animationDelay: `${0.25 + idx * 0.08}s` }}>
                  <button onClick={() => go(to)}>{label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col animate-footer-fade" style={{ animationDelay: "0.3s" }}>
            <h4>Contact</h4>
            <ul>
              <li className="footer-contact-item" style={{ animationDelay: "0.35s" }}><a style={{ color: "inherit", textDecoration: "none" }} href="mailto:info@codeneeti.com">📨 info@codeneeti.in</a></li>
              <li className="footer-contact-item" style={{ animationDelay: "0.43s" }}><a style={{ color: "inherit", textDecoration: "none" }} href="tel:+919661542794">📞 +91 9661542794</a></li>
              <li className="footer-contact-item" style={{ animationDelay: "0.51s" }}>📍 Rajapur Pull, Patna</li>
            </ul>
          </div>
          
        </div>

        <div className="footer-bottom animate-footer-fade" style={{ animationDelay: "0.4s" }}>
          <p>© 2025 <span>CodeNeeti</span>. All rights reserved.</p>
          <p>Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}
