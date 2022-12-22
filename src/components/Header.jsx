import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Carousel from "./Carousel";
import Input from "./Input";
import Likedlogin from "./Likedlogin";
import Navbar from "./Navbar";

function Header({ isMenuOpen, setIsMenuOpen, isLoading }) {
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
         <Likedlogin />
         <Navbar
            windowWidth={windowWidth}
            hideInput={hideInput}
            setHideInput={setHideInput}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
         />
         <Carousel>
            <div className="carousel__img-box carousel__img-box--1"></div>
            <div className="carousel__img-box carousel__img-box--2"></div>
            <div className="carousel__img-box carousel__img-box--3"></div>
            <div className="carousel__img-box carousel__img-box--4"></div>
         </Carousel>
         <CSSTransition timeout={300} in={hideInput} classNames="input" unmountOnExit>
            <Input windowWidth={windowWidth} />
         </CSSTransition>
      </header>
   );
}

export default Header;
