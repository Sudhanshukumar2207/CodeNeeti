import "./PageHero.css";
import "./Extra.css";
import { Helmet } from "react-helmet-async";

const REASONS = [
  { icon: "⚡", title: "Fast Delivery",          desc: "We follow agile methodology to deliver projects on time without compromising quality." },
  { icon: "💎", title: "Premium Quality",         desc: "From design to deployment, we maintain the highest standards in every deliverable." },
  { icon: "🔒", title: "Secure & Scalable",       desc: "Our solutions are built with security and scalability in mind from day one." },
  { icon: "📊", title: "Data-Driven Approach",    desc: "Every decision we make is backed by data, research, and industry best practices." },
  { icon: "🎓", title: "Expert Trainers",         desc: "Learn from experienced professionals with real-world industry knowledge and passion for teaching." },
  { icon: "💬", title: "24/7 Support",            desc: "We're always here when you need us — quick responses and reliable post-delivery support." },
];

const COMPARE = [
  { feature: "Custom Solutions",      us: true,  others: false },
  { feature: "On-Time Delivery",      us: true,  others: false },
  { feature: "Affordable Pricing",    us: true,  others: true  },
  { feature: "Training Programs",     us: true,  others: false },
  { feature: "Post-Project Support",  us: true,  others: false },
  { feature: "Modern Tech Stack",     us: true,  others: true  },
];

export default function WhyChooseUs() {
  return (
    <>
<Helmet>
  <title>Why Choose CodeNeeti | Trusted Development Partner</title>
  <meta
    name="description"
    content="Discover why businesses choose CodeNeeti for website development, mobile apps and AI automation solutions."
  />
</Helmet>
    <div>
      <section className="page-hero">
        <div className="page-hero-orb" />
        <div className="page-hero-content">
          <div className="section-tag">Why Us</div>
          <h1 className="section-title">Why Choose <span>CodeNeeti?</span></h1>
          <p className="section-desc">
            In a sea of tech companies, here's what makes us the right partner for your digital journey.
          </p>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="section">
        <div className="section-inner">
          <div className="grid-3">
            {REASONS.map((r) => (
              <div className="card" key={r.title}>
                <div className="icon-box">{r.icon}</div>
                <h4 style={{ fontFamily: "var(--font-head)", fontSize: "1.05rem", marginBottom: "0.5rem" }}>{r.title}</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.7 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-inner">
          <div className="section-tag">The Difference</div>
          <h2 className="section-title">Us vs <span>Others</span></h2>
          <div className="compare-table" style={{ marginTop: "2rem" }}>
            <div className="compare-header">
              <div className="compare-feat">Feature</div>
              <div className="compare-col compare-us">CodeNeeti ✓</div>
              <div className="compare-col compare-them">Others</div>
            </div>
            {COMPARE.map((row) => (
              <div className="compare-row" key={row.feature}>
                <div className="compare-feat">{row.feature}</div>
                <div className="compare-col">{row.us ? "✅" : "❌"}</div>
                <div className="compare-col">{row.others ? "✅" : "❌"}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-inner">
          <div className="section-tag">How We Work</div>
          <h2 className="section-title">Our <span>Process</span></h2>
          <div className="process-steps" style={{ marginTop: "2.5rem" }}>
            {["Discovery & Planning", "Design & Prototype", "Development", "Testing & Launch", "Support & Growth"].map((step, i) => (
              <div className="process-step" key={step}>
                <div className="process-num">0{i + 1}</div>
                <div className="card process-card">
                  <h4 style={{ fontFamily: "var(--font-head)", fontSize: "0.95rem" }}>{step}</h4>
                </div>
                {i < 4 && <div className="process-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
   </>
  );
}

// CSS already imported via PageHero.css + Extra.css
