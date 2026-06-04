import { useState } from "react";
import "./PageHero.css";
import "./Extra.css";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to backend / email service
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
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
            {/* Info Side */}
            <div className="contact-info">
              <h2 style={{ fontFamily: "var(--font-head)", fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                Let's Build Something <span style={{ color: "var(--accent)" }}>Together</span>
              </h2>
              <div className="divider" />
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
                Whether you need a website, mobile app, or want to learn development — our team is ready to help. Reach out and we'll get back to you within 24 hours.
              </p>

              {[
                { icon: "📧", label: "Email",    value: "info@codeneeti.com" },
                { icon: "📞", label: "Phone",    value: "+91 XXXXX XXXXX" },
                { icon: "📍", label: "Location", value: "Your City, India" },
                { icon: "⏰", label: "Hours",    value: "Mon–Sat, 9AM – 7PM" },
              ].map((c) => (
                <div className="contact-detail" key={c.label}>
                  <span className="contact-icon">{c.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.78rem", color: "var(--accent)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{c.label}</div>
                    <div style={{ fontSize: "0.95rem" }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form Side */}
            <div className="card contact-form-card">
              {submitted && (
                <div className="success-msg">
                  ✅ Message sent! We'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text" name="name" value={form.name}
                      onChange={handleChange} placeholder="John Doe" required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email" name="email" value={form.email}
                      onChange={handleChange} placeholder="john@email.com" required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text" name="subject" value={form.subject}
                    onChange={handleChange} placeholder="Project inquiry / Training enrollment" required
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message" value={form.message}
                    onChange={handleChange} rows={5}
                    placeholder="Tell us about your project or query..." required
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Send Message ➜
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
