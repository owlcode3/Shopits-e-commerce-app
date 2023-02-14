import { gsap, Power4 } from "gsap";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AfterPreloader() {
   const path = useLocation();

   useEffect(() => {
      const tl = gsap.timeline({
         defaults: { duration: 1, ease: Power4.easeOut }
      });
      tl.to(".afterpreloader", { height: 0, delay: 1 });
   }, []);

   return (
      <div
         className="afterpreloader"
         style={{ backgroundColor: path.pathname == "/" ? "hsl(216, 8%, 12%)" : "hsl(0, 0%, 93%)" }}
      >
         <div>nnnnnnnnnnnn</div>
      </div>
   );
}
