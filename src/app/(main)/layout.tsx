"use client";
import { useRef } from "react";
import Footer from "@/components/common/footer";
import TopNav from "@/components/common/topNav";
import MobileNav from "@/components/common/mobileNav";
import ScrollDownIndicator from "@/components/common/scrollDownIndicator";
import useScrollDownIndicator from "@/hooks/common/useScrollDownIndicator";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const footerRef = useRef<HTMLElement | null>(null);
  const { indicatorRef, chevronRef } = useScrollDownIndicator(footerRef);
  return (
    <>
      <MobileNav />
      <TopNav />
      <ScrollDownIndicator
        indicatorRef={indicatorRef}
        chevronRef={chevronRef}
      />
      {children}
      <Footer footerRef={footerRef} />
    </>
  );
}
