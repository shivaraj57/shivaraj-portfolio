function Skills() {

  const skills = [
    "Python",
    "C",
    "C++",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Arduino",
    "8051",
    "ESP32",
    "IoT",
    "Machine Learning"
  ];

  return (
  <section
  id="skills"
  className="section"
>
      <h2>Skills</h2>

      <div className="grid">

       {skills.map((skill,index)=>(
  <div
    className="card"
    key={index}
    data-aos="zoom-in"
    data-aos-delay={index * 100}
  >
    {skill}
  </div>
))}

      </div>

    </section>
  );
}

export default Skills;