import { FaTimes } from "react-icons/fa";
function Cart() {
   return (
      <div className="cart">
         <div className="cart__box">
            <h1 className="cart__heading">Shopping Cart</h1>
            <div className="cart__body">
               <ul className="cart__items">
                  <div className="cart__item">
                     <img className="cart__img" src="/mi-25.webp" alt="" />
                     <div className="cart__details">
                        <div className="cart__details-box-1">
                           <div className="cart__name-box">
                              <span>Midnight Gown-ish</span>
                              <span>
                                 <FaTimes color="#000" />
                              </span>
                           </div>
                           <div className="cart__size-color">
                              <span>Black/Medium</span>
                           </div>
                           <div className="cart__price-box">
                              <span>$2000</span>
                           </div>
                        </div>
                        <div className="cart__details-box-2">
                           <div>
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
                              <span>Midnight Gown-ish</span>
                              <span>
                                 <FaTimes color="#000" />
                              </span>
                           </div>
                           <div className="cart__size-color">
                              <span>Black/Medium</span>
                           </div>
                           <div className="cart__price-box">
                              <span>$2000</span>
                           </div>
                        </div>
                        <div className="cart__details-box-2">
                           <div>
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
                              <span>Midnight Gown-ish</span>
                              <span>
                                 <FaTimes color="#000" />
                              </span>
                           </div>
                           <div className="cart__size-color">
                              <span>Black/Medium</span>
                           </div>
                           <div className="cart__price-box">
                              <span>$2000</span>
                           </div>
                        </div>
                        <div className="cart__details-box-2">
                           <div>
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
                              <span>Midnight Gown-ish</span>
                              <span>
                                 <FaTimes color="#000" />
                              </span>
                           </div>
                           <div className="cart__size-color">
                              <span>Black/Medium</span>
                           </div>
                           <div className="cart__price-box">
                              <span>$2000</span>
                           </div>
                        </div>
                        <div className="cart__details-box-2">
                           <div>
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
                              <span>Midnight Gown-ish</span>
                              <span>
                                 <FaTimes color="#000" />
                              </span>
                           </div>
                           <div className="cart__size-color">
                              <span>Black/Medium</span>
                           </div>
                           <div className="cart__price-box">
                              <span>$2000</span>
                           </div>
                        </div>
                        <div className="cart__details-box-2">
                           <div>
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
                              <span>Midnight Gown-ish</span>
                              <span>
                                 <FaTimes color="#000" />
                              </span>
                           </div>
                           <div className="cart__size-color">
                              <span>Black/Medium</span>
                           </div>
                           <div className="cart__price-box">
                              <span>$2000</span>
                           </div>
                        </div>
                        <div className="cart__details-box-2">
                           <div>
                              <button>-</button>
                              <span>4</span>
                              <button>+</button>
                           </div>
                        </div>
                     </div>
                  </div>
               </ul>
               <div className="cart__order-summary"></div>
            </div>
         </div>
      </div>
   );
}

export default Cart;
