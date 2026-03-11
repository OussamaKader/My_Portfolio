import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact"); // Redirect to contact page
  };

  useEffect(() => {
    AOS.refresh();
  }, []);

  const serviceData = [
    {
      icon: "bi-globe",
      title: "Website Development",
      desc: "Designing and developing modern websites for clients and small businesses.",
      delay: 100,
      color: "cyan",
    },
    {
      icon: "bi-phone",
      title: "Mobile App Development",
      desc: "Creating mobile applications for Android and iOS tailored to client needs.",
      delay: 200,
      color: "orange",
    },
    {
      icon: "bi-database",
      title: "Database Solutions",
      desc: "Design and implementation of relational databases using SQL and PL/SQL for businesses.",
      delay: 300,
      color: "teal",
    },
    {
      icon: "bi-laptop",
      title: "Web Development Training",
      desc: "Training students on creating and deploying websites using modern technologies.",
      delay: 400,
      color: "red",
    },
    {
      icon: "bi-phone-fill",
      title: "Mobile App Training",
      desc: "Teaching students to develop mobile apps using Flutter with practical exercises.",
      delay: 500,
      color: "indigo",
    },
    {
      icon: "bi-journal-text",
      title: "Database Training",
      desc: "SQL and PL/SQL training for students to learn database design, queries, and optimization.",
      delay: 600,
      color: "pink",
    },
  ];

  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>My Services</h2>
        <p>Solutions for clients and training for students in web, mobile, and databases</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
              data-aos-delay={service.delay}
            >
              <div
                className={`service-item item-${service.color} position-relative`}
                onClick={handleClick}
                style={{ cursor: "pointer" }}
              >
                <div className="icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;