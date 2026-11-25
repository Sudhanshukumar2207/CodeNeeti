import { Helmet } from "react-helmet-async";
import { FiTarget, FiEye, FiZap, FiAward, FiUsers, FiBookOpen } from "react-icons/fi";
import { Reveal, SectionHead, PageHero, CtaBand } from "../components/ui";

const VALUES = [
  { icon: <FiZap />,      title: "Innovation First",  desc: "We stay ahead of the curve, adopting modern technologies to build future-proof solutions." },
  { icon: <FiAward />,    title: "Result-Driven",     desc: "Every line of code we write is purposeful, aimed at achieving your business goals." },
  { icon: <FiUsers />,    title: "Client-Centric",    desc: "Your success is our success. We work as an extension of your team, not just a vendor." },
  { icon: <FiBookOpen />, title: "Knowledge Sharing", desc: "We believe in empowering people. Through quality training, we build the next generation." },
];

const MILESTONES = [
  { year: "2022", title: "Founded",          desc: "CodeNeeti was founded with a mission to deliver quality tech solutions." },
  { year: "2023", title: "Training Program", desc: "Launched structured training programs for students and beginners." },
  { year: "2024", title: "50+ Projects",     desc: "Successfully delivered 50+ web and app projects for clients across India." },
  { year: "2025", title: "Expanding",        desc: "Growing our team and services to serve more clients and students." },
];

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About CodeNeeti | Web & App Development Company</title>
        <meta
          name="description"
          content="Learn more about CodeNeeti, our mission, vision and commitment to quality web and app development services."
        />
      </Helmet>

      <PageHero
        crumb="About"
        eyebrow="Who we are"
        title={<>About <span className="grad-text">CodeNeeti</span></>}
        desc="A passionate team of developers, designers and educators dedicated to turning ideas into digital realities and empowering the next wave of tech talent."
      />

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <Reveal className="card mv-card">
              <div className="icon-tile"><FiTarget /></div>
              <h2 className="h3" style={{ fontSize: "1.5rem" }}>Our Mission</h2>
              <p>
                To deliver innovative, high-quality web and app development solutions that help businesses
                grow digitally, while nurturing emerging tech talent through practical, industry-aligned
                training programs.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="card mv-card">
              <div className="icon-tile"><FiEye /></div>
              <h2 className="h3" style={{ fontSize: "1.5rem" }}>Our Vision</h2>
              <p>
                To be the most trusted technology partner for startups and businesses, and the go-to
                learning destination for aspiring developers across India, bridging the gap between
                education and industry.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-alt">
        <div className="container">
          <SectionHead
            center
            eyebrow="Our DNA"
            title={<>Core <span className="grad-text">values</span></>}
            desc="The principles behind every project we ship and every student we train."
          />
          <div className="grid grid-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="card card-hover">
                <div className="icon-tile">{v.icon}</div>
                <h3 className="h3">{v.title}</h3>
                <p>{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <SectionHead
            center
            eyebrow="Our journey"
            title={<>How we <span className="grad-text">grew</span></>}
          />
          <ol className="timeline">
            {MILESTONES.map((m, i) => (
              <Reveal as="li" key={m.year} delay={i * 0.08} className="tl-item">
                <span className="tl-dot" />
                <span className="tl-year">{m.year}</span>
                <div className="card tl-card">
                  <h3 className="h3">{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
