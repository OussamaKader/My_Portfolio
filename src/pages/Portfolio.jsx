import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Portfolio() {
  // Refresh AOS when the projects array changes
  useEffect(() => {
    AOS.refresh();
  }, [projects]);

  return (
    <section id="portfolio" className="portfolio section">
      {/* Section title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>My Projects</h2>
        <p>Some projects I have completed in web and application development</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="col-lg-4 col-md-6"
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
              data-aos-delay={index * 100}
            >
              <div className="portfolio-item">
                <img
                  src={project.img}
                  className="img-fluid"
                  alt={project.title}
                />
                <div className="portfolio-info">
                  <h4>{project.title}</h4>
                  <p>{project.category}</p>
                  <Link
                    to={`/portfolio-details/${project.id}`}
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;