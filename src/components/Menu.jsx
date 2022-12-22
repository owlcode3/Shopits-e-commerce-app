import { useEffect, useRef } from "react";
import { gsap, Power4 } from "gsap";
import { IoCloseOutline } from "react-icons/io5";

function Menu({ isMenuOpen, setIsMenuOpen }) {
   const menuRef = useRef(null);
   const tl = useRef(null);
   const q = gsap.utils.selector(menuRef);

   useEffect(() => {
      tl.current = gsap.timeline({
         paused: true,
         defaults: { duration: 1, ease: Power4.easeOut, autoAlpha: 1 }
      });
      tl.current.fromTo(".menu", { xPercent: 100, opacity: 0 }, { xPercent: 0, opacity: 1 });
      tl.current.fromTo(
         q(".menu__line--1"),
         { width: 0, left: "0%", opacity: 0 },
         { width: "100%", opacity: 1 },
         "-=0.3"
      );
      tl.current.fromTo(
         q(".menu__text--1"),
         { xPercent: -100, opacity: 0 },
         { xPercent: 0, opacity: 1 },
         "-=0.3"
      );
      tl.current.fromTo(
         q(".menu__line--2"),
         { width: 0, right: "0%", opacity: 0 },
         { width: "100%", opacity: 1 },
         "-=0.3"
      );
      tl.current.fromTo(
         q(".menu__text--2"),
         { xPercent: 100, opacity: 0 },
         { xPercent: 0, opacity: 1 },
         "-=0.3"
      );
      tl.current.fromTo(
         q(".menu__line--3"),
         { width: 0, left: "0", opacity: 0 },
         { width: "100%", opacity: 1 },
         "-=0.3"
      );
      tl.current.fromTo(
         q(".menu__text--3"),
         { xPercent: -100, opacity: 0 },
         { xPercent: 0, opacity: 1 },
         "-=0.3"
      );
   }, []);

   useEffect(() => {
      if (isMenuOpen) {
         tl.current.play();
      }
   }, [isMenuOpen]);

   const reverseTl = () => {
      tl.current.reverse();
      setIsMenuOpen(false);
   };

   return (
      <div ref={menuRef} className="menu">
         <span onClick={reverseTl} className="menu__close">
            <IoCloseOutline size={20} opacity="0.3" />
         </span>
         <ul className="menu__lists">
            <li className="menu__list">
               <span className="menu__text menu__text--1">SHOP</span>
               <span className="menu__line menu__line--1"></span>
            </li>
            <li className="menu__list">
               <span className="menu__text  menu__text--2">COLLECTIONS</span>
               <span className="menu__line menu__line--2"></span>
            </li>
            <li className="menu__list">
               <span className="menu__text  menu__text--3">ABOUT</span>
               <span className="menu__line menu__line--3"></span>
            </li>
         </ul>
      </div>
   );
}

export default Menu;
