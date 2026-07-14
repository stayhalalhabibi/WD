import "./Contact.css";

function Contact() {
  return (
    <section className="contact">

      <div className="contact-container">

        <div className="contact-info">

          <h1>Contact Us</h1>

          <p>
            Have questions or suggestions?
            We'd love to hear from you.
          </p>

          <div className="info-box">

            <h3>📧 Email</h3>

            <p>support@cancervision.ai</p>

          </div>

          <div className="info-box">

            <h3>📞 Phone</h3>

            <p>+91 98765 43210</p>

          </div>

          <div className="info-box">

            <h3>📍 Address</h3>

            <p>New Delhi, India</p>

          </div>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button>
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;