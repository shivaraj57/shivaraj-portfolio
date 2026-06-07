function Contact() {
  return (
   <section
  id="contact"
  className="section"
  data-aos="fade-up"
  data-aos-offset="300"
  data-aos-duration="10000"
>
      <h2>Contact Me</h2>

      <div className="contact-links">

        <a
          href="mailto:shivarajpm57@gmail.com"
          className="contact-card"
        >
          📧 Email
        </a>

        <a
          href="https://www.instagram.com/shivaraj._.p._.m._.5?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          📷 Instagram
        </a>

        <a
          href="#"
          className="contact-card"
        >
          💻 GitHub (Coming Soon)
        </a>

        <a
          href="#"
          className="contact-card"
        >
          💼 LinkedIn (Coming Soon)
        </a>

      </div>
    </section>
  );
}

export default Contact;