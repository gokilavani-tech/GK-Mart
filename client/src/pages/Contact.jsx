import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-container">

        <h1>Contact Us</h1>

        <p className="contact-subtitle">
          We'd love to hear from you. Feel free to contact us anytime.
        </p>

        <div className="contact-grid">

          <div className="contact-info">

            <div className="info-card">
              <h2>📍 Address</h2>
              <p>
                GK Mart,
                <br />
                Chennai,
                <br />
                Tamil Nadu, India
              </p>
            </div>

            <div className="info-card">
              <h2>📞 Phone</h2>
              <p>+91 98765 43210</p>
            </div>

            <div className="info-card">
              <h2>📧 Email</h2>
              <p>support@gkmart.com</p>
            </div>

            <div className="info-card">
              <h2>🕒 Working Hours</h2>
              <p>
                Monday - Saturday
                <br />
                9:00 AM - 8:00 PM
              </p>
            </div>

          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              placeholder="Subject"
              required
            />

            <textarea
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;