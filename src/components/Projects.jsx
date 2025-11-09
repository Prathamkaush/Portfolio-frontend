import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 text-center fade-in">
      <h2 className="text-4xl font-semibold mb-10 text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto px-4">
        {projects.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
