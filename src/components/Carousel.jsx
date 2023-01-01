import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap, Expo } from "gsap";
import { useLocation } from "react-router-dom";

function Carousel() {
   const rouselRef = useRef(null);
   const [slideX, setSlideX] = useState(0);
   const [overflowBody, setOverflowBody] = useState(true);

   useEffect(() => {
      if (overflowBody) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "";
      }
   }, []);

   useEffect(() => {
      if (slideX === 3) {
         setOverflowBody(false);
      }
   }, [slideX]);

   useEffect(() => {
      const slide = setInterval(() => setSlideX(prev => (prev === 3 ? 0 : prev + 1)), 4000);
      return () => clearInterval(slide);
   }, []);

   const path = useLocation();

   useEffect(() => {
      if (path.pathname == "/") {
         rouselRef.current.style.display = "block";
      } else {
         rouselRef.current.style.display = "none";
      }
   }, [path]);

   return (
      <ul ref={rouselRef} className="carousel">
         <li style={{ transform: `translateX(${100 * (0 - slideX)}%)` }} className="carousel__list">
            <div className="carousel__img-box carousel__img-box--1"></div>
         </li>
         <li style={{ transform: `translateX(${100 * (1 - slideX)}%)` }} className="carousel__list">
            <div className="carousel__img-box carousel__img-box--2"></div>
         </li>
         <li style={{ transform: `translateX(${100 * (2 - slideX)}%)` }} className="carousel__list">
            <div className="carousel__img-box carousel__img-box--3"></div>
         </li>
         <li style={{ transform: `translateX(${100 * (3 - slideX)}%)` }} className="carousel__list">
            <div className="carousel__img-box carousel__img-box--4"></div>
         </li>
      </ul>
   );
}

export default Carousel;
