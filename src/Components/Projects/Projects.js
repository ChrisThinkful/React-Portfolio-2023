import React from "react";
import ProjectCard from "./ProjectCard";
import items from "../../Data/Projects";

const Projects = ({ id }) => {
  return (
    <section id={id} className="project-section offset">
      <article className="projects-content">
        <h2 className="section-title">Projects</h2>
        <p className="disclaimer">
          ** I am currently working on an e-commerce app more in-line with my current skillset, which is not accurately represented by these old projects below.
        </p>
        <div className="project-cards">
          {items &&
            items.map((item, i) => (
              <ProjectCard key={i} item={item} className="project-card" />
            ))}
        </div>
      </article>
    </section>
  );
};

export default Projects;
