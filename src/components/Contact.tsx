import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contato" className="contact-section">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Contato</h2>
        <p>Me mande um e-mail:renanmarinho809@gmail.com</p>
        <div className="social-links">
          <a
            href="https://whatsa.me/5583993965970/?t=Ol%C3%A1!%20%F0%9F%91%8B%20Eu%20sou%20o%20Renan%20Marinho%20e%20estou%20aqui%20para%20te%20ajudar.%20Como%20posso%20te%20auxiliar%20hoje?"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn whatsapp"
          >
            <i className="fa-brands fa-whatsapp"></i> WhatsApp
          </a>
          <a
            href="https://github.com/RenanMarinho809"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn github"
          >
            <i className="fa-brands fa-github"></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/renanmarinho809/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn linkedin"
          >
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
