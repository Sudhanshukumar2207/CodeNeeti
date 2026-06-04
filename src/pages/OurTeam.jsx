import "./PageHero.css";
import "./Extra.css";

const TEAM = [
  {
    name: "Your Name",
    role: "Founder & Lead Developer",
    skills: ["React", "Node.js", "MongoDB"],
    emoji: "👨‍💻",
    bio: "Passionate developer with 4+ years of experience in full-stack development and a vision to empower businesses digitally.",
  },
  {
    name: "Team Member 2",
    role: "UI/UX Designer",
    skills: ["Figma", "CSS", "Prototyping"],
    emoji: "🎨",
    bio: "Creative designer who transforms complex problems into beautiful, intuitive user experiences.",
  },
  {
    name: "Team Member 3",
    role: "App Developer",
    skills: ["Flutter", "React Native", "Firebase"],
    emoji: "📱",
    bio: "Mobile-first developer crafting smooth, performant apps for both iOS and Android platforms.",
  },
  {
    name: "Team Member 4",
    role: "Training Head",
    skills: ["Python", "DSA", "Web Basics"],
    emoji: "🎓",
    bio: "Dedicated educator who has trained 200+ students with a practical, project-based approach.",
  },
];

export default function OurTeam() {
  return (
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
          <div className="grid-2">
            {TEAM.map((member) => (
              <div className="card team-card" key={member.name}>
                <div className="team-avatar">{member.emoji}</div>
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
  );
}
