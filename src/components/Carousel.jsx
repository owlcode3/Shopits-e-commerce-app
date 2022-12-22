import { Children, useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap, Expo } from "gsap";

function Carousel({ children }) {
   const ref = useRef(null);
   const [slideX, setSlideX] = useState(0);
   const total = Children.toArray(children).length - 1;

   useEffect(() => {
      const slide = setInterval(() => setSlideX(prev => (prev === total ? 0 : prev + 1)), 4000);
      return () => clearInterval(slide);
   }, []);

   useLayoutEffect(() => {
      const timer = setTimeout(() => {
         if (ref.current) {
            gsap.fromTo(
               ".carousel",
               { y: "100%", autoAlpha: 0 },
               { y: "0%", duration: 1, ease: Expo.easeOut, autoAlpha: 1 }
            );
         }
      }, 200);
      return () => clearTimeout(timer);
   }, []);

   return (
      <ul ref={ref} className="carousel">
         {Children.map(children, (child, i) => (
            <li
               key={i}
               style={{ transform: `translateX(${100 * (i - slideX)}%)` }}
               className="carousel__list"
            >
               {child}
            </li>
         ))}
      </ul>
   );
}

export default Carousel;
