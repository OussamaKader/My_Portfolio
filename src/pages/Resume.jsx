import amamEvent from '../assets/img/amam-event.jpg';
import cesamEvent from '../assets/img/cesam-event.jpg';

function Resume() {
  return (
    <section id="resume" className="resume section" >
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>Academic background and personal experiences</p>
      </div>

      <div className="container">
        <div className="row">
          {/* LEFT COLUMN */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>

            <div className="resume-item pb-0" data-aos="fade-right">
              <h4>ABDELKADER OUSSAMA</h4>
              <p>
                <em>
                  Computer Engineering student at FST Settat,
                  passionate about software development, networking, and system administration.
                  Curious, disciplined, and motivated by continuous learning.
                </em>
              </p>
              <ul>
                <li>Nouakchott, Mauritania</li>
                <li>+222 47185763</li>
                <li>oussamamedlemine167@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>

            <div className="resume-item" data-aos="fade-right">
              <h4>Bachelor’s Degree in Computer Engineering</h4>
              <h5>2024 - 2025</h5>
              <p><em>FST Settat - Morocco</em></p>
            </div>

            <div className="resume-item" data-aos="fade-left">
              <h4>DEUST in GEGM (Electrical & Mechanical Engineering)</h4>
              <h5>2023 - 2024</h5>
              <p><em>FST Settat - Morocco</em></p>
            </div>

            <div className="resume-item" data-aos="fade-right">
              <h4>TMGM High School Diploma</h4>
              <h5>2021 - 2022</h5>
              <p><em>Technical High School - Nouakchott, Mauritania</em></p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Technical Skills</h3>

            <div className="resume-item" data-aos="fade-right">
              <h4>Web Development</h4>
              <ul>
                <li>React, Vue.js</li>
                <li>Spring Boot, Laravel</li>
                <li>SQL, PL/SQL</li>
              </ul>
            </div>

            <div className="resume-item" data-aos="fade-left">
              <h4>Mobile Development</h4>
              <ul>
                <li>Flutter</li>
              </ul>
            </div>

            <div className="resume-item" data-aos="fade-right">
              <h4>Systems & Networking</h4>
              <ul>
                <li>Linux & Windows</li>
                <li>Network Configuration</li>
                <li>Linux Administration</li>
              </ul>
            </div>

            <div className="resume-item" data-aos="fade-left">
              <h4>Low-Level Programming</h4>
              <ul>
                <li>Assembly Language</li>
              </ul>
            </div>

            <h3 className="resume-title">Personal Experience</h3>

            <div className="resume-item" data-aos="fade-right">
              <h4>
                Board Member – <a href="https://cesamcentrale.org/qui-sommes-nous/" target="_blank" rel="noopener noreferrer">
                  Confederation of African and Foreign Students, Interns, and Pupils in Morocco (Settat)
                </a>
              </h4>
              <div className="experience-info">
                <img src={cesamEvent} alt="CESAM Event" className="img-fluid mt-2" style={{ maxWidth: '80px', height: 'auto' }} />
                <h5>2023 - 2024</h5>
              </div>
            </div>

            <div className="resume-item" data-aos="fade-left">
              <h4>
                Secretary General – <a href="https://www.facebook.com/share/g/1HiGsiZ2gy/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                  Association of Mauritanian Students in Morocco (Settat)
                </a>
              </h4>
              <div className="experience-info">
                <h5>2023 - 2024</h5>
                <img src={amamEvent} alt="AMAM Event" className="img-fluid mt-1" style={{ maxWidth: '50px', height: 'auto' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default Resume;