import { gsap, Power3 } from "gsap";
import { useEffect, useRef } from "react";

function Preloader() {
   const preloaderRef = useRef(null);
   const q = gsap.utils.selector(preloaderRef);

   useEffect(() => {
      if (preloaderRef.current) {
         const tl = gsap.timeline({
            defaults: { duration: 1, ease: Power3.easeOut, visibility: "visible" }
         });
         tl.fromTo(q(".preloader__s"), { yPercent: 150, opacity: 0 }, { yPercent: 0, opacity: 1 });
         tl.fromTo(
            q(".preloader__h"),
            { yPercent: -100, opacity: 0 },
            { yPercent: 0, opacity: 1 },
            "-=0.3"
         );
         tl.fromTo(
            q(".preloader__o"),
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1 },
            "-=0.3"
         );
         tl.fromTo(
            q(".preloader__p"),
            { yPercent: -100, opacity: 0 },
            { yPercent: 0, opacity: 1 },
            "-=0.3"
         );
         tl.fromTo(
            q(".preloader__i"),
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1 },
            "-=0.3"
         );
         tl.fromTo(
            q(".preloader__t"),
            { yPercent: -100, opacity: 0 },
            { yPercent: 0, opacity: 1 },
            "-=0.3"
         );
         tl.fromTo(
            q(".preloader__s2"),
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1 },
            "-=0.3"
         );
         tl.fromTo(
            q(".preloader__mp"),
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1 },
            "-=0.1"
         );
      }
   }, []);

   return (
      <div ref={preloaderRef} className="preloader">
         <div className="preloader__brand-name">
            <span className="preloader__s">S</span>
            <span className="preloader__h">H</span>
            <span className="preloader__o">O</span>
            <span className="preloader__p">P</span>
            <span className="preloader__i">I</span>
            <span className="preloader__t">T</span>
            <span className="preloader__s2">S</span>
         </div>
         <div className="preloader__fashion-box">
            <span className="preloader__mp">Fashion for the fearless and bold.</span>
         </div>
      </div>
   );
}

export default Preloader;
