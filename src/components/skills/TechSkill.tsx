"use client";

import Image from "next/image";
import { TechSkills } from "./TechSkills.data";

export default function TechSkill() {
  const lgRows = [
    TechSkills.slice(0, 5),
    TechSkills.slice(5, 10),
    TechSkills.slice(10, 12),
    TechSkills.slice(12, 14),
  ];

  return (
    <div className="mx-auto w-full max-w-3xl px-2 sm:px-4 py-8 sm:py-10 text-primary">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-8 text-center">
        Technical Skills
      </h2>

      <div className="grid grid-cols-4 gap-x-6 gap-y-6 justify-items-center lg:hidden">
        {TechSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center w-[72px] sm:w-[88px] h-[110px]"
          >
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={40}
                height={40}
                className="object-contain rounded-md"
              />
            </div>

            <span className="mt-2 text-xs sm:text-sm text-white text-center min-h-[32px]">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      <div className="hidden lg:flex flex-col gap-8">
        {lgRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-x-8">
            {row.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center w-[88px] h-[110px] group"
              >
                <div className="flex items-center justify-center w-14 h-14">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className="object-contain rounded-md transition-transform duration-200 group-hover:scale-110"
                  />
                </div>

                <span className="mt-2 text-sm text-white text-center min-h-[32px] opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
