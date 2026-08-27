import Footer from "@/components/common/footer";
import TopNav from "@/components/common/topNav";
import MobileNav from "@/components/common/mobileNav";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MobileNav />
      <TopNav />
      {children}
      <Footer />
    </>
  );
}
