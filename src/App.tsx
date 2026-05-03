import "./App.css";
import React, { useState } from "react";
import type { Project } from "./types";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Techs from "./components/Techs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const allProjects: Project[] = [
  {
    title: "Primeflix",
    description:
      "Aplicação web completa para visualização e gerenciamento de filmes e séries, consumindo dados de API externa. Integração com API do TMDB, sistema de favoritos e interface moderna e responsiva.",
    tags: ["React", "CSS", "JavaScript"],
    deployLink: "https://primeflix-drab.vercel.app/",
    repoLink: "https://github.com/RenanMarinho809/primeflix",
    image: "/IMG/primeflix.png",
  },
  {
    title: "WebCarros",
    description:
      "Plataforma de anúncios de carros com autenticação, CRUD completo e banco de dados em tempo real. Desenvolvido com React, Tailwind CSS e Firebase, garantindo performance e segurança.",
    tags: ["React", "Tailwind CSS", "Firebase"],
    deployLink: "https://web-carros-eta.vercel.app/",
    repoLink: "https://github.com/RenanMarinho809/web-carros",
    image: "/IMG/web-carros.png",
  },
  {
    title: "Watch Store",
    description:
      "E-commerce completo com Next.js, Tailwind CSS e MongoDB. Inclui SSR/SSG, carrinho de compras e interface otimizada para experiência do usuário.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB"],
    deployLink: "https://watch-store-kappa.vercel.app/",
    repoLink: "https://github.com/RenanMarinho809/watch-store",
    image: "/IMG/watchstore.png",
  },
  {
    title: "Tarefas Plus",
    description:
      "Aplicação de gerenciamento de tarefas com autenticação via Google, banco de dados em tempo real e interface intuitiva. Desenvolvido com Next.js, Firebase e NextAuth.",
    tags: ["Next.js", "Firebase", "NextAuth"],
    deployLink: "https://tarefas-plus-liard.vercel.app/",
    repoLink: "https://github.com/RenanMarinho809/tarefas_plus",
    image: "/IMG/tarefasplus.png",
  },
];

const INITIAL_PROJECTS_VISIBLE = 3;

function App(): React.ReactElement {
  const [visibleProjects, setVisibleProjects] = useState(
    INITIAL_PROJECTS_VISIBLE
  );

  const handleLoadMore = () => {
    setVisibleProjects((prevVisible) => prevVisible + 6);
  };

  const projectsToShow = allProjects.slice(0, visibleProjects);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects projects={projectsToShow} />

        {visibleProjects < allProjects.length && (
          <div className="load-more-container">
            <button onClick={handleLoadMore} className="btn-load-more">
              Ver mais projetos
            </button>
          </div>
        )}

        <About />
        <Techs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
