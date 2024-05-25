import AuthProvider from "@/components/Provider";
import "./globals.css";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import Navbar from "@/components/shared/navbar/Navbar";
import { ThemeProvider } from "@/context/ThemeProvider";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solve It Out",
  description: "Next Authentication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body
          suppressContentEditableWarning
          suppressHydrationWarning
          className={mulish.className}
        >
          <AuthProvider>
            {/* it's wrapper */}
            <div className=" max-w-hd mx-auto  ">
              <Navbar />
              {children}
            </div>
          </AuthProvider>
        </body>
      </html>
    </ThemeProvider>
  );
}
