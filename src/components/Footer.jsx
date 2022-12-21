import React from "react";

function Footer() {
   return (
      <footer className="footer">
         <div className="footer__container">
            <div className="footer__box-1">
               <h2 className="footer__text">terms & conditions</h2>
               <h2 className="footer__text">return policy</h2>
               <h2 className="footer__text">contact us</h2>
               <h2 className="footer__text">about us</h2>
               <h2 className="footer__text">get help</h2>
               <h2 className="footer__text">black friday</h2>
               <h2 className="footer__text">work with us</h2>
               <h2 className="footer__text">accessibility</h2>
            </div>

            <div className="footer__box-2">
               <span className="footer__icons">
                  <svg
                     className="footer__icon"
                     width="10"
                     height="18"
                     viewBox="0 0 10 18"
                     fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M9.5 3H6.5C5.94772 3 5.5 3.44772 5.5 4V7H9.5C9.61374 6.99748 9.7216 7.05039 9.78923 7.14188C9.85685 7.23336 9.87578 7.35201 9.84 7.46L9.1 9.66C9.03181 9.86192 8.84312 9.99842 8.63 10H5.5V17.5C5.5 17.7761 5.27614 18 5 18H2.5C2.22386 18 2 17.7761 2 17.5V10H0.5C0.223858 10 0 9.77614 0 9.5V7.5C0 7.22386 0.223858 7 0.5 7H2V4C2 1.79086 3.79086 0 6 0H9.5C9.77614 0 10 0.223858 10 0.5V2.5C10 2.77614 9.77614 3 9.5 3Z"></path>
                  </svg>
               </span>
               <span className="footer__icon">
                  <svg
                     className="footer__icon"
                     stroke="currentColor"
                     fill="currentColor"
                     strokeWidth="0"
                     viewBox="0 0 512 512"
                     height="20"
                     width="20"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
                  </svg>
               </span>
               <span className="footer__icon">
                  <svg
                     className="footer__icon"
                     stroke="currentColor"
                     fill="currentColor"
                     strokeWidth="0"
                     viewBox="0 0 512 512"
                     height="20"
                     width="20"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path>
                     <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path>
                  </svg>
               </span>
            </div>

            <div className="footer__copyright">
               <h2 className="footer__copy">
                  copyright &copy; <span className="footer__year">{new Date().getFullYear()}</span>{" "}
                  Shopits.com. All rights reserved
               </h2>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
