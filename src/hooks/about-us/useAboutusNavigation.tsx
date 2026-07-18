import { useEffect } from "react";

function useAboutusNavigation() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.slice(1);

    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const timer = setTimeout(scrollToTarget, 100);

    return () => clearTimeout(timer);
  }, []);
}

export default useAboutusNavigation;
