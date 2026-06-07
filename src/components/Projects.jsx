function Projects() {
  return (
   <section
  id="projects"
  className="section"
  data-aos="fade-left"
  data-aos-offset="300"
>
      <h2>Projects</h2>

      <div className="grid">

       <div
  className="card"
  data-aos="fade-right"
  data-aos-delay="100"
>
  <h3>Email & SMS Spam Detector</h3>

  <p>
    Machine Learning application that detects
    spam messages using Python, Streamlit,
    CountVectorizer and Naive Bayes.
  </p>

  <a
    href="https://spamdetector-54bgtgmx48rn9yfhvgkrbo.streamlit.app/"
    target="_blank"
    rel="noopener noreferrer"
  >
    🔗 Live Demo
  </a>
</div>

       <div
  className="card"
  data-aos="fade-up"
  data-aos-delay="300"
>
          <h3>Multi Purpose Agriculture Robot</h3>

          <p>
            Smart agriculture robot designed for
            monitoring and automation in farming.
          </p>
        </div>

        <div
  className="card"
  data-aos="fade-left"
  data-aos-delay="500"
>
          <h3>PLL Frequency Synthesis</h3>

          <p>
            Communication Systems project using
            Phase Locked Loop for frequency generation.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Projects;