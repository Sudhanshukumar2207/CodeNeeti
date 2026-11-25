import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FiArrowRight, FiGlobe, FiSmartphone, FiCpu, FiTrendingUp, FiBookOpen, FiCompass,
  FiCheck, FiClock,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiFlutter, SiGoogle, SiOpenai, SiMongodb, SiFigma, SiNextdotjs } from "react-icons/si";
import { Reveal, SectionHead, CtaBand } from "../components/ui";
import logo from "../assets/Codeneeti_logo-removebg.png";
import POSTS from "./blogData";
import { formatDate, readingTime, sortByDate } from "./blogUtils";

const SERVICES = [
  { icon: <FiGlobe />,      title: "Web Development",   desc: "Fast, responsive websites and web apps built with React, Next.js and Node.js, designed to turn visitors into customers." },
  { icon: <FiSmartphone />, title: "App Development",   desc: "Native and cross-platform mobile apps for iOS & Android with smooth, reliable user experiences." },
  { icon: <FiCpu />,        title: "AI Automation",     desc: "AI chatbots, workflow automation and API integrations that cut manual work and save your team hours." },
  { icon: <FiTrendingUp />, title: "SEO & Digital Marketing", desc: "Rank higher on Google, grow organic traffic and get more leads with result-driven SEO strategies." },
  { icon: <FiBookOpen />,   title: "Tech Training",     desc: "Hands-on, project-based training for students and beginners, from fundamentals to job-ready skills." },
  { icon: <FiCompass />,    title: "IT Consultation",   desc: "Expert guidance to plan, build and scale your digital product with the right technology stack." },
];

const STATS = [
  { value: "50+",  label: "Projects delivered" },
  { value: "200+", label: "Students trained"   },
  { value: "30+",  label: "Happy clients"      },
  { value: "3+",   label: "Years experience"   },
];

const STEPS = [
  { title: "Discovery",   desc: "We understand your goals, audience and requirements." },
  { title: "Design",      desc: "Wireframes and UI prototypes you can review early." },
  { title: "Development", desc: "Clean, scalable code with regular progress updates." },
  { title: "Launch",      desc: "Testing, deployment and a smooth go-live." },
  { title: "Support",     desc: "Ongoing maintenance and growth after delivery." },
];

const ROTATING = ["Websites", "Mobile Apps", "AI Automations", "SEO Strategies"];

const OUTER = [
  { label: "React",   icon: <SiReact />,     color: "#149ECA" },
  { label: "Google",  icon: <SiGoogle />,    color: "#4285F4" },
  { label: "Node.js", icon: <SiNodedotjs />, color: "#5FA04E" },
  { label: "OpenAI",  icon: <SiOpenai />,    color: "#111111" },
  { label: "Flutter", icon: <SiFlutter />,   color: "#02569B" },
  { label: "MongoDB", icon: <SiMongodb />,   color: "#47A248" },
  { label: "Figma",   icon: <SiFigma />,     color: "#F24E1E" },
  { label: "Next.js", icon: <SiNextdotjs />, color: "#111111" },
];

const INNER = ["Web", "AI", "Apps", "SEO"];

/** Cycles through words with a slide-in animation. */
function RotatingWord({ words, interval = 2200 }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);
  return (
    <span className="rotator">
      <span key={i} className="rotator-word">{words[i]}</span>
    </span>
  );
}

const HIGHLIGHTS = ["Custom solutions, no templates", "On-time delivery", "Post-launch support"];

export default function Home() {
  const latest = sortByDate(POSTS).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>CodeNeeti | Web & App Development Company</title>
        <meta
          name="description"
          content="CodeNeeti provides Web Development, App Development, AI Automation and Tech Training services."
        />
      </Helmet>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <Reveal>
              <span className="hero-badge">
                <span className="dot" /> Web · App · AI · Training
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="h1 hero-title">
                We build
                <RotatingWord words={ROTATING} />
                that grow your business
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lead hero-lead">
                CodeNeeti crafts powerful websites, mobile apps and AI automations for growing businesses,
                and trains the next generation of developers. Your vision, our code.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start your project <FiArrowRight />
              </Link>
              <a href="https://wa.me/919661542794" target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg">
                <FaWhatsapp size={20} /> Chat on WhatsApp
              </a>
            </Reveal>
            <Reveal delay={0.32}>
              <ul className="hero-checks">
                {HIGHLIGHTS.map((h) => (
                  <li key={h}><FiCheck /> {h}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="hero-visual" aria-hidden="true">
            <div className="orbit">
              <div className="orbit-ring r2">
                {OUTER.map((t, i) => (
                  <div className="orbit-item" key={t.label} style={{ "--a": `${(360 / OUTER.length) * i - 90}deg` }}>
                    <span className="tech" title={t.label} style={{ color: t.color }}>{t.icon}</span>
                  </div>
                ))}
              </div>
              <div className="orbit-ring r1">
                {INNER.map((label, i) => (
                  <div className="orbit-item" key={label} style={{ "--a": `${(360 / INNER.length) * i - 45}deg` }}>
                    <span className="tag-pill">{label}</span>
                  </div>
                ))}
              </div>
              <div className="orbit-core">
                <img src={logo} alt="" width="120" height="120" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats strip */}
        <div className="container">
          <Reveal className="stats-strip">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <span className="stat-value grad-text">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section">
        <div className="container">
          <SectionHead
            center
            eyebrow="What we do"
            title={<>Services that help you <span className="grad-text">grow</span></>}
            desc="From your first website to AI-powered workflows and developer training, everything under one roof."
          />
          <div className="grid grid-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08} className="card card-hover service-card">
                <div className="icon-tile">{s.icon}</div>
                <h3 className="h3">{s.title}</h3>
                <p>{s.desc}</p>
                <Link to="/contact" className="link-arrow service-link">
                  Enquire <FiArrowRight />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head-row">
            <SectionHead
              eyebrow="How we work"
              title={<>A simple, proven <span className="grad-text">process</span></>}
              desc="Clear steps, regular updates and no surprises, from the first call to launch day."
            />
            <Reveal>
              <Link to="/why" className="btn btn-ghost">Why choose us <FiArrowRight /></Link>
            </Reveal>
          </div>
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

      {/* ── BLOG ── */}
      <section className="section">
        <div className="container">
          <div className="section-head-row">
            <SectionHead
              eyebrow="From the blog"
              title={<>Latest <span className="grad-text">insights</span></>}
            />
            <Reveal>
              <Link to="/blog" className="btn btn-ghost">View all articles <FiArrowRight /></Link>
            </Reveal>
          </div>
          <div className="grid grid-3">
            {latest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link to={`/blog/${p.slug}`} className="card card-hover post-card">
                  <div className="post-meta">
                    <span>{formatDate(p.date)}</span>
                    <span className="sep" />
                    <span><FiClock size={13} /> {readingTime(p.content)} min read</span>
                  </div>
                  <h3 className="h3">{p.title}</h3>
                  <p className="post-excerpt">{p.excerpt}</p>
                  <span className="link-arrow">Read article <FiArrowRight /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
