import profileImg from "../assets/img/profile-img.jpg";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skill({ name, value }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current >= value) {
        current = value;
        clearInterval(interval);
      }
      setProgress(current);
    }, 20);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="progress" data-aos="fade-right">
      <span className="skill">
        {name} <i className="val">{progress}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

function About() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <>
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>Junior developer with practical experience</p>
        </div>

        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4" data-aos="fade-right">
              <img src={profileImg} className="img-fluid" alt="Photo of Abdelkader Oussama" />
            </div>

            <div className="col-lg-8 content" data-aos="fade-left">
              <h2 data-aos="fade-up">ABDELKADER OUSSAMA</h2>
              <p className="fst-italic py-3" data-aos="fade-up" data-aos-delay="100">
                Computer Engineering student at FST Settat (Morocco). Passionate about new technologies and development of innovative solutions.
              </p>

              <div className="row">
                <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+222 47 18 57 63</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>oussamamedlemine167@gmail.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Nouakchott, Mauritania</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Languages:</strong> <span>Arabic, French, English</span></li>
                  </ul>
                </div>

                <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor's in Computer Engineering</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>University:</strong> <span>FST Settat - Morocco</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Systems:</strong> <span>Linux, Windows</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>

              <p className="py-3" data-aos="fade-up" data-aos-delay="400">
                My objective is to gain deep expertise in software development in order to design efficient projects adapted to current needs. Always motivated by continuous learning and new challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
          <p>Technical skills acquired during my academic journey</p>
        </div>

        <div className="container">
          <div className="row skills-content skills-animation">
            <div className="col-lg-6" data-aos="fade-right">
              <Skill name="Backend (Spring Boot / Node.js / Laravel)" value={70} />
              <Skill name="UI / UX (React / Bootstrap / Figma)" value={60} />
              <Skill name="Database (SQL / PL-SQL)" value={65} />
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <Skill name="Network Configuration (Cisco / Packet Tracer)" value={58} />
              <Skill name="Linux System (Bash)" value={40} />
              <Skill name="Java Desktop (Swing / Java EE, Eclipse)" value={63} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;