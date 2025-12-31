"use client";

import React from "react";
import Image from "next/image";
import { FaGraduationCap, FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import SocialIcons from "./SocialIcons";

export default function AboutMe() {
  return (
    <div className="mx-auto w-[95%] max-w-6xl px-4">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-bg text-white">

        <div className="flex-shrink-0 flex flex-col items-center md:items-start">
          <div className="w-40 h-40 sm:w-40 sm:h-40 md:w-90 md:h-90 relative rounded-lg overflow-hidden border-2 border-primary">
            <Image
              src="/images/avatar.jpg"
              alt="Avatar"
              fill
              className="object-cover"
            />
          </div>

          <SocialIcons />
        </div>

        <div className="flex-1 text-center text-left mt-4 md:mt-0">
          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-3 md:mb-4">
            Hi, I’m Nguyễn Quỳnh Như, a front-end developer
          </h1>
          <p className="text-disable mb-4 sm:mb-5 md:mb-6">
            As a recent Software Engineering graduate, I am highly motivated to learn, grow, and contribute my skills to meaningful projects while gaining hands-on experience in a professional software development environment.
          </p>

          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center font-bold gap-2 bg-primary text-white px-4 py-2 rounded-lg max-w-max">
  <FaGraduationCap className="text-white w-5 h-5" />
  <span>FPT University - Software Engineering</span>
</div>


            <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-disable text-sm mt-2">
              <div className="flex items-center gap-1">
                <FaRegCalendarAlt className="w-4 h-4 text-disable" />
                <span>2022 - 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <FaMapMarkerAlt className="w-4 h-4 text-disable" />
                <span>Ho Chi Minh, Viet Nam</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
