import { Link } from "react-router-dom";
import heroBg from "../assets/img/image copy 9.png"; // adapte le chemin si nécessaire

function Hero() {
  return (
    <section id="hero" className="hero section">

      <img src={heroBg} alt="" data-aos="fade-in" />

      <div className="container text-center" data-aos="zoom-out" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2>ABDELKADER OUSSAMA</h2>
            <p>Full Stack Developer</p>

            <Link to="/about" className="btn-get-started">
              About Me
            </Link>

          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;