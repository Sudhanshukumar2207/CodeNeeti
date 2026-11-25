import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import logo from "../assets/Codeneeti_logo-removebg.png";

const LINKS = [
  ["Home", "/"], ["About Us", "/about"], ["Why Choose Us", "/why"],
  ["Our Team", "/team"], ["Blog", "/blog"], ["Contact Us", "/contact"],
];

const SERVICES = [
  "Web Development", "App Development", "AI Automation",
  "SEO & Digital Marketing", "Tech Training",
];

const SOCIALS = [
  { href: "https://www.facebook.com/CodeNeeti1",  label: "Facebook",  icon: <FaFacebookF size={16} /> },
  { href: "https://www.instagram.com/codeneeti1", label: "Instagram", icon: <FaInstagram size={17} /> },
  { href: "https://www.youtube.com/@CodeNeeti",   label: "YouTube",   icon: <FaYoutube size={17} /> },
  { href: "https://wa.me/919661542794",           label: "WhatsApp",  icon: <FaWhatsapp size={17} /> },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-about">
            <Link to="/" className="brand">
              <img src={logo} alt="CodeNeeti Logo" width="36" height="36" />
              <span className="brand-name">Code<span>Neeti</span></span>
            </Link>
            <p>
              Web & app development, AI automation and hands-on tech training,
              helping businesses grow and students build real careers.
            </p>
            <div className="socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              {LINKS.map(([label, to]) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {SERVICES.map((s) => (
                <li key={s}><Link to="/contact">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Get in touch</h4>
            <ul>
              <li><a href="mailto:info@codeneeti.in"><FiMail size={15} /> info@codeneeti.in</a></li>
              <li><a href="tel:+919661542794"><FiPhone size={15} /> +91 96615 42794</a></li>
              <li><span><FiMapPin size={15} /> Rajapur Pul, Patna, Bihar</span></li>
              <li><span><FiClock size={15} /> Mon–Sat, 9 AM – 7 PM</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} CodeNeeti. All rights reserved.</p>
          <p>Made with ❤️ in Bihar, India</p>
        </div>
      </div>
    </footer>
  );
}
