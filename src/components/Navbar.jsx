import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/Codeneeti_logo-removebg.png";

const NAV_ITEMS = [
  { label: "Home",          key: "home"    },
  { label: "About Us",      key: "about"   },
  { label: "Why Choose Us", key: "why"     },
  { label: "Our Team",      key: "team"    },
  { label: "Blog",          key: "blog"    },
  { label: "Contact Us",    key: "contact" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const doNavigate = (to) => {
    navigate(to);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Brand */}
      <div className="nav-brand" onClick={() => doNavigate("/")}>
        <div className="nav-logo-box"><img src={logo} alt="CodeNeeti Logo" height="40" /></div>
        <span className="nav-brand-name">Code<span>Neeti</span></span>
      </div>

      {/* Desktop Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <li key={item.key}>
            <NavLink
              to={item.key === "home" ? "/" : `/${item.key}`}
              className={({ isActive }) => `${isActive ? "active" : ""} ${item.key === "contact" ? "nav-cta" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button
        className={`nav-hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
