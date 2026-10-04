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
            Sou desenvolvedor frontend com foco em React e Next.js, especializado na criação de interfaces modernas, responsivas e bem estruturadas. Tenho experiência em desenvolvimento de experiências digitais dinâmicas, integração com APIs e implementação de fluxos de autenticação e gerenciamento de estado.
          </p>
          <p style={{ marginTop: "1.5rem" }}>
            Busco constantemente aprimorar minhas habilidades técnicas e entregar soluções alinhadas às necessidades do negócio, com atenção a qualidade de código, organização e performance.
          </p>
          <p style={{ marginTop: "1.5rem" }}>
            Atualmente estou em busca de uma oportunidade como Desenvolvedor Frontend, para contribuir com times de tecnologia e continuar evoluindo em projetos desafiadores e de alto impacto.
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
