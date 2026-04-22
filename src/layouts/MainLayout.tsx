import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BackToTopButton from "@/components/BackToTopButton";
import StickyGetInTouch from "@/components/StickyGetInTouch";
import DiscountPopup from "@/components/DiscountPopup";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const MainLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="min-h-[1px]"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <DiscountPopup />
      <StickyGetInTouch />
      <BackToTopButton />
    </div>
  );
};

export default MainLayout;

