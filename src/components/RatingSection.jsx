import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

function RatingSection() {
   const movingText1 = useRef(null);
   const movingText2 = useRef(null);
   const movingText3 = useRef(null);

   useLayoutEffect(() => {
      if (movingText1.current && movingText2.current && movingText3.current) {
         [movingText1.current, movingText2.current, movingText3.current].forEach(words => {
            gsap.fromTo(
               words,
               { xPercent: 0 },
               { xPercent: -100, duration: 20, repeat: -1, ease: "linear" }
            );
         });
      }
   }, []);

   return (
      <section className="review">
         <div className="review__moving-text">
            <h2 id="moving-text1" ref={movingText1} className="moving--text">
               over 1000,000 customers served worldwide with an average rating of 4.5/5 star
            </h2>
            <h2 id="moving-text2" ref={movingText2} className="moving--text" aria-hidden="true">
               over 1000,000 customers served worldwide with an average rating of 4.5/5 star
            </h2>
            <h2 id="moving-text3" ref={movingText3} className="moving--text" aria-hidden="true">
               over 1000,000 customers served worldwide with an average rating of 4.5/5 star
            </h2>
         </div>
      </section>
   );
}

export default RatingSection;
