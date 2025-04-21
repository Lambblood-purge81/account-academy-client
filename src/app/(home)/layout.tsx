import type { Metadata } from "next";
// import "@/styles/globals.css";
// import "@/styles/satoshi.css";
import "@/styles/style.css";
import "@/styles/tiny-slider/tiny-slider.css";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Account Academy",
  description: "Account Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
