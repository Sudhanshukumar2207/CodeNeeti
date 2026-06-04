import "./Home.css";

const SERVICES = [
  { icon: "🌐", title: "Web Development",     desc: "Modern, responsive websites and web apps built with the latest technologies like React, Next.js, and Node.js." },
  { icon: "📱", title: "App Development",      desc: "Native and cross-platform mobile apps for iOS & Android that deliver seamless user experiences." },
  { icon: "🎓", title: "Tech Training",         desc: "Hands-on training programs for students and beginners — from fundamentals to advanced development skills." },
  { icon: "🔧", title: "IT Consultation",       desc: "Expert guidance to plan, build and scale your digital products with the right technology stack." },
];

const STATS = [
  { value: "50+",  label: "Projects Delivered" },
  { value: "200+", label: "Students Trained"   },
  { value: "30+",  label: "Happy Clients"      },
  { value: "3+",   label: "Years Experience"   },
];

export default function Home({ setActivePage }) {
  return (
    <div className="home">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />

        <div className="hero-content">
          <div className="section-tag animate-slide" style={{ animationDelay: "0.1s" }}>
            🚀 Web · App · Training
          </div>
          <h1 className="hero-title animate-slide" style={{ animationDelay: "0.2s" }}>
            Build Digital <span>Futures</span><br />with CodeNeeti
          </h1>
          <p className="hero-desc animate-slide" style={{ animationDelay: "0.3s" }}>
            We craft powerful web & mobile applications and train the next generation of developers.
            Your vision, our code — let's build something extraordinary.
          </p>
          <div className="hero-btns animate-slide" style={{ animationDelay: "0.4s" }}>
            <button className="btn btn-primary" onClick={() => { setActivePage("contact"); window.scrollTo({ top: 0 }); }}>
              Get in Touch ➜
            </button>
            <button className="btn btn-outline" onClick={() => { setActivePage("about"); window.scrollTo({ top: 0 }); }}>
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero-visual animate-float">
          <div className="hero-card">
            <div className="hc-dot hc-dot-1" /><div className="hc-dot hc-dot-2" /><div className="hc-dot hc-dot-3" />
            <div className="hc-line" />
            <div className="hc-code">
              <span className="hc-kw">const</span> <span className="hc-var">project</span> = {"{"}
              <br />&nbsp;&nbsp;<span className="hc-key">name</span>: <span className="hc-str">"Your Dream App"</span>,
              <br />&nbsp;&nbsp;<span className="hc-key">tech</span>: <span className="hc-str">"React + Node"</span>,
              <br />&nbsp;&nbsp;<span className="hc-key">status</span>: <span className="hc-str">"🚀 Launched!"</span>
              <br />{"}"};
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-section">
        <div className="stats-inner">
          {STATS.map((s, idx) => (
            <div className="stat-item animate-stat-count" style={{ animationDelay: `${0.2 + idx * 0.15}s` }} key={s.label}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section">
        <div className="section-inner">
          <div style={{ textAlign: "center" }}>
            <div className="section-tag animate-pulse-subtle">What We Do</div>
            <h2 className="section-title">Our <span>Services</span></h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              From building your first website to training future developers — we've got you covered.
            </p>
          </div>

          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {SERVICES.map((s, idx) => (
              <div className="card card-service animate-card-in" style={{ animationDelay: `${0.1 + idx * 0.1}s` }} key={s.title}>
                <div className="icon-box icon-glow">{s.icon}</div>
                <h3 style={{ fontFamily: "var(--font-head)", fontSize: "1.15rem", marginBottom: "0.5rem" }}>{s.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="cta-orb" />
        <div className="cta-inner">
          <h2 className="section-title">Ready to Build <span>Something Great?</span></h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
            Let's discuss your project or training needs. Our team is just a message away.
          </p>
          <button className="btn btn-primary" onClick={() => { setActivePage("contact"); window.scrollTo({ top: 0 }); }}>
            Start a Project ➜
          </button>
        </div>
      </section>
    </div>
  );
}
