import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Carousel from "./Carousel";
import Input from "./Input";
import LikedloginPrimary from "./LikedloginPrimary";
import LikedloginSecondary from "./LikedloginSecondary";
import NavbarPrimary from "./NavbarPrimary";
import NavbarSecondary from "./NavbarSecondary";

function Header({ setIsMenuOpen }) {
   const headerRef = useRef(null);
   const path = useLocation();
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const [hideInput, setHideInput] = useState(false);

   const updateDimensions = () => {
      setWindowWidth(window.innerWidth);
   };

   useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
   }, []);

   useEffect(() => {
      if (path.pathname == "/") {
         headerRef.current.style.height = "100vh";
         headerRef.current.style.backgroundColor = "";
      } else {
         headerRef.current.style.height = "auto";
         headerRef.current.style.backgroundColor = "#eee";
         headerRef.current.style.color = "#1c1e21";
      }
   }, [path]);

   return (
      <header ref={headerRef} className="header">
         {path.pathname == "/" ? <LikedloginPrimary /> : <LikedloginSecondary />}
         {path.pathname == "/" ? (
            <NavbarPrimary
               windowWidth={windowWidth}
               hideInput={hideInput}
               setHideInput={setHideInput}
               setIsMenuOpen={setIsMenuOpen}
            />
         ) : (
            <NavbarSecondary
               windowWidth={windowWidth}
               hideInput={hideInput}
               setHideInput={setHideInput}
               setIsMenuOpen={setIsMenuOpen}
            />
         )}

         <Carousel />
         <CSSTransition timeout={300} in={hideInput} classNames="input" unmountOnExit>
            <Input windowWidth={windowWidth} />
         </CSSTransition>
      </header>
   );
}

export default Header;
