import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Input from "./Input";
import LikedloginSecondary from "./LikedloginSecondary";
import NavbarSecondary from "./NavbarSecondary";

function HeaderSecondary({ setIsMenuOpen }) {
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
      <header className="header header--secondary">
         <LikedloginSecondary />
         <NavbarSecondary
            windowWidth={windowWidth}
            hideInput={hideInput}
            setHideInput={setHideInput}
            setIsMenuOpen={setIsMenuOpen}
         />
         <CSSTransition timeout={300} in={hideInput} classNames="input" unmountOnExit>
            <Input windowWidth={windowWidth} />
         </CSSTransition>
      </header>
   );
}

export default HeaderSecondary;
