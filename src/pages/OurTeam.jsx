import "./PageHero.css";
import "./Extra.css";
import sudhanshuPhoto from "../assets/sudhanshu.jpg";
import vickyPhoto from "../assets/vicky.png";
import dhanrajPhoto from "../assets/dhanraj.png";
import rishuPhoto from "../assets/rishu.png";
import himanshuPhoto from "../assets/himanshu.png";
import aryanPhoto from "../assets/aryan.png";
import kesherPhoto from "../assets/kesher.png";
import { Helmet } from "react-helmet-async";

const FOUNDER = {
  name: "Sudhanshu Kumar",
  role: "CEO & Founder",
  skills: ["Leadership", "Strategy", "Web & App Vision"],
  photo: sudhanshuPhoto,
  bio: "A visionary leader driving CodeNeeti forward with innovation, experience, and a commitment to both digital products and developer growth.",
};

const TEAM = [
  {
    name: "Himanshu Kumar",
    role: "Training Head",
    skills: ["Python", "DSA", "Web Basics"],
    photo: himanshuPhoto,
    bio: "Dedicated educator who has trained 200+ students with a practical, project-based approach.",
  },
  {
    name: "Aryan Vaihav",
    role: "Marketing Head",
    skills: ["Brand Strategy", "Growth", "Digital Campaigns"],
    photo: aryanPhoto,
    bio: "Drives brand visibility and positions CodeNeeti as the go-to choice for tech solutions and training.",
  },
  {
    name: "Kesher Tirkey",
    role: "Full Stack Developer",
    skills: ["React", "Node.js", "MongoDB"],
    photo: kesherPhoto,
    bio: "Builds polished full-stack solutions that connect beautiful interfaces with robust backend systems.",
  },
  {
    name: "Dhanraj Kumar",
    role: "App Developer",
    skills: ["Flutter", "React Native", "Firebase"],
    photo: dhanrajPhoto,
    bio: "Mobile-first developer crafting smooth, performant apps for both iOS and Android platforms.",
  },
  {
    name: "Vicky Kumar",
    role: "Backend Developer",
    skills: ["Node.js", "Express", "SQL/NoSQL"],
    photo: vickyPhoto,
    bio: "Designs secure and scalable server-side architectures that power seamless digital experiences.",
  },
  {
    name: "Rishu Vaihav",
    role: "UI/UX Designer",
    skills: ["Figma", "CSS", "Prototyping"],
    photo: rishuPhoto,
    bio: "Creative designer who transforms complex problems into beautiful, intuitive user experiences.",
  },
];

export default function OurTeam() {
  return (
   <>
<Helmet>
  <title>Our Team | CodeNeeti</title>
  <meta
    name="description"
    content="Meet the talented team behind CodeNeeti and our expertise in web development and technology training."
  />
</Helmet>
    <div>
      <section className="page-hero">
        <div className="page-hero-orb" />
        <div className="page-hero-content">
          <div className="section-tag">The People</div>
          <h1 className="section-title">Meet Our <span>Team</span></h1>
          <p className="section-desc">
            Passionate professionals who bring skill, creativity, and dedication to every project and student.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="team-featured-wrapper">
            <div className="card team-card team-featured-card">
              <div className="team-avatar">
                <img src={FOUNDER.photo} alt={`${FOUNDER.name} photo`} />
              </div>
              <div className="team-info">
                <h3 style={{ fontFamily: "var(--font-head)", fontSize: "1.35rem", marginBottom: "0.2rem" }}>{FOUNDER.name}</h3>
                <p className="team-role">{FOUNDER.role}</p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.8, margin: "1rem 0" }}>{FOUNDER.bio}</p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {FOUNDER.skills.map((s) => (
                    <span className="badge" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid-3" style={{ marginTop: "3rem" }}>
            {TEAM.map((member) => (
              <div className="card team-card" key={member.name}>
                <div className="team-avatar">
                  <img src={member.photo} alt={`${member.name} photo`} />
                </div>
                <div className="team-info">
                  <h3 style={{ fontFamily: "var(--font-head)", fontSize: "1.15rem", marginBottom: "0.2rem" }}>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.7, margin: "0.75rem 0" }}>{member.bio}</p>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {member.skills.map((s) => (
                      <span className="badge" key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-inner">
          <div className="card" style={{ textAlign: "center", padding: "3rem", background: "var(--surface2)" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🚀</div>
            <h3 style={{ fontFamily: "var(--font-head)", fontSize: "1.5rem", marginBottom: "0.75rem" }}>
              Want to Join Our <span style={{ color: "var(--accent)" }}>Team?</span>
            </h3>
            <p style={{ color: "var(--text-muted)", maxWidth: "480px", margin: "0 auto 1.5rem" }}>
              We're always looking for talented developers, designers, and educators to join the CodeNeeti family.
            </p>
            <a href="mailto:info@codeneeti.com" className="btn btn-primary">Apply Now ➜</a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
