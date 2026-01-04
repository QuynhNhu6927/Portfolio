"use client";

import AboutMe from "@/components/about/AboutMe";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import { useTab } from "@/context/TabContext";

export default function Page() {
  const { activeTab } = useTab();

  return (
    <>
      {activeTab === "about" && <AboutMe />}
      {activeTab === "skills" && <Skills />}
      {activeTab === "projects" && <Projects />}

    </>
  );
}
