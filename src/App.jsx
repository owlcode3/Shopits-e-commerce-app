import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { gsap, Linear } from "gsap";
import { CSSTransition } from "react-transition-group";
import Header from "./components/Header";
import Preloader from "./components/Preloader";
import RatingSection from "./components/RatingSection";
import Menu from "./components/Menu";
import ProductsSection from "./components/ProductsSection";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import Filter from "./components/Filter";

function App() {
   const appRef = useRef(null);
   const [isLoading, setIsLoading] = useState(true);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isFilterOpen, setIsFilterOpen] = useState(false);

   useEffect(() => {
      const timer = setTimeout(() => {
         setIsLoading(false);
      }, 7000);

      return () => clearTimeout(timer);
   }, []);

   useLayoutEffect(() => {
      if (appRef.current) {
         gsap.fromTo(
            appRef.current,
            { yPercent: 100, autoAlpha: 0 },
            { yPercent: 0, duration: 1, ease: Linear, autoAlpha: 1 }
         );
      }
   }, [isLoading]);

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
         <div ref={appRef} className="App">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <RatingSection />
            <ProductsSection isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen} />
            <NewsLetter />
            <Footer />
            {isMenuOpen ? <Menu isMenuOpen={isMenuOpen} /> : ""}
         </div>
         <CSSTransition timeout={300} in={isFilterOpen} classNames="filters" unmountOnExit>
            <Filter isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen} />
         </CSSTransition>
      </>
   );
}

export default App;
