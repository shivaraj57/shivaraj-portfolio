import profile from "../assets/myphoto.jpg";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="hero">


     <div className="hero-top">

  <div
    className="profile-container"
    onMouseMove={(e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / centerX) * 15;
      const rotateX = ((centerY - y) / centerY) * 15;

      card.style.transform = `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.05)`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    }}
  >
    <img
      src={profile}
      alt="Profile"
      className="profile"
    />
  </div>

  <div className="hero-text-side">
    <h1 className="brush-name">
      SHIVARAJ
    </h1>
    
  </div>

</div>
      
    

      <p className="tag">
        WELCOME TO MY PORTFOLIO
      </p>

      <div className="signature">
        Hi, I'm
      </div>

    <h1
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x - rect.width / 2) / rect.width) * 30;
    const rotateX = ((rect.height / 2 - y) / rect.height) * 30;

    e.currentTarget.style.transform =
      `perspective(1000px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       scale(1.05)`;
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  }}
>
  <span>SHIVARAJ PM</span>
</h1>

      <TypeAnimation
        sequence={[
          "ECE Student", 3000,
          "Embedded Systems Developer", 3000,
          "AI & ML Enthusiast", 3000,
          "IoT Innovator", 3000,
          "Web Developer", 3000,
        ]}
        speed={50}
        wrapper="h2"
        repeat={Infinity}
      />

      <p className="desc">
        Passionate about Embedded Systems,
        IoT, Artificial Intelligence,
        Machine Learning and Web Development.
      </p>

      <div className="buttons">
        <a href="#projects" className="primary-btn">
          View Projects
        </a>

        <button className="secondary-btn">
          Download Resume
        </button>

        <div className="socials">
          <a href="https://github.com/">GitHub</a>
          <a href="https://linkedin.com/">LinkedIn</a>
          <a href="https://instagram.com/">Instagram</a>
        </div>
      </div>

    </section>
  );
}

export default Hero;