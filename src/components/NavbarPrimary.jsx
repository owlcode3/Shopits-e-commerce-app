import { Link } from "react-router-dom";

function NavbarPrimary({ windowWidth, hideInput, setHideInput, setIsMenuOpen }) {
   return (
      <nav className="nav">
         <div onClick={() => setIsMenuOpen(true)} className="nav__toggle">
            <span className="nav__toggle-line"></span>
            <span className="nav__toggle-line"></span>
         </div>

         <span className="nav__logo">SHOPITS</span>

         <ul className="nav__items">
            <li className="nav__item">
               <a href="#" className="nav__link">
                  SHOP
               </a>
            </li>
            <li className="nav__item">
               <a href="#" className="nav__link">
                  COLLECTIONS
               </a>
            </li>
            <li className="nav__item">
               <a href="#" className="nav__link">
                  ABOUT
               </a>
            </li>
         </ul>

         <ul className="nav__lists">
            <li className="nav__list">
               <a href="#" className="nav__link">
                  <div onClick={() => setHideInput(!hideInput)} className="nav__icon-box">
                     {windowWidth > 600 ? (
                        <svg className="nav__icon" role="presentation" viewBox="0 0 21 21">
                           <g
                              transform="translate(1 1)"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                              fillRule="evenodd"
                              strokeLinecap="square"
                           >
                              <path d="M18 18l-5.7096-5.7096"></path>
                              <circle cx="7.2" cy="7.2" r="7.2"></circle>
                           </g>
                        </svg>
                     ) : (
                        <svg className="nav__icon" role="presentation" viewBox="0 0 18 17">
                           <g
                              transform="translate(1 1)"
                              stroke="currentColor"
                              fill="none"
                              fillRule="evenodd"
                              strokeLinecap="square"
                           >
                              <path d="M16 16l-5.0752-5.0752"></path>
                              <circle cx="6.4" cy="6.4" r="6.4"></circle>
                           </g>
                        </svg>
                     )}
                  </div>
               </a>
            </li>

            <li className="nav__list">
               <Link to="/cart" className="nav__link">
                  <div className="nav__icon-box">
                     <span className="nav__cart-number">9</span>
                     {windowWidth > 600 ? (
                        <svg className="nav__icon" role="presentation" viewBox="0 0 19 23">
                           <path
                              d="M0 22.985V5.995L2 6v.03l17-.014v16.968H0zm17-15H2v13h15v-13zm-5-2.882c0-2.04-.493-3.203-2.5-3.203-2 0-2.5 1.164-2.5 3.203v.912H5V4.647C5 1.19 7.274 0 9.5 0 11.517 0 14 1.354 14 4.647v1.368h-2v-.912z"
                              fill="currentColor"
                           ></path>
                        </svg>
                     ) : (
                        <svg className="nav__icon" role="presentation" viewBox="0 0 17 20">
                           <path
                              d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z"
                              fill="currentColor"
                           ></path>
                        </svg>
                     )}
                  </div>
               </Link>
            </li>
         </ul>
      </nav>
   );
}

export default NavbarPrimary;
