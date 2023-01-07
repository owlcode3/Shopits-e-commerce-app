import { FaTimes } from "react-icons/fa";
function Cart() {
   return (
      <div className="cart">
         <h1 className="cart__heading">Shopping Cart</h1>
         <div className="cart__body">
            <div className="cart__items">
               <div className="cart__item">
                  <img className="cart__img" src="/mi-25.webp" alt="" />
                  <div className="cart__details">
                     <div className="cart__details-box-1">
                        <div className="cart__name-box">
                           <span className="cart__product-name">Midnight Gown-ish</span>
                           <span className="cart__cancel">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="20"
                                 height="20"
                                 viewBox="0 0 19 18"
                                 class="cart__close-icon"
                              >
                                 <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                                    <g
                                       fill="#000"
                                       transform="translate(-927 -991) translate(900.277 962)"
                                    >
                                       <g transform="translate(27 29)">
                                          <path d="M10.627 9.013l6.872 6.873.708.707-1.415 1.414-.707-.707-6.872-6.872L2.34 17.3l-.707.707L.22 16.593l.707-.707L7.8 9.013.946 2.161l-.707-.708L1.653.04l.707.707L9.213 7.6 16.066.746l.707-.707 1.414 1.414-.707.708-6.853 6.852z"></path>
                                       </g>
                                    </g>
                                 </g>
                              </svg>
                           </span>
                        </div>
                        <div className="cart__size-color">
                           <span>Black / Medium</span>
                        </div>
                        <div className="cart__price-box">
                           <span>$2000</span>
                        </div>
                     </div>
                     <div className="cart__details-box-2">
                        <div className="cart__quality">
                           <button>-</button>
                           <span>4</span>
                           <button>+</button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="cart__item">
                  <img className="cart__img" src="/mi-25.webp" alt="" />
                  <div className="cart__details">
                     <div className="cart__details-box-1">
                        <div className="cart__name-box">
                           <span className="cart__product-name">Midnight Gown-ish</span>
                           <span className="cart__cancel">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="20"
                                 height="20"
                                 viewBox="0 0 19 18"
                                 class="cart__close-icon"
                              >
                                 <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                                    <g
                                       fill="#000"
                                       transform="translate(-927 -991) translate(900.277 962)"
                                    >
                                       <g transform="translate(27 29)">
                                          <path d="M10.627 9.013l6.872 6.873.708.707-1.415 1.414-.707-.707-6.872-6.872L2.34 17.3l-.707.707L.22 16.593l.707-.707L7.8 9.013.946 2.161l-.707-.708L1.653.04l.707.707L9.213 7.6 16.066.746l.707-.707 1.414 1.414-.707.708-6.853 6.852z"></path>
                                       </g>
                                    </g>
                                 </g>
                              </svg>
                           </span>
                        </div>
                        <div className="cart__size-color">
                           <span>Black / Medium</span>
                        </div>
                        <div className="cart__price-box">
                           <span>$2000</span>
                        </div>
                     </div>
                     <div className="cart__details-box-2">
                        <div className="cart__quality">
                           <button>-</button>
                           <span>4</span>
                           <button>+</button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="cart__item">
                  <img className="cart__img" src="/mi-25.webp" alt="" />
                  <div className="cart__details">
                     <div className="cart__details-box-1">
                        <div className="cart__name-box">
                           <span className="cart__product-name">Midnight Gown-ish</span>
                           <div className="cart__cancel">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="20"
                                 height="20"
                                 viewBox="0 0 19 18"
                                 class="cart__close-icon"
                              >
                                 <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                                    <g
                                       fill="#000"
                                       transform="translate(-927 -991) translate(900.277 962)"
                                    >
                                       <g transform="translate(27 29)">
                                          <path d="M10.627 9.013l6.872 6.873.708.707-1.415 1.414-.707-.707-6.872-6.872L2.34 17.3l-.707.707L.22 16.593l.707-.707L7.8 9.013.946 2.161l-.707-.708L1.653.04l.707.707L9.213 7.6 16.066.746l.707-.707 1.414 1.414-.707.708-6.853 6.852z"></path>
                                       </g>
                                    </g>
                                 </g>
                              </svg>
                           </div>
                        </div>
                        <div className="cart__size-color">
                           <span>Black / Medium</span>
                        </div>
                        <div className="cart__price-box">
                           <span>$2000</span>
                        </div>
                     </div>
                     <div className="cart__details-box-2">
                        <div className="cart__quality">
                           <button>-</button>
                           <span>4</span>
                           <button>+</button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="cart__coupon-box">
                  <input className="cart__coupon-input" type="text" placeholder="coupon code" />
                  <button className="cart__coupon-btn">apply coupon</button>
               </div>
            </div>
            <div className="cart__order-summary">
               <ul className="cart__lists">
                  <li className="cart__list cart__list--1">Cart total</li>
                  <li className="cart__list cart__list--2">
                     <span>Subtotal</span>
                     <span>$4000</span>
                  </li>
                  <li className="cart__list cart__list--3">
                     <span>Shipping</span>
                     <span>Enter your address for easy and quick shipping.</span>
                     <div className="cart__shipping-options"></div>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default Cart;
