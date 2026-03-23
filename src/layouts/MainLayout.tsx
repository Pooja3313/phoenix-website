import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BackToTopButton from "@/components/BackToTopButton";
import StickyGetInTouch from "@/components/StickyGetInTouch";
import DiscountPopup from "@/components/DiscountPopup";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <div key={pathname} className="animate-page-enter min-h-[1px]">
          <Outlet />
        </div>
      </main>
      <Footer />
      <DiscountPopup />
      <StickyGetInTouch />
      <BackToTopButton />
    </div>
  );
};

export default MainLayout;

