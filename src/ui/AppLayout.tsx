import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState, useEffect, useMemo, Suspense } from "react";
import { AnimatePresence, motion, cubicBezier } from "framer-motion";
import { useScrollRestore } from "../utils/useScrollRestore";
import Loader from "./Loader";

const pages: Record<string, { image: string; title: string }> = {
  "/menu": { image: "/menu-hero.jpg", title: "MENU" },
  "/about": { image: "/about-hero.jpg", title: "ABOUT" },
  "/blog": { image: "/blog-hero.jpg", title: "BLOG" },
  "/contact": { image: "/contact-hero.jpg", title: "CONTACT" },
  "/reservation": { image: "/reservation-hero.jpg", title: "BOOK A TABLE" },
};

const images: Record<string, string> = {
  "/menu": "/main-images/menu.jpg",
  "/about": "/main-images/about.jpg",
  "/reservation": "/main-images/reservation.jpg",
  "/blog": "/main-images/blog.jpg",
  "/contact": "/main-images/contact.jpg",
};

export default function AppLayout() {
  const location = useLocation();
  const basePath = "/" + location.pathname.split("/")[1];
  const [articleImage, setArticleImage] = useState<string | null>(null);
  const page = pages[basePath] ?? { image: "/default.jpg", title: "" };
  const defaultImage = images[basePath] ?? "/default.jpg";
  const image = articleImage || defaultImage;

  const noScrollRoutes = ["/about", "/reservation", "/contact"];
  const isNoScroll = noScrollRoutes.includes(location.pathname);

  useScrollRestore();
  const [bgReady, setBgReady] = useState(true);
  useEffect(() => {
    if (!image) {
      setBgReady(true);
      return;
    }
    setBgReady(false);
    const img = new Image();
    img.src = image;
    const done = () => setBgReady(true);
    img.onload = done;
    img.onerror = done;
  }, [image]);

  const easeOut = useMemo(() => cubicBezier(0.22, 0.61, 0.36, 1), []);
  const easeIn = useMemo(() => cubicBezier(0.4, 0, 1, 1), []);

  return (
    <div className="min-h-screen xl:h-screen flex p-4 xl:p-6">
      <div
        className="
        grid flex-1 h-full min-h-0
        gap-4
        grid-cols-1
        xl:grid-cols-[1fr_1fr] 
      "
      >
        <aside className="relative overflow-hidden rounded-2xl min-h-[320px] md:min-h-[420px] xl:h-full min-w-0 ">
          <AnimatePresence mode="wait">
            {image && (
              <motion.img
                key={image}
                src={image}
                alt="sidebar"
                className="absolute inset-0 w-full h-full object-cover object-[0px_20%]"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, ease: easeOut },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.25, ease: easeIn },
                }}
                loading="eager"
                decoding="sync"
              />
            )}
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/70" />
          <div className="absolute top-0 left-0 right-0 z-10">
            <NavBar />
          </div>

          {page.title && (
            <AnimatePresence mode="wait">
              <motion.h1
                key={page.title}
                className="absolute bottom-11 left-16 text-6xl md:text-8xl font-forum text-orange-100"
                initial={{ opacity: 0, y: 12 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.35, ease: easeOut },
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                  transition: { duration: 0.2, ease: easeIn },
                }}
              >
                {page.title}
              </motion.h1>
            </AnimatePresence>
          )}

          {!bgReady && (
            <div className="pointer-events-none absolute inset-0 grid place-items-center bg-black/40 backdrop-blur-[2px]">
              <Loader />
            </div>
          )}
        </aside>

        <main className="min-h-0 xl:h-full min-w-0">
          <div
            className={[
              "flex min-h-0 gap-4 flex-col scroll-smooth",
              "xl:h-full",
              isNoScroll
                ? "overflow-visible xl:overflow-hidden"
                : "overflow-visible xl:overflow-y-auto xl:pr-2",
            ].join(" ")}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                className={
                  isNoScroll ? "xl:flex-1 xl:min-h-0 xl:overflow-hidden" : ""
                }
                initial={{ opacity: 0, y: 8 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.28, ease: easeOut },
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                  transition: { duration: 0.18, ease: easeIn },
                }}
                style={{ willChange: "transform, opacity" }}
              >
                <Suspense
                  fallback={
                    <div className="grid place-items-center min-h-[200px]">
                      <Loader />
                    </div>
                  }
                >
                  <Outlet context={{ setArticleImage }} />
                </Suspense>
              </motion.div>
            </AnimatePresence>

            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
