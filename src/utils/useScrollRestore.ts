import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollRestore() {
  const { pathname } = useLocation();

  useEffect(() => {
    const nav = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    if (nav?.type === "back_forward") return;

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
}
