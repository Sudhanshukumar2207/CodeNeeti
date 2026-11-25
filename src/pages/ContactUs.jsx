import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Reveal, PageHero } from "../components/ui";

const config = {
  contact: {
    form: {
      name: "",
      email: "",
      mobile: "",
      subject: "",
      message: "",
    },
  },
  html: {
    fullName: "CodeNeeti",
    email: "contact@codeneeti.in",
  },
};

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const TOPICS = ["Website", "Mobile App", "AI Automation", "SEO / Marketing", "Training"];

const DETAILS = [
  { icon: <FiMail />,    label: "Email",    value: config.html.email,  link: `mailto:${config.html.email}` },
  { icon: <FiPhone />,   label: "Phone",    value: "+91 96615 42794",  link: "tel:+919661542794" },
  { icon: <FiMapPin />,  label: "Location", value: "Rajapur Pul, Patna, Bihar" },
  { icon: <FiClock />,   label: "Hours",    value: "Mon–Sat, 9 AM – 7 PM" },
];

export default function ContactUs() {
  const formRef = useRef();
  const [form, setForm] = useState(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    if (!e) return;
    const { name, value } = e.target;
    const updatedValue = name === "mobile"
      ? value.replace(/\D/g, "")
      : name === "name"
      ? value.replace(/[^a-zA-Z\s]/g, "")
      : value;
    setForm({ ...form, [name]: updatedValue });
  };

  const pickTopic = (topic) => setForm({ ...form, subject: `${topic} enquiry` });

  const openMailClient = () => {
    const body = `Name: ${form.name}\nEmail: ${form.email}\nMo No: ${form.mobile}\nSubject: ${form.subject}\n\n${form.message}`;
    const mailtoLink = `mailto:${config.html.email}?subject=${encodeURIComponent(
      form.subject || `New inquiry from ${config.html.fullName}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  const handleSubmit = (e) => {
    if (!e) return;
    e.preventDefault();

    if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.accessToken) {
      openMailClient();
      return;
    }

    setLoading(true);

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          to_name: config.html.fullName,
          from_name: form.name,
          from_email: form.email,
          mo_no: form.mobile,
          subject: form.subject,
          message: form.message,
        },
        emailjsConfig.accessToken
      )
      .then(
        () => {
          setLoading(false);
          setSubmitted(true);
          setForm(INITIAL_STATE);
          setTimeout(() => setSubmitted(false), 6000);
        },
        (error) => {
          setLoading(false);
          console.log(error);
          openMailClient();
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact CodeNeeti | Free Consultation</title>
        <meta
          name="description"
          content="Contact CodeNeeti for website development, app development, AI automation and training services."
        />
      </Helmet>

      <PageHero
        crumb="Contact"
        eyebrow="Get in touch"
        title={<>Let's build something <span className="grad-text">together</span></>}
        desc="Have a project in mind or want to enroll in our training? Tell us a little about it and we'll get back to you within 24 hours."
      />

      <section className="section">
        <div className="container contact-layout">
          {/* Info column */}
          <Reveal className="contact-info">
            <h2 className="h3" style={{ fontSize: "1.5rem" }}>Talk to us directly</h2>
            <p className="muted" style={{ marginBottom: "1.75rem" }}>
              Prefer a quick chat? Call or message us on WhatsApp. We're happy to answer any question.
            </p>

            <div className="contact-list">
              {DETAILS.map((c) => {
                const inner = (
                  <>
                    <span className="contact-icon">{c.icon}</span>
                    <span>
                      <span className="contact-label">{c.label}</span>
                      <span className="contact-value">{c.value}</span>
                    </span>
                  </>
                );
                return c.link
                  ? <a key={c.label} href={c.link} className="contact-item">{inner}</a>
                  : <div key={c.label} className="contact-item">{inner}</div>;
              })}
            </div>

            <a
              href="https://wa.me/919661542794"
              target="_blank"
              rel="noopener noreferrer"
              className="btn wa-btn"
            >
              <FaWhatsapp size={20} /> Chat on WhatsApp
            </a>
          </Reveal>

          {/* Form column */}
          <Reveal delay={0.1} className="card form-card">
            {submitted ? (
              <div className="form-success">
                <FiCheckCircle size={44} />
                <h3 className="h3" style={{ fontSize: "1.4rem" }}>Message sent!</h3>
                <p>Thank you for reaching out. We'll get back to you as soon as possible.</p>
                <button className="btn btn-ghost" onClick={() => setSubmitted(false)}>Send another message</button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div>
                  <span className="field-label">I'm interested in</span>
                  <div className="topic-row">
                    {TOPICS.map((t) => (
                      <button
                        type="button"
                        key={t}
                        className={`topic ${form.subject === `${t} enquiry` ? "active" : ""}`}
                        onClick={() => pickTopic(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-row">
                  <label className="field">
                    <span className="field-label">Full name</span>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Rahul Kumar"
                      inputMode="text"
                      pattern="[A-Za-z ]+"
                      maxLength={40}
                      autoComplete="name"
                      required
                    />
                  </label>
                  <label className="field">
                    <span className="field-label">Email address</span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      autoComplete="email"
                      required
                    />
                  </label>
                </div>
                <div className="form-row">
                  <label className="field">
                    <span className="field-label">Mobile number</span>
                    <input
                      type="tel"
                      name="mobile"
                      value={form.mobile}
                      onChange={handleChange}
                      placeholder="10-digit number"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={10}
                      autoComplete="tel"
                      required
                    />
                  </label>
                  <label className="field">
                    <span className="field-label">Subject</span>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry / Training"
                      required
                    />
                  </label>
                </div>
                <label className="field">
                  <span className="field-label">Message</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project or query…"
                    required
                  />
                </label>
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }} disabled={loading}>
                  {loading ? "Sending…" : <>Send message <FiSend /></>}
                </button>
                <p className="form-note">We respect your privacy. Your details are only used to reply to you.</p>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
