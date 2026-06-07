import { useState, useEffect, useRef } from "react";

function Stats() {
  const [projects, setProjects] = useState(0);
  const [skills, setSkills] = useState(0);
  const [passion, setPassion] = useState(0);

  const [started, setStarted] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.7,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let p = 0;
    let s = 0;
    let pa = 0;

    const interval = setInterval(() => {
      if (p < 3) {
        p++;
        setProjects(p);
      }

      if (s < 12) {
        s++;
        setSkills(s);
      }

      if (pa < 100) {
        pa += 2;
        setPassion(pa);
      }

      if (p >= 3 && s >= 12 && pa >= 100) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [started]);

  return (
    <section
      ref={sectionRef}
      className="section"
    >
      <div className="stats-container">

        <div
          className="stat-card"
          data-aos="zoom-in"
        >
          <h2>{projects}+</h2>
          <p>Projects</p>
        </div>

        <div
          className="stat-card"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <h2>{skills}+</h2>
          <p>Skills</p>
        </div>

        <div
          className="stat-card"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <h2>{passion}%</h2>
          <p>Passion</p>
        </div>

      </div>
    </section>
  );
}

export default Stats;