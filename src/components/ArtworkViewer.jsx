/* eslint-disable react/prop-types */
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { ik } from "../lib/imagekit";

const ViewerContext = createContext(null);
export const useArtworkViewer = () => useContext(ViewerContext);

// Full-screen viewer for studying artwork up close: scroll/pinch to zoom, drag to pan,
// double-click to zoom in/out. Opened from anywhere via useArtworkViewer().open(...).
export function ArtworkViewerProvider({ children }) {
  const [item, setItem] = useState(null); // { src, title, subtitle } | null

  const open = useCallback((payload) => setItem(payload), []);
  const close = useCallback(() => setItem(null), []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && close();
    if (item) {
      window.addEventListener("keydown", onKey);
      document.documentElement.classList.add("lenis-stopped");
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("lenis-stopped");
    };
  }, [item, close]);

  return (
    <ViewerContext.Provider value={{ open, close }}>
      {children}
      <AnimatePresence>
        {item && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-[#100d0b]/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between px-6 py-5 text-linen/90">
              <div className="min-w-0">
                <p className="font-display text-lg leading-tight text-linen">
                  {item.title}
                </p>
                {item.subtitle && (
                  <p className="text-xs uppercase tracking-eyebrow text-linen/55">
                    {item.subtitle}
                  </p>
                )}
              </div>
              <button
                onClick={close}
                aria-label="Close viewer"
                className="ml-6 shrink-0 rounded-full border border-linen/30 px-4 py-2 text-xs uppercase tracking-eyebrow text-linen/80 transition-colors hover:border-linen/70 hover:text-linen"
              >
                Close
              </button>
            </div>

            <TransformWrapper
              doubleClick={{ mode: "toggle", step: 1.4 }}
              wheel={{ step: 0.12 }}
              pinch={{ step: 5 }}
              minScale={1}
              maxScale={6}
              centerOnInit
            >
              <TransformComponent
                wrapperStyle={{ width: "100%", height: "100%", cursor: "grab" }}
                contentStyle={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <motion.img
                  key={item.src}
                  initial={{ scale: 0.98, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  src={ik(item.src, { w: 2400, q: 82 })}
                  alt={item.title}
                  className="max-h-[82vh] max-w-[92vw] object-contain"
                  draggable={false}
                />
              </TransformComponent>
            </TransformWrapper>

            <p className="pointer-events-none px-6 pb-6 text-center text-xs uppercase tracking-eyebrow text-linen/45">
              Scroll or pinch to zoom · drag to explore the detail
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </ViewerContext.Provider>
  );
}
