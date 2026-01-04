import type { Metadata } from "next";
import { Kodchasan } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/general/navbar/Navbar";
import { TabProvider } from "@/context/TabContext";

const kodchasan = Kodchasan({
  variable: "--font-kodchasan",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nguyen Quynh Nhu's Portfolio",
  description: "Nguyen Quynh Nhu's portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${kodchasan.className} antialiased bg-bg`}>
        <TabProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            {/* Content area */}
            <main className="flex-1 flex justify-center items-center">
              {children}
            </main>
          </div>
        </TabProvider>
      </body>
    </html>
  );
}
