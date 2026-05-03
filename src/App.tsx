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
      "O PrimeFlix é um site desenvolvido em React que permite aos usuários visualizar, salvar e gerenciar filmes e séries utilizando dados da API do IMDB. O projeto foi criado com foco em aprendizado, organização de favoritos e boa experiência do usuário ",
    tags: ["React", "CSS", "JavaScript"],
    deployLink: "https://primeflix-drab.vercel.app/",
    repoLink: "https://github.com/RenanMarinho809/primeflix",
    image: "/IMG/primeflix.png",
  },
  {
    title: "WebCarros",
    description:
      "O WebCarros é uma aplicação web desenvolvida em React para divulgação e gerenciamento de anúncios de carros. O projeto utiliza tecnologias modernas para garantir performance, segurança e uma ótima experiência do usuário",
    tags: ["React", "tailwindcss", "Firebase"],
    deployLink: "https://web-carros-eta.vercel.app/",
    repoLink: "https://github.com/RenanMarinho809/web-carros",
    image: "/IMG/web-carros.png",
  },
  {
    title: "Watch Store",
    description:
      "A Watch Store é uma aplicação de e-commerce desenvolvida com Next.js, focada na venda de relógios modernos e clássicos. A plataforma oferece uma experiência rápida e intuitiva, com navegação otimizada, páginas renderizadas de forma eficiente (SSR e SSG) e excelente desempenho. Os usuários podem visualizar catálogos de produtos, acessar detalhes dos relógios, adicionar itens ao carrinho e realizar compras de forma simples e segura",
    tags: ["Next.js", "tailwindcss", "MongoDB"],
    deployLink: "https://watch-store-kappa.vercel.app/",
    repoLink: "https://github.com/RenanMarinho809/watch-store",
    image: "/IMG/watchstore.png",
  },
  {
    title: "Tarefas Plus",
    description:
      "Este projeto consiste no desenvolvimento de uma aplicação de lista de tarefas (To-Do List) utilizando Next.js como framework principal, Firebase como backend e Firestore como banco de dados em tempo real. Além disso, a autenticação de usuários é feita com NextAuth, permitindo login seguro via Google (Gmail)",
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
