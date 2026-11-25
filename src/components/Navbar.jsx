import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import logo from "../assets/Codeneeti_logo-removebg.png";

const NAV_ITEMS = [
  { label: "Home",          to: "/"      },
  { label: "About",         to: "/about" },
  { label: "Why Us",        to: "/why"   },
  { label: "Team",          to: "/team"  },
  { label: "Blog",          to: "/blog"  },
  { label: "Contact",       to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation and lock page scroll while it is open
  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
      <div className="nav-inner">
        <Link to="/" className="brand" aria-label="CodeNeeti home">
          <img src={logo} alt="CodeNeeti Logo" width="38" height="38" />
          <span className="brand-name">Code<span>Neeti</span></span>
        </Link>

        <nav aria-label="Main">
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === "/"}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <Link to="/contact" className="btn btn-primary btn-sm">
            Get a Quote <FiArrowRight />
          </Link>
          <button
            className="nav-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.to === "/"}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn btn-primary btn-lg">
          Get a Free Quote <FiArrowRight />
        </Link>
      </div>
    </header>
  );
}
