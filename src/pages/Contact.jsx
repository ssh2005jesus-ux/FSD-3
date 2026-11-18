
function Contact() {
  return (
    <div className="contact-page">

      <h1>Contact Us</h1>

      <p className="contact-subtitle">
        We'd love to hear from you!
      </p>

      <h2>Get In Touch</h2>

      <p>
        If you have any questions, suggestions or need help,
        feel free to contact us.
      </p>

      <div className="contact-cards">

        <div className="contact-card">
          <h3>📧 Email</h3>
          <p>studentdashboard@gmail.com</p>
        </div>

        <div className="contact-card">
          <h3> Phone</h3>
          <p>+91 98765 43210</p>
        </div>

        <div className="contact-card">
          <h3> Location</h3>
          <p>Chennai, Tamil Nadu</p>
        </div>

      </div>

      <div className="contact-message">
        <h2>Have a Question?</h2>
        <p>
          Feel free to reach out to us. We are happy to help
          you with your queries.
        </p>
      </div>

    </div>
  );
}

export default Contact;