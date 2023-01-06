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
                           <span className="cart__cancel">x</span>
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
                           <span className="cart__cancel">x</span>
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
                           <span className="cart__cancel">x</span>
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
            </div>
            <div className="cart__order-summary"></div>
         </div>
      </div>
   );
}

export default Cart;
