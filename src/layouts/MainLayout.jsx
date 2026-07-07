import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ArtworkViewerProvider } from "../components/ArtworkViewer";
import { useSmoothScroll } from "../lib/useSmoothScroll";

const MainLayout = () => {
  useSmoothScroll();
  const { pathname } = useLocation();

  return (
    <ArtworkViewerProvider>
      <Nav />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </ArtworkViewerProvider>
  );
};

export default MainLayout;
