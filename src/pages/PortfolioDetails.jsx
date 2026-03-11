import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

function PortfolioDetails() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <p>Projet non trouvé.</p>;

  return (
    <section id="portfolio-details" className="portfolio-details section">
      <div className="container section-title" data-aos="fade-up">
        <h2>{project.title}</h2>
        <p>Détails techniques du projet</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-8">
            <img src={project.img} className="img-fluid rounded" alt={project.title} />
          </div>

          <div className="col-lg-4">
            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <ul>
                <li><strong>Catégorie :</strong> {project.category}</li>
                <li><strong>Technologies :</strong> {project.technologies}</li>
                <li><strong>Date :</strong> {project.date}</li>
                <li>
                  <strong>GitHub :</strong>{" "}
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    Voir le code
                  </a>
                </li>
              </ul>
            </div>

            <div className="portfolio-description">
              <h4>Description</h4>
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioDetails;