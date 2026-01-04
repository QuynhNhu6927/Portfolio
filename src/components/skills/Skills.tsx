"use client";

import TechSkill from "./TechSkill";
import OthersSkill from "./OthersSkill";

export default function Skills() {
  return (
    <div className="w-full">
      <section className="w-full">
        <TechSkill />
      </section>

      <section className="w-full">
        <OthersSkill />
      </section>
    </div>
  );
}
