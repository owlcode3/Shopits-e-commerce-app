import { gsap, Power4 } from "gsap";
import { useEffect } from "react";

export default function AfterPreloader() {
   useEffect(() => {
      const tl = gsap.timeline({
         defaults: { duration: 1, ease: Power4.easeOut }
      });
      tl.to(".afterpreloader", { height: 0, delay: 1 });
   }, []);

   return (
      <div className="afterpreloader">
         <div></div>
      </div>
   );
}
