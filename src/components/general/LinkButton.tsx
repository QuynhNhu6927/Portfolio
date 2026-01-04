import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

interface LinkButtonProps {
  href: string;
  text: string;
  icon?: IconType;
  iconPosition?: "right" | "left";
  rounded?: boolean;
  download?: boolean;
  bgColor?: string;   
  textColor?: string; 
  hasBg?: boolean;    
}

export default function LinkButton({
  href,
  text,
  icon: Icon,
  iconPosition = "right",
  rounded = true,
  download = false,
  bgColor = "bg-blue-600",   
  textColor = "text-white",
  hasBg = true,   
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      download={download}
      className={`
        flex items-center gap-2
        px-4 py-2
        ${hasBg ? bgColor : ""}  
        ${textColor}
        hover:opacity-90
        transition
        ${rounded ? "rounded-full" : "rounded-md"}
      `}
    >
      {Icon && iconPosition === "left" && <Icon className="w-5 h-5" />}
      {text}
      {Icon && iconPosition === "right" && <Icon className="w-5 h-5" />}
    </Link>
  );
}
