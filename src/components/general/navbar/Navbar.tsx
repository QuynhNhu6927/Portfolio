"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import LinkButton from "../LinkButton";
import { useTab } from "@/context/TabContext";

const navLinks = [
  { url: "#about", label: "About me" },
  { url: "#skills", label: "Skills" },
  { url: "#projects", label: "Projects" },
  // { url: "#experience", label: "Experience" },
];

export default function Navbar() {
  const { activeTab, setActiveTab } = useTab();
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full pt-4 md:pt-6 relative">
      <div className="mx-auto w-[95%] max-w-6xl relative">
        <div className="flex items-center justify-between rounded-full bg-white pl-4 pr-2  md:pl-6 md:pr-2 lg:pl-8 lg:pr-2 py-1.5 md:py-2">


          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden p-2 rounded-full hover:bg-gray-100 transition"
          >
            <Bars3Icon className="w-6 h-6 text-bg" />
          </button>

          <ul className="hidden sm:flex items-center gap-16">
            {navLinks.map((link) => (
              <li key={link.url}>
                <button
                  onClick={() => setActiveTab(link.url.slice(1) as any)}
                  className={`text-base transition-all duration-200
                    ${activeTab === link.url.slice(1)
                      ? "font-bold text-primary drop-shadow-[0_1px_1px_rgba(157,152,196,0.6)]"
                      : "font-semibold text-disable hover:text-primary"
                    }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <LinkButton
            href="/files/cv.pdf"
            text="My CV"
            icon={ArrowDownTrayIcon}
            iconPosition="right"
            rounded={true}
            download={true}
            bgColor="bg-bg"
            textColor="text-white"
          />
        </div>

        {open && (
          <div className="sm:hidden absolute top-full left-0 rounded-2xl bg-white shadow-lg py-4 px-4 z-50 min-w-[150px] max-w-xs mt-2">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.url}>
                  <button
                    onClick={() => {
                      setActiveTab(link.url.slice(1) as any);
                      setOpen(false);
                    }}
                    className={`block w-full text-left text-base transition
              ${activeTab === link.url.slice(1)
                        ? "font-bold text-primary"
                        : "font-medium text-disable hover:text-primary"
                      }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </nav>
  );
}
