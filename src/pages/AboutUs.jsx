import "./PageHero.css";

const VALUES = [
  { icon: "💡", title: "Innovation First",  desc: "We stay ahead of the curve, adopting modern technologies to build future-proof solutions." },
  { icon: "🎯", title: "Result-Driven",     desc: "Every line of code we write is purposeful — aimed at achieving your business goals." },
  { icon: "🤝", title: "Client-Centric",    desc: "Your success is our success. We work as an extension of your team, not just a vendor." },
  { icon: "📚", title: "Knowledge Sharing", desc: "We believe in empowering people — through quality training, we build the next generation." },
];

const MILESTONES = [
  { year: "2022", title: "Founded",              desc: "CodeNeeti was founded with a mission to deliver quality tech solutions." },
  { year: "2023", title: "Training Program",      desc: "Launched structured training programs for students and beginners." },
  { year: "2024", title: "50+ Projects",          desc: "Successfully delivered 50+ web and app projects for clients across India." },
  { year: "2025", title: "Expanding",             desc: "Growing our team and services to serve more clients and students." },
];

export default function AboutUs() {
  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-orb" />
        <div className="page-hero-content">
          <div className="section-tag">Who We Are</div>
          <h1 className="section-title">About <span>CodeNeeti</span></h1>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            We are a passionate team of developers, designers, and educators dedicated to transforming
            ideas into digital realities and empowering the next wave of tech talent.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="section-inner">
          <div className="about-mv-grid">
            <div className="card about-mission">
              <div className="icon-box">🎯</div>
              <h3 style={{ fontFamily: "var(--font-head)", fontSize: "1.3rem", marginBottom: "0.75rem" }}>Our Mission</h3>
              <div className="divider" />
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
                To deliver innovative, high-quality web and app development solutions that help businesses
                grow digitally — while simultaneously nurturing emerging tech talent through practical,
                industry-aligned training programs.
              </p>
            </div>
            <div className="card about-vision">
              <div className="icon-box">🌟</div>
              <h3 style={{ fontFamily: "var(--font-head)", fontSize: "1.3rem", marginBottom: "0.75rem" }}>Our Vision</h3>
              <div className="divider" />
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
                To be the most trusted technology partner for startups and businesses, and the go-to
                learning destination for aspiring developers across India — bridging the gap between
                education and industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-inner">
          <div className="section-tag">Our DNA</div>
          <h2 className="section-title">Core <span>Values</span></h2>
          <div className="grid-2" style={{ marginTop: "2rem" }}>
            {VALUES.map((v) => (
              <div className="card" key={v.title}>
                <div className="icon-box">{v.icon}</div>
                <h4 style={{ fontFamily: "var(--font-head)", fontSize: "1.05rem", marginBottom: "0.5rem" }}>{v.title}</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-inner">
          <div className="section-tag">Our Journey</div>
          <h2 className="section-title">How We <span>Grew</span></h2>
          <div className="timeline" style={{ marginTop: "2.5rem" }}>
            {MILESTONES.map((m, i) => (
              <div className="timeline-item" key={m.year}>
                <div className="timeline-year">{m.year}</div>
                <div className="timeline-dot" />
                <div className="card timeline-card">
                  <h4 style={{ fontFamily: "var(--font-head)", fontSize: "1rem", marginBottom: "0.4rem" }}>{m.title}</h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
