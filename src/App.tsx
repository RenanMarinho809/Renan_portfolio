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
    title: "AutoFinder",
    description:
      "Aplicação web para pesquisa e visualização de veículos, com foco em usabilidade e organização de dados.",
    tags: ["React.js"," TypeScript", "CSS"],
    deployLink: "https://auto-finder-jj84ziloy-renanmarinho809s-projects.vercel.app",
    repoLink: "https://github.com/RenanMarinho809/AutoFinder",
    image: "/IMG/Autofinder.png",
  },
  {
    title: "AI Study Planner ",
    description:
      "Aplicação web para geração de planos de estudo personalizados com base em inteligência artificial.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB"],
    deployLink: "https://ai-study-planner-alpha-one.vercel.app",
    repoLink: "https://github.com/RenanMarinho809/ai-study-planner",
    image: "/IMG/Aistudyplanner.png",
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
   {
    title: "Bikcraft",
    description:
      "Bikcraft é uma landing page moderna e elegante para uma empresa de bicicletas personalizadas. O projeto foi desenvolvido utilizando HTML5, CSS3 e SASS (SCSS), seguindo as melhores práticas de desenvolvimento web com design responsivo e animações suaves.",
    tags: ["HTML", "CSS", "SASS"],
    deployLink: "https://bikcraft-rust.vercel.app",
    repoLink: "https://github.com/RenanMarinho809/bikcraft",
    image: "/IMG/bikecraft.png",
  },
   {
    title: "Caravan",
    description:
      "O Projeto Caravan é uma aplicação web desenvolvida com HTML, CSS e Bootstrap, criada para facilitar o gerenciamento de reservas de caravanas em parques de campismo. O foco do projeto é oferecer uma experiência simples, intuitiva e eficiente para os usuários.",
    tags: ["HTML", "CSS", "Bootstrap"],
    deployLink: "https://caravan-boostrap.vercel.app",
    repoLink: "https://github.com/RenanMarinho809/Caravan_Boostrap",
    image: "/IMG/Caravan.png",
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
