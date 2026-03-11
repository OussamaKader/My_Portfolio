import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    AOS.refresh();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("subject", formData.subject);
    data.append("message", formData.message);

    try {
      const response = await fetch("https://formspree.io/f/mojnzolw", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (response.ok) {
        setFormMessage(<p className="text-success">Your message has been sent successfully!</p>);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormMessage(<p className="text-danger">Error sending the message. Please try again.</p>);
      }
    } catch (error) {
      setFormMessage(<p className="text-danger">Network error. Please check your connection.</p>);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>You can contact me directly using the form below or through my contact information.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Settat, Morocco</p>
                </div>
              </div>
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Phone</h3>
                  <p>+222 47 18 57 63</p>
                </div>
              </div>
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email</h3>
                  <p>oussamamedlemine167@gmail.com</p>
                </div>
              </div>
              <iframe
                title="FST Settat Map"
                src="https://www.google.com/maps?q=FST%20Settat&output=embed"
                style={{ border: 0, width: "100%", height: "270px" }}
                allowFullScreen
                loading="lazy"
                data-aos="fade-up"
                data-aos-delay="500"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="row gy-4">
                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <input type="email" name="email" className="form-control" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="col-md-12">
                  <input type="text" name="subject" className="form-control" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className="col-md-12">
                  <textarea name="message" className="form-control" rows="6" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <button type="submit" className="btn btn-primary w-100">Send Message</button>
                </div>
                <div className="mt-3 text-center">{formMessage}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;