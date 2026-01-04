"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "./Projects.data";

export default function Projects() {
  return (
    <div className="mx-auto w-[95%] max-w-6xl px-4 py-8 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
