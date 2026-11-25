import { Helmet } from "react-helmet-async";
import {
  FiZap, FiAward, FiShield, FiBarChart2, FiBookOpen, FiMessageCircle, FiCheck, FiX,
} from "react-icons/fi";
import { Reveal, SectionHead, PageHero, CtaBand } from "../components/ui";

const REASONS = [
  { icon: <FiZap />,           title: "Fast Delivery",        desc: "We follow agile methodology to deliver projects on time without compromising quality." },
  { icon: <FiAward />,         title: "Premium Quality",      desc: "From design to deployment, we maintain the highest standards in every deliverable." },
  { icon: <FiShield />,        title: "Secure & Scalable",    desc: "Our solutions are built with security and scalability in mind from day one." },
  { icon: <FiBarChart2 />,     title: "Data-Driven Approach", desc: "Every decision we make is backed by data, research and industry best practices." },
  { icon: <FiBookOpen />,      title: "Expert Trainers",      desc: "Learn from experienced professionals with real-world knowledge and a passion for teaching." },
  { icon: <FiMessageCircle />, title: "24/7 Support",         desc: "We're always here when you need us, with quick responses and reliable post-delivery support." },
];

const COMPARE = [
  { feature: "Custom Solutions",     us: true, others: false },
  { feature: "On-Time Delivery",     us: true, others: false },
  { feature: "Affordable Pricing",   us: true, others: true  },
  { feature: "Training Programs",    us: true, others: false },
  { feature: "Post-Project Support", us: true, others: false },
  { feature: "Modern Tech Stack",    us: true, others: true  },
];

const STEPS = [
  { title: "Discovery & Planning", desc: "We dig into your goals, users and requirements, then agree on scope and timeline." },
  { title: "Design & Prototype",   desc: "Wireframes and clickable prototypes so you see the product before it's built." },
  { title: "Development",          desc: "Clean, tested code in short sprints with regular demos and updates." },
  { title: "Testing & Launch",     desc: "Thorough QA across devices, then a smooth deployment to production." },
  { title: "Support & Growth",     desc: "Maintenance, improvements and SEO to keep your product growing." },
];

const Mark = ({ yes }) => (
  <span className={`mark ${yes ? "yes" : "no"}`} aria-label={yes ? "Yes" : "No"}>
    {yes ? <FiCheck /> : <FiX />}
  </span>
);

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

      <PageHero
        crumb="Why Us"
        eyebrow="Why us"
        title={<>Why choose <span className="grad-text">CodeNeeti?</span></>}
        desc="In a sea of tech companies, here's what makes us the right partner for your digital journey."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 0.08} className="card card-hover">
                <div className="icon-tile">{r.icon}</div>
                <h3 className="h3">{r.title}</h3>
                <p>{r.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section section-alt">
        <div className="container">
          <SectionHead
            center
            eyebrow="The difference"
            title={<>CodeNeeti vs <span className="grad-text">others</span></>}
          />
          <Reveal className="compare">
            <div className="compare-row compare-head">
              <span>Feature</span>
              <span className="us">CodeNeeti</span>
              <span>Others</span>
            </div>
            {COMPARE.map((row) => (
              <div className="compare-row" key={row.feature}>
                <span>{row.feature}</span>
                <span className="us"><Mark yes={row.us} /></span>
                <span><Mark yes={row.others} /></span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <SectionHead
            center
            eyebrow="How we work"
            title={<>Our <span className="grad-text">process</span></>}
            desc="Five clear steps from idea to a product that keeps growing."
          />
          <div className="steps">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08} className="step">
                <span className="step-num">0{i + 1}</span>
                <h3 className="h3">{s.title}</h3>
                <p className="muted">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
