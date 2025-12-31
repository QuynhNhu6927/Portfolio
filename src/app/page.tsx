"use client";

import AboutMe from "@/components/about/AboutMe"; 
import { useTab } from "@/context/TabContext";

export default function Page() {
  const { activeTab } = useTab();

  return (
    <div className="mt-8">
      {activeTab === "about" && <AboutMe />}
    </div>
  );
}
