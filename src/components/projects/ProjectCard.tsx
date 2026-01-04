"use client";

import { useState } from "react";
import Image from "next/image";
import TechStackModal from "./TechStackModal";
import { Project } from "./Projects.data";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const [openTechs, setOpenTechs] = useState(false);

  return (
    <div className="group bg-bg border border-primary/20 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col h-full">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={project.image}
          alt=""
          fill
          className="object-cover blur-md scale-110"
        />

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex flex-col gap-3">
          <h3
            className="
              text-lg
              font-semibold
              text-primary
              leading-7
              line-clamp-2
              min-h-[56px]
            "
          >
            {project.title}
          </h3>

          <p className="text-sm text-disable leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="mt-auto pt-4">
          <div className="flex flex-wrap gap-2">
            {project.techs.map((tech) =>
              tech.includes("more") ? (
                <button
                  key={tech}
                  onClick={() => setOpenTechs(true)}
                  className="text-xs px-3 py-1 rounded-full border border-primary/40 text-white hover:bg-primary/10 transition"
                >
                  {tech}
                </button>
              ) : (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full border border-primary/40 text-primary"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {(project.github || project.demoApp || project.demoWeb) && (
            <div className="flex gap-4 mt-6 text-sm">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Git
                </a>
              )}
              {project.demoApp && (
                <a
                  href={project.demoApp}
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Mobile demo
                </a>
              )}
              {project.demoWeb && (
                <a
                  href={project.demoWeb}
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Web demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {project.fullTechs && (
        <TechStackModal
          open={openTechs}
          onClose={() => setOpenTechs(false)}
          techs={project.fullTechs}
        />
      )}
    </div>
  );
}
