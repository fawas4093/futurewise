import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately when route changes (no smooth scrolling for instant positioning)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
    
    // Also ensure document element is at top (for some browsers)
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
};

export default ScrollToTop;

