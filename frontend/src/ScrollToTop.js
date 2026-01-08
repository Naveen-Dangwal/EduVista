import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();  // Get the current path

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to top whenever path changes
  }, [pathname]);  // Trigger useEffect when the pathname changes

  return null;  // This component doesn't render anything
}

export default ScrollToTop;