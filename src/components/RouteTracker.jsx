import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_ID = "G-HHXQJWCBG0";

export default function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;

    window.gtag("config", GA_ID, {
      page_path: location.pathname + location.search,
    });
  }, [location.pathname, location.search]); //explicit location def

  return null;
}