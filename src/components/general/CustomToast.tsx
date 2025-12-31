"use client";

import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaCheck } from "react-icons/fa";

interface ToastProps {
  message: string;
  duration?: number;             // thời gian hiển thị (ms)
  position?: "top-center" | "top-left" | "top-right" | "bottom-center" | "bottom-left" | "bottom-right";
  bgColor?: string;              // background color
  textColor?: string;            // text color
  icon?: React.ReactNode;        // icon hiển thị
}

export const showToast = ({
  message,
  duration = 3000,
  position = "bottom-center",
  bgColor = "var(--color-primary)",
  textColor = "var(--color-white)",
  icon = <FaCheck className="w-4 h-4" />,
}: ToastProps) => {
  toast.custom(
    (t) => (
      <div
        className={`
          ${t.visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}
          transition-all duration-300 ease-in-out
          flex items-center gap-2 px-4 py-2 rounded shadow-lg
        `}
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        {icon}
        <span>{message}</span>
      </div>
    ),
    { duration, position }
  );
};

export const ToastContainer = () => <Toaster />;
