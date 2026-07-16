"use client";
import useIsMobile from "@/hooks/common/useIsMobile";
import MobileNav from "@/components/common/mobileNav";
import TopNav from "./topNav";

const ResponsiveNav = () => {
  const isMobile = useIsMobile();

  return <>{!isMobile ? <TopNav /> : <MobileNav />}</>;
};

export default ResponsiveNav;
