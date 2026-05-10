import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "@/styles/style.css";
import TopNav from "@/components/common/topNav";
import Footer from "@/components/common/footer";

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
        <div className="site-wrapper">
          <TopNav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
