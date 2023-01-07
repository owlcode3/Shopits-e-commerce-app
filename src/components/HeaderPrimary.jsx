import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Carousel from "./Carousel";
import Input from "./Input";
import LikedloginPrimary from "./LikedloginPrimary";
import NavbarPrimary from "./NavbarPrimary";

function HeaderPrimary({ setIsMenuOpen }) {
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const [hideInput, setHideInput] = useState(false);

   const updateDimensions = () => {
      setWindowWidth(window.innerWidth);
   };

   useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
   }, []);

   return (
      <header className="header">
         <LikedloginPrimary />
         <NavbarPrimary
            windowWidth={windowWidth}
            hideInput={hideInput}
            setHideInput={setHideInput}
            setIsMenuOpen={setIsMenuOpen}
         />

         <Carousel />
         <CSSTransition timeout={300} in={hideInput} classNames="input" unmountOnExit>
            <Input windowWidth={windowWidth} />
         </CSSTransition>
      </header>
   );
}

export default HeaderPrimary;
