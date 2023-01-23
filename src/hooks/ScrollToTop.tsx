//* Description: This hook is used to scroll to the top of the page on route change

// Import statements
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ScrollToTop hook
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
}
