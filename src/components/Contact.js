import { FaDownload } from 'react-icons/fa';


const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Let's Connect</h2>
      <p className="contact-subtitle">Feel free to reach out to me anytime!</p>

      <div className="contact-info">
        <p><strong>Email:</strong> <a href="mailto:maharjankresa@gmail.com">maharjankresa@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+9779869489860">+977 9869489860</a></p>
        <p> <a href="/KrishaMaharjan.pdf" download className="download-btn"> <FaDownload /> Download My Resume</a></p>

      </div>
    </section>
  );
};

export default Contact;
