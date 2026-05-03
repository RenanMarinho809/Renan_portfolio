import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Frontend Developer
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Especializado em React e Next.js, focado em criar aplicações modernas, performáticas e escaláveis.
        </motion.p>
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Desenvolvo soluções completas do front-end, transformando ideias em produtos funcionais com foco em experiência do usuário e boas práticas de desenvolvimento.
        </motion.p>
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#projetos" className="btn-primary">Ver Projetos</a>
          <a href="#contato" className="btn-secondary">Entrar em Contato</a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
