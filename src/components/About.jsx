function About() {
  return (
<section
  id="about"
  className="section"
  data-aos="fade-up"
  data-aos-offset="300"
>
  <h2>About Me</h2>

  <pre
  className="code-box"
  onMouseMove={(e) => {
    const box = e.currentTarget;
    const rect = box.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    box.style.setProperty("--x", `${x}px`);
    box.style.setProperty("--y", `${y}px`);
  }}
>
{`#include <stdio.h>

int main() {

    char name[] = "Shivaraj PM";
    char role[] = "ECE Student";

    char university[] =
    "JSS Science and Technology University";

    char interests[] =
    "Embedded Systems, IoT, AI/ML, Web Development";

    return 0;
}`}
  </pre>
</section>
  );
}

export default About;