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
          <div className="footer-brand">
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
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {[["Home","home"],["About Us","about"],["Why Choose Us","why"],["Our Team","team"],["Contact Us","contact"]].map(([label, key]) => (
                <li key={key}>
                  <button onClick={() => navigate(key)}>{label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>📨 admin@codeneeti.in</li>
              <li>📞 +91 9661542794</li>
              <li>📍 Rajapur Pull, Patna</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 <span>CodeNeeti</span>. All rights reserved.</p>
          <p>Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}
