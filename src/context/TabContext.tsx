"use client";

import { createContext, useState, useContext, ReactNode } from "react";

type Tab = "about" | "skills" | "projects" | "experience";

interface TabContextProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const TabContext = createContext<TabContextProps | undefined>(undefined);

export function TabProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<Tab>("about");
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
}

export function useTab() {
  const context = useContext(TabContext);
  if (!context) throw new Error("useTab must be used within TabProvider");
  return context;
}
