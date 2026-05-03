import { motion } from "framer-motion";

function About() {
  return (
    <section id="sobre" className="about-section">
      <div className="about-content">
        <motion.div
          className="about-photo"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src="/IMG/20br.png" alt="Bruno Oliveira" />
        </motion.div>
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Sobre</h2>
          <p>
            Sou programador Full Stack apaixonado por tecnologia e
            desenvolvimento de soluções escaláveis e eficientes. Minha principal
            stack é baseada em JavaScript e TypeScript, com forte experiência em
            desenvolvimento de aplicações modernas e performáticas.
          </p>
          <a
            href="/doc/Renan_curriculo.pdf"
            download="Renan_curriculo.pdf"
            className="btn-cv"
          >
            Baixar Curriculo
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
