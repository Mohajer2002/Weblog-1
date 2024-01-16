import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Custom hook to scroll to a section based on the current pathname
function useScrollToSection() {
  // Get the current pathname from the location hook
  const { pathname } = useLocation();

  // useEffect to handle scrolling when the pathname changes
  useEffect(() => {
    // Find the element with the corresponding ID based on the pathname
    const el = document.getElementById(pathname.slice(1, pathname.length));

    // If the element exists, scroll it into view
    if (el) {
      el.scrollIntoView();
    }
  }, [pathname]); // Dependency includes the pathname to trigger the effect when it changes
}

export default useScrollToSection;
