import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./PageHero.css";
import "./Extra.css";

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
    email: "contact@codeneeti.com",
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
          setTimeout(() => setSubmitted(false), 4000);
        },
        (error) => {
          setLoading(false);
          console.log(error);
          openMailClient();
        }
      );
  };

  return (
    <div>
      <section className="page-hero">
        <div className="page-hero-orb" />
        <div className="page-hero-content">
          <div className="section-tag">Get In Touch</div>
          <h1 className="section-title">Contact <span>Us</span></h1>
          <p className="section-desc">
            Have a project in mind or want to enroll in our training? We'd love to hear from you!
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="contact-layout">
            <div className="contact-info">
              <h2 style={{ fontFamily: "var(--font-head)", fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                Let's Build Something <span style={{ color: "var(--accent)" }}>Together</span>
              </h2>
              <div className="divider" />
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
                Whether you need a website, mobile app, or want to learn development — our team is ready to help. Reach out and we'll get back to you within 24 hours.
              </p>

              {[
                { icon: "📨", label: "Email", value: config.html.email, link: `mailto:${config.html.email}` },
                { icon: "📞", label: "Phone", value: "+91 9661542794", link: "tel:+919661542794" },
                { icon: "📍", label: "Location", value: "Your City, India" },
                { icon: "⏰", label: "Hours", value: "Mon–Sat, 9AM – 7PM" },
              ].map((c) => (
                <div className="contact-detail" key={c.label}>
                  <span className="contact-icon">{c.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.78rem", color: "var(--accent)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{c.label}</div>
                    <div style={{ fontSize: "0.95rem" }}>
                      {c.link ? (
                        <a href={c.link} style={{ color: "inherit", textDecoration: "none" }}>{c.value}</a>
                      ) : c.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card contact-form-card">
              {submitted && (
                <div className="success-msg">
                  ✅ Thank you. I will get back to you as soon as possible.
                </div>
              )}
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      inputMode="text"
                      pattern="[A-Za-z ]+"
                      maxLength={40}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Mobile Number</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={form.mobile}
                      onChange={handleChange}
                      placeholder="9661542794"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={10}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry / Training enrollment"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project or query..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center", cursor: loading ? "not-allowed" : "pointer" }}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message ➜"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
