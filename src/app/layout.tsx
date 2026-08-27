import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "@/styles/style.css";
import { Toaster } from "react-hot-toast";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SoCal Power Grid",
  description: "SoCal Power Grid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="site-wrapper">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
