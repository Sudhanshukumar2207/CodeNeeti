import { Helmet } from "react-helmet-async";
import { FiArrowRight } from "react-icons/fi";
import sudhanshuPhoto from "../assets/sudhanshu.jpg";
import vickyPhoto from "../assets/vicky.png";
import dhanrajPhoto from "../assets/dhanraj.png";
import rishuPhoto from "../assets/rishu.png";
import himanshuPhoto from "../assets/himanshu.png";
import aryanPhoto from "../assets/aryan.png";
import kesherPhoto from "../assets/kesher.png";
import { Reveal, SectionHead, PageHero } from "../components/ui";

const FOUNDER = {
  name: "Sudhanshu Kumar",
  role: "CEO & Founder",
  skills: ["Leadership", "Strategy", "Web & App Vision"],
  photo: sudhanshuPhoto,
  bio: "A visionary leader driving CodeNeeti forward with innovation, experience, and a commitment to both digital products and developer growth.",
};

const TEAM = [
  { name: "Himanshu Kumar", role: "Training Head",        skills: ["Python", "DSA", "Web Basics"],                     photo: himanshuPhoto, bio: "Dedicated educator who has trained 200+ students with a practical, project-based approach." },
  { name: "Aryan Vaihav",   role: "Marketing Head",       skills: ["Brand Strategy", "Growth", "Digital Campaigns"],   photo: aryanPhoto,    bio: "Drives brand visibility and positions CodeNeeti as the go-to choice for tech solutions and training." },
  { name: "Kesher Tirkey",  role: "Full Stack Developer", skills: ["React", "Node.js", "MongoDB"],                       photo: kesherPhoto,   bio: "Builds polished full-stack solutions that connect beautiful interfaces with robust backend systems." },
  { name: "Dhanraj Kumar",  role: "App Developer",        skills: ["Flutter", "React Native", "Firebase"],              photo: dhanrajPhoto,  bio: "Mobile-first developer crafting smooth, performant apps for both iOS and Android platforms." },
  { name: "Vicky Kumar",    role: "Backend Developer",    skills: ["Node.js", "Express", "SQL/NoSQL"],                  photo: vickyPhoto,    bio: "Designs secure and scalable server-side architectures that power seamless digital experiences." },
  { name: "Rishu Vaihav",   role: "UI/UX Designer",       skills: ["Figma", "CSS", "Prototyping"],                      photo: rishuPhoto,    bio: "Creative designer who transforms complex problems into beautiful, intuitive user experiences." },
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

      <PageHero
        crumb="Team"
        eyebrow="The people"
        title={<>Meet our <span className="grad-text">team</span></>}
        desc="Passionate professionals who bring skill, creativity and dedication to every project and every student."
      />

      <section className="section">
        <div className="container">
          {/* Founder */}
          <Reveal className="card founder-card">
            <div className="founder-photo">
              <img src={FOUNDER.photo} alt={FOUNDER.name} loading="lazy" />
            </div>
            <div className="founder-body">
              <span className="chip chip-accent">{FOUNDER.role}</span>
              <h2 className="h2" style={{ marginTop: "1rem" }}>{FOUNDER.name}</h2>
              <p className="lead">{FOUNDER.bio}</p>
              <div className="chips">
                {FOUNDER.skills.map((s) => <span className="chip" key={s}>{s}</span>)}
              </div>
            </div>
          </Reveal>

          <SectionHead
            center
            eyebrow="Core team"
            title={<>The minds behind <span className="grad-text">the work</span></>}
          />

          <div className="grid grid-3">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 0.08} className="card card-hover member-card">
                <div className="member-photo">
                  <img src={m.photo} alt={m.name} loading="lazy" />
                </div>
                <div className="member-body">
                  <span className="member-role">{m.role}</span>
                  <h3 className="h3">{m.name}</h3>
                  <p>{m.bio}</p>
                  <div className="chips">
                    {m.skills.map((s) => <span className="chip" key={s}>{s}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join us */}
      <section className="section-tight">
        <div className="container">
          <Reveal className="cta-band">
            <div className="eyebrow center" style={{ display: "flex", justifyContent: "center" }}>Careers</div>
            <h2 className="h2">Want to join our <span className="grad-text">team?</span></h2>
            <p className="lead">
              We're always looking for talented developers, designers and educators to join the CodeNeeti family.
            </p>
            <div className="actions">
              <a href="mailto:info@codeneeti.com?subject=Job%20Application" className="btn btn-primary btn-lg">
                Apply Now <FiArrowRight />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
