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
          <img src="/IMG/20br.png" alt="Renan Marinho" />
        </motion.div>
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Sobre Mim</h2>
          <p>
            Sou desenvolvedor frontend com foco em React e Next.js, criando aplicações modernas, responsivas e bem estruturadas. Tenho experiência no desenvolvimento de interfaces dinâmicas, integração com APIs e construção de fluxos completos de autenticação e gerenciamento de estado.
          </p>
          <p style={{ marginTop: "1.5rem" }}>
            Busco constantemente evoluir minhas habilidades técnicas e construir projetos que simulem cenários reais de mercado, aplicando boas práticas de código, organização e performance.
          </p>
          <p style={{ marginTop: "1.5rem" }}>
            Atualmente estou em busca de uma oportunidade como Desenvolvedor Frontend Júnior, onde eu possa contribuir com o time e continuar evoluindo profissionalmente.
          </p>
          <a
            href="/doc/curriculo.pdf"
            download="curriculo.pdf"
            className="btn-cv"
          >
            Baixar Currículo
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
