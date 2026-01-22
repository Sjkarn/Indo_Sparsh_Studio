// export default function Contact() {
//   return <h1>Contact Page</h1>;
// }

import "./Contact.css";
import { useState } from "react";
import AIChatWidget from "./AIChatWidget";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // simulate API call
    setTimeout(() => {
      setSuccess(true);

      // auto hide after 3s
      setTimeout(() => setSuccess(false), 3000);
    }, 800);
  };
  return (
    <section className="contact-section">
      {/* Header */}
      <div className="contact-header">
        <h1>
          Contact <span>Us</span>
        </h1>
        <p>
          Feel free to contact us with any questions or concerns. You can use
          the form below or email us directly. We appreciate your interest and
          look forward to hearing from you.
        </p>
      </div>

      {/* Form Card */}
      <div className="contact-card">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Name *</label>
              <input type="text" placeholder="Your name" />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Your last name" />
            </div>
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input type="email" placeholder="Your email address" />
          </div>

          <div className="form-group">
            <label>Message *</label>
            <textarea placeholder="Write your message..."></textarea>
          </div>

          <button className="contact-btn">Send Message</button>
        </form>
        {/* SUCCESS OVERLAY */}
        {success && (
          <div className="success-overlay">
            <div className="success-box">
              <div className="success-check">✓</div>
              <h2>Message Sent</h2>
              <p>We’ll get back to you very soon.</p>
            </div>
          </div>
        )}
      </div>

      <div className="info-card">
        <h2>Contacts</h2>
        <p className="info-highlight">contact@indosparsh.com</p>
        <p>+91 80053 51770</p>
      </div>

      <div className="info-card">
        <h2>Address</h2>
        <p>
          Incuspaze, 11th Floor Rohtas Summit, Vibhuti Khand, Gomtinagar,
          Lucknow – 226010, Uttar Pradesh, India
        </p>
      </div>

      <div className="info-card">
        <h2>Opening Hours</h2>
        <p>
          Monday – Saturday: <span>10:00 AM – 5:00 PM</span>
        </p>
        <p>
          Sunday: <span className="closed">Closed</span>
        </p>
      </div>

      {/* MAP CARD */}
      <div className="map-card">
        <iframe
          title="Indo Sparsh Studio Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47368.58728462816!2d-72.489639!3d42.095975!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6e9e097eeecb1%3A0x887f2b47a3a2e8d2!2sExcel-Experts!5e0!3m2!1sen!2sus!4v1768910734535!5m2!1sen!2sus"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <AIChatWidget />
      <SocialLinks />
    </section>
  );
}
