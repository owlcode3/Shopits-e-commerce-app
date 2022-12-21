import { Children, useEffect, useState } from "react";

function Carousel({ children }) {
   const [slideX, setSlideX] = useState(0);
   const total = Children.toArray(children).length - 1;

   useEffect(() => {
      const slide = setInterval(() => setSlideX(prev => (prev === total ? 0 : prev + 1)), 4000);
      return () => clearInterval(slide);
   }, []);

   return (
      <ul className="carousel">
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
