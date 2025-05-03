import { useEffect, useState, createContext, useContext } from "react";
import { useLocation } from "react-router-dom";
import PageLoader from "./PageLoader.jsx";

const PageTransitionContext = createContext({ isLoading: false });

export const usePageTransition = () => useContext(PageTransitionContext);

function PageTransition({ children }) {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500); 

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <PageTransitionContext.Provider value={{ isLoading }}>
      {isLoading && <PageLoader />}
      {children}
    </PageTransitionContext.Provider>
  );
}

export default PageTransition; 
