import { useEffect, useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Header from "./components/Header";
import Preloader from "./components/Preloader";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import LoginSignup from "./components/LoginSignup";
import Home from "./components/Home";
import AfterPreloader from "./components/AfterPreloader";

function App() {
   const appRef = useRef(null);
   const [isLoading, setIsLoading] = useState(true);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isFilterOpen, setIsFilterOpen] = useState(false);

   useEffect(() => {
      const timer = setTimeout(() => {
         setIsLoading(false);
      }, 7500);
      return () => clearTimeout(timer);
   }, []);

   useEffect(() => {
      if (isMenuOpen) {
         document.body.style.overflowY = "hidden";
      } else {
         document.body.style.overflowY = "scroll";
      }
   }, [isMenuOpen]);

   useEffect(() => {
      if (isFilterOpen) {
         document.body.style.overflowY = "hidden";
         if (appRef.current) {
            appRef.current.style.opacity = "0.2";
         }
      } else {
         document.body.style.overflowY = "scroll";
         if (appRef.current) {
            appRef.current.style.opacity = "1";
         }
      }
   }, [isFilterOpen]);

   return isLoading ? (
      <Preloader />
   ) : (
      <>
         <AfterPreloader />
         <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isLoading={isLoading} />
         <div ref={appRef} className="App">
            <Routes>
               <Route
                  path="/"
                  element={<Home isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen} />}
               />
               <Route path="/login" element={<LoginSignup />} />
            </Routes>
            <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
         </div>
         <Footer />
         <CSSTransition timeout={300} in={isFilterOpen} classNames="filters" unmountOnExit>
            <Filter isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen} />
         </CSSTransition>
      </>
   );
}

export default App;
