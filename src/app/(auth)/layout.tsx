import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "@/styles/globals.css";
// import "@/styles/satoshi.css";
import "@/styles/style.css";
import { Navbar } from "@/components/navbar";
import { ReduxProvider } from "@/providers/redux.provider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Account Academy",
  description: "Account Academy",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
