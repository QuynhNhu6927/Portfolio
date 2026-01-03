"use client";

import Image from "next/image";
import React from "react";
import { showToast, ToastContainer } from "../general/CustomToast";

const icons = [
  { name: "GitHub", src: "/images/contactIcon/git.png", hover: "/images/contactIcon/git_hover.png", alt: "GitHub" },
  { name: "Facebook", src: "/images/contactIcon/fb.png", hover: "/images/contactIcon/fb_hover.png", alt: "Facebook" },
  { name: "LinkedIn", src: "/images/contactIcon/linked.png", hover: "/images/contactIcon/linked_hover.png", alt: "LinkedIn" },
  { name: "Google", src: "/images/contactIcon/mail.png", hover: "/images/contactIcon/mail_hover.png", alt: "Google", tooltip: "nguyenquynhnhu612004@gmail.com" },
  { name: "WhatsApp", src: "/images/contactIcon/phone.png", hover: "/images/contactIcon/phone_hover.png", alt: "WhatsApp", tooltip: "+84 58 656 4776" },
];

export default function SocialIcons() {
  const handleClick = (iconName: string, tooltip?: string) => {
    if ((iconName === "WhatsApp" || iconName === "Google") && tooltip) {
      navigator.clipboard.writeText(tooltip)
        .then(() => {
          showToast({
            message: `${iconName === "WhatsApp" ? "Phone number" : "Email"} copied!`,
          });
        })
        .catch(() => {
          showToast({
            message: "Copy failed!",
            bgColor: "var(--color-disable)",
          });
        });
    }
  };

  return (
    <div className="flex gap-3 mt-4 justify-center md:justify-start">
      <ToastContainer />

      {icons.map((icon) => (
        <div
          key={icon.name}
          className="relative w-6 h-6 cursor-pointer group"
          onClick={() => handleClick(icon.name, icon.tooltip)}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            fill
            sizes="24px"
            className="object-contain transition-opacity duration-200 group-hover:opacity-0"
          />

          <Image
            src={icon.hover}
            alt={icon.alt}
            fill
            sizes="24px"
            className="object-contain absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />

          {icon.tooltip && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary text-white font-semibold text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {icon.tooltip}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
