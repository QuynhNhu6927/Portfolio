"use client";

import TechSkill from "./TechSkill";
import OthersSkill from "./OthersSkill";

export default function Skills() {
  return (
    <div className="w-full">
      {/* Tech Skills */}
      <section className="w-full">
        <TechSkill />
      </section>

      {/* Other Skills */}
      <section className="w-full">
        <OthersSkill />
      </section>
    </div>
  );
}
