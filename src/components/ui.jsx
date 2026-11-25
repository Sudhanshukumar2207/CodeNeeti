import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";

/** Fades/slides children in once they scroll into view. */
export function Reveal({ as: Tag = "div", delay = 0, className = "", style, children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { el.classList.add("in"); return; }
    // Already on screen at mount (e.g. hero): show right away, don't wait for the observer
    if (el.getBoundingClientRect().top < window.innerHeight) {
      const raf = requestAnimationFrame(() => el.classList.add("in"));
      return () => cancelAnimationFrame(raf);
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ "--d": `${delay}s`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}

/** Scrolls to top whenever the route changes. */
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export function SectionHead({ eyebrow, title, desc, center = false, children }) {
  return (
    <Reveal className={`section-head ${center ? "center" : ""}`}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className="h2">{title}</h2>
      {desc && <p className="lead">{desc}</p>}
      {children}
    </Reveal>
  );
}

export function PageHero({ eyebrow, title, desc, crumb }) {
  return (
    <section className="page-hero">
      <div className="container">
        <Reveal>
          {crumb && (
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <FiChevronRight size={14} />
              <span>{crumb}</span>
            </nav>
          )}
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h1 className="h1">{title}</h1>
          {desc && <p className="lead">{desc}</p>}
        </Reveal>
      </div>
    </section>
  );
}

export function CtaBand({
  title = <>Ready to build <span className="grad-text">something great?</span></>,
  desc = "Tell us about your project or training needs. We usually reply within 24 hours.",
}) {
  return (
    <section className="section-tight">
      <div className="container">
        <Reveal className="cta-band">
          <h2 className="h2">{title}</h2>
          <p className="lead">{desc}</p>
          <div className="actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start a Project <FiArrowRight />
            </Link>
            <a href="https://wa.me/919661542794" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
