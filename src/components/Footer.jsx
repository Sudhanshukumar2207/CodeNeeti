export default function Footer({ setActivePage }) {
  const navigate = (key) => {
    setActivePage(key);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand animate-footer-fade" style={{ animationDelay: "0.1s" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
              <div className="nav-logo-box"><img src="/src/assets/Codeneeti_logo-removebg.png" alt="CodeNeeti Logo" height={35} /></div>
              <span style={{ fontFamily: "var(--font-head)", fontSize: "1.2rem", fontWeight: 700 }}>
                Code<span style={{ color: "var(--accent)" }}>Neeti</span>
              </span>
            </div>
            <p>
              Empowering businesses with cutting-edge Web & App Development solutions,
              and nurturing the next generation of tech talent through quality training programs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col animate-footer-fade" style={{ animationDelay: "0.2s" }}>
            <h4>Quick Links</h4>
            <ul>
              {[["Home","home"],["About Us","about"],["Why Choose Us","why"],["Our Team","team"],["Contact Us","contact"]].map(([label, key], idx) => (
                <li key={key} className="footer-link-item" style={{ animationDelay: `${0.25 + idx * 0.08}s` }}>
                  <button onClick={() => navigate(key)}>{label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col animate-footer-fade" style={{ animationDelay: "0.3s" }}>
            <h4>Contact</h4>
            <ul>
              <li className="footer-contact-item" style={{ animationDelay: "0.35s" }}><a style={{ color: "inherit", textDecoration: "none" }} href="mailto:info@codeneeti.com">📨 info@codeneeti.com</a></li>
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
